var gulp = require('gulp'),
    sass = require('gulp-sass'),
    plumber = require('gulp-plumber');

gulp.task('sass', function() {
    gulp.src('sass/*.sass')
        .pipe(plumber({
            errorHandler: function(err) {
                console.log(err);
                this.emit('end');
            }
            }))
        .pipe(sass())
        .pipe(gulp.dest('./static/app.css'));
});

gulp.task('default', ['sass']);
