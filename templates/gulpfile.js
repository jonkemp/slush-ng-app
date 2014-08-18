'use strict';

var gulp = require('gulp');

gulp.task('clean', function(cb) {
  require('rimraf')('dist', cb);
});

gulp.task('lint', function() {
  var jshint = require('gulp-jshint');

  return gulp.src('app/js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('images', function(){
  return gulp.src('app/img/{,*/}*.{png,jpg,jpeg,gif,webp,svg}')
    .pipe(gulp.dest('dist/img'));
});

gulp.task('html', function(){
  var uglify = require('gulp-uglify'),
    minifyCss = require('gulp-minify-css'),
    useref = require('gulp-useref'),
    gulpif = require('gulp-if'),
    assets = useref.assets();

  return gulp.src('app/*.html')
    .pipe(assets)
    .pipe(gulpif('*.js', uglify()))
    .pipe(gulpif('*.css', minifyCss()))
    .pipe(assets.restore())
    .pipe(useref())
    .pipe(gulp.dest('dist'));
});

// inject bower components
gulp.task('wiredep', function () {
  var wiredep = require('wiredep').stream;

  gulp.src('app/*.html')
    .pipe(wiredep({
      directory: 'app/bower_components'
    }))
    .pipe(gulp.dest('app'));
});

gulp.task('connect', function() {
  var connect = require('connect');
  var app = connect()
    .use(require('connect-livereload')({ port: 35729 }))
    .use(connect.static('app'))
    .use(connect.directory('app'));

  require('http').createServer(app)
    .listen(9000)
    .on('listening', function() {
      console.log('Started connect web server on http://localhost:9000');

      require('opn')('http://localhost:9000');
    });
});

gulp.task('serve', ['connect'], function () {
  var livereload = require('gulp-livereload');

  livereload.listen();

  // watch for changes
  gulp.watch([
    'app/*.html',
    'app/css/**/*.css',
    'app/js/**/*.js',
    'app/img/**/*'
  ]).on('change', livereload.changed);

  gulp.watch('bower.json', ['wiredep']);
});

gulp.task('build', ['lint', 'html', 'images']);

gulp.task('default', ['clean'], function () {
  gulp.start('build');
});
