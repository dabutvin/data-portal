var envConfig = require('../env');

if (envConfig.ENV === envConfig.ENVS.DEV) {
    var gulp = require('gulp');
    var config = require('../config')();
    var bs = require("browser-sync");
    var gls = require('gulp-live-server');

    function startBrowsersync(config) {
        bsIns = bs.create();
        bsIns.init(config);
        bsIns.reload();
    }

    /* Start live server dev mode */
    gulp.task('serve-dev', ['sass', 'tsc-app', 'watch-ts', 'watch-sass', 'express-dev'], function () {
        startBrowsersync(config.browserSync.dev);
    });

    /* Start live server production mode */
    gulp.task('serve-build', ['build', 'express-build'], function () {
        startBrowsersync(config.browserSync.prod);
    });

    gulp.task('express-dev', function () {
        var server = gls.new(config.src + '/server.js');
        server.start();
    });

    gulp.task('express-build', function () {
        var server = gls.new(config.build.path + '/server.js');
        server.start();
    });

    gulp.task('nodemon', function (cb) {
        return nodemon({
            script: 'app.js'
        }).once('start', cb);
    });
}
