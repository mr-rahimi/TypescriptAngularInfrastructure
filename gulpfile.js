var gulp = require('gulp'),
	util = require('gulp-util'),
    clean = require('gulp-clean'),
	typescript = require('gulp-typescript'),
	merge = require('merge-stream'),
    broserify = require('gulp-browserify');

gulp.task('clean', function () {
    return gulp.src('build/production/**/*', { read: false })
		.pipe(clean({
		    force: true
		}));
});
gulp.task("typescript", function () {
    return gulp.src('build/development/**/*.ts')
		.pipe(typescript({
		    module: 'amd',
		    target: 'ES5'
		}))
		.pipe(gulp.dest('build/production'));
});
gulp.task("staticFile", function () {
    var index = gulp.src('build/development/index.html')
    .pipe(gulp.dest('build/production'));

    var lib = gulp.src('build/development/lib/**/*')
      .pipe(gulp.dest('build/production/lib'));

    var lib = gulp.src('build/development/app/main.js')
      .pipe(gulp.dest('build/production/app'));

    var html = gulp.src('build/development/modules/*/views/**/*.html')
		.pipe(gulp.dest('build/production/modules'))
	    .on("error", util.log);

    return merge(index, lib, html);
});
//gulp.task("views", function () {
//    return gulp.src('build/development/modules/*/views/**/*.html')
//		.pipe(gulp.dest('build/production/modules'))
//	    .on("error", util.log);
//});

gulp.task("all", ['clean', 'staticFile', 'typescript']);

