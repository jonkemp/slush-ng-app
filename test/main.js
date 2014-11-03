/* jshint node:true */
/* global require, it, before, beforeEach, describe */

'use strict';
var should = require('should'),
    inquirer = require('inquirer'),
    gulp = require('gulp'),
    mockGulpDest = require('mock-gulp-dest')(gulp);

require('../slushfile');

/**
 * Mock inquirer prompt
 */

function mockPrompt(answers) {
    inquirer.prompt = function (prompts, done) {

        [].concat(prompts).forEach(function (prompt) {
            if (!(prompt.name in answers)) {
                answers[prompt.name] = prompt.default;
            }
        });

        done(answers);
    };
}

describe('slush-ng-app', function() {
    before(function () {
        process.chdir(__dirname);
        process.argv.push('--skip-install');
    });

    describe('default generator', function () {
        beforeEach(function () {
            mockPrompt({
                moveon: true
            });
        });

        it('should put all project files in current working directory', function (done) {
            gulp.start('default').once('stop', function () {
                mockGulpDest.cwd().should.equal(__dirname);
                mockGulpDest.basePath().should.equal(__dirname);
                done();
            });
        });

        it('should create expected files', function (done) {
            gulp.start('default').once('stop', function () {
                mockGulpDest.assertDestContains([
                    '.bowerrc',
                    '.editorconfig',
                    '.gitignore',
                    '.jshintrc',
                    '.travis.yml',
                    'bower.json',
                    'gulpfile.js',
                    'package.json',
                    'LICENSE',
                    'README.md',
                    'app/index.html',
                    'app/index-async.html',
                    'app/img/.gitkeep',
                    'app/css/main.css',
                    'app/css/app.css',
                    'app/js/app.js',
                    'app/components/version/interpolate-filter_test.js',
                    'app/components/version/interpolate-filter.js',
                    'app/components/version/version_test.js',
                    'app/components/version/version-directive_test.js',
                    'app/components/version/version-directive.js',
                    'app/components/version/version.js',
                    'app/view1/view1.html',
                    'app/view1/view1.js',
                    'app/view1/view1_test.js',
                    'app/view2/view2.html',
                    'app/view2/view2.js',
                    'app/view2/view2_test.js',
                    'test/karma.conf.js',
                    'test/e2e-tests/protractor.conf.js',
                    'test/e2e-tests/scenarios.js'
                ]);

                done();
            });
        });
    });
});
