var gulp = require('gulp');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');

//gulp.task('default', ['test', 'lint', 'watch'], function() {});
gulp.task('default', ['test', 'watch'], function() {});

gulp.task('test', function(){
	return gulp.src('test/*test.js')
						 .pipe(mocha());
});

gulp.task('watch', function() {
  //gulp.watch('*.js', ['test', 'lint']);
  gulp.watch('../app/*.js', ['test']);
});
