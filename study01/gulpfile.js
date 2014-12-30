var gulp = require('gulp'),
    webserver = require('gulp-webserver');

gulp.task('webserver', function() {
  gulp.src('./public')
  .pipe(webserver({
    livereload: false
  }));
});

gulp.task('watch', function() {
});

gulp.task('default', ['webserver', 'watch']);
