var gulp = require('gulp'),
    sass = require('gulp-sass'),
    plumber = require('gulp-plumber'),
	bower = require('gulp-bower');

gulp.task('sass', function() {
    gulp.src('sass/*.sass')
        .pipe(plumber({
            errorHandler: function(err) {
                console.log(err);
                this.emit('end');
            }
            }))
        .pipe(sass())
        .pipe(gulp.dest('./static/css'));
});

gulp.task('bower', function() {
    bower({ cwd: './static' });
});

gulp.task('default', ['sass', 'bower']);
