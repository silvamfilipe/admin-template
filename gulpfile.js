/**
 * Gulp file
 */

// Imports
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefix = require('gulp-autoprefixer');
var notify = require("gulp-notify");
var bower = require('gulp-bower');
var rename = require('gulp-rename');

// definitios
var config = {
    sassPath: './resources/sass',
    bowerDir: './bower_components',
    jsVendor: './js/vendor'
};

// file paths for copy file
var filePaths = {
    copyFiles: [
        {
            from: config.bowerDir + "/bootstrap-sass/assets/stylesheets/_bootstrap.scss",
            to: config.sassPath
        },
        {
            from: config.bowerDir + "/bootstrap-sass/assets/stylesheets/bootstrap/*.*",
            to: config.sassPath + "/bootstrap"
        },
        {
            from: config.bowerDir + "/material-shadows/material-shadows.scss",
            to: config.sassPath + "/material-shadows"
        },
        {
            from: config.bowerDir + "/waves/src/scss/waves.scss",
            to: config.sassPath + "/waves"
        },
        {
            from: config.bowerDir + "/bootstrap-sass/assets/stylesheets/bootstrap/mixins/*.*",
            to: config.sassPath + "/bootstrap/mixins"
        },
        {
            from: config.bowerDir + "/bootstrap-sass/assets/fonts/bootstrap/*.*",
            to: "./fonts"
        },
        {
            from: config.bowerDir + "/jquery/dist/*.*",
            to: config.jsVendor + "/jquery"
        },
        {
            from: config.bowerDir + "/bootstrap-sass/assets/javascripts/*.*",
            to: config.jsVendor
        },
        {
            from: config.bowerDir + "/bootstrap-sass/assets/javascripts/bootstrap/*.*",
            to: config.jsVendor + "/bootstrap"
        },
        {
            from: config.bowerDir + "/angular/*.js",
            to: config.jsVendor + "/angular"
        },
        {
            from: config.bowerDir + "/angular/*.js.*",
            to: config.jsVendor + "/angular"
        },
        {
            from: config.bowerDir + "/angular-bootstrap/ui-bootstrap-tpls.min.js",
            to: config.jsVendor + "/angular-bootstrap"
        },
        {
            from: config.bowerDir + "/angular-ui-router/release/*.js",
            to: config.jsVendor + "/angular-ui-router"
        }
    ]
};
//angular-bootstrap/ui-bootstrap-tpls.min.js

// file copy task
gulp.task('fileCopy', ['bower'], function () {
    var index;
    for (index in filePaths.copyFiles) {
        gulp.src(filePaths.copyFiles[index].from)
            .pipe(gulp.dest(filePaths.copyFiles[index].to));
    }
});

// Bower update task
gulp.task('bower', function () {
    return bower()
        .pipe(gulp.dest(config.bowerDir));
});

// Sass compile task
gulp.task('css', function () {
    return gulp.src(config.sassPath + '/styles.scss')
     .pipe(sass({
            style: 'compressed',
            loadPath: [
                './resources/sass',
                config.bowerDir + '/bootstrap-sass-official/assets/stylesheets',
                config.bowerDir + '/fontawesome/scss',
            ]
        }
            )
           .on("error", notify.onError(function (error) {
             return "Error: " + error.message;
         }))
      )
        .pipe(autoprefix('last 2 version'))
        .pipe(gulp.dest('./css'));
});

// Rerun the task when a file changes
gulp.task('watch', function () {
    gulp.watch(config.sassPath + '/**/*.scss', ['css']);
});

// Default task
gulp.task('default', ['fileCopy', 'css']);