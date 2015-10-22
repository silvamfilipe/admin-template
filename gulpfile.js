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
    bowerDir: './bower_components'
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
            from: config.bowerDir + "/bootstrap-sass/assets/stylesheets/bootstrap/mixins/*.*",
            to: config.sassPath + "/bootstrap/mixins"
        },
        {
            from: config.bowerDir + "/bootstrap-sass/assets/fonts/bootstrap/*.*",
            to: "./fonts"
        }
    ]
};

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
    return gulp.src(config.sassPath + '/style.scss')
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
gulp.task('default', ['bower', 'css']);