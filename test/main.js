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
                    'app/js/controllers.js',
                    'app/js/directives.js',
                    'app/js/filters.js',
                    'app/js/services.js',
                    'app/partials/partial1.html',
                    'app/partials/partial2.html',
                    'test/karma.conf.js',
                    'test/protractor-conf.js',
                    'test/e2e/scenarios.js',
                    'test/unit/controllersSpec.js',
                    'test/unit/directivesSpec.js',
                    'test/unit/filtersSpec.js',
                    'test/unit/servicesSpec.js'
                ]);

                done();
            });
        });
    });
});
