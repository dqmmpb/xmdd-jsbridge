// generated on 2016-01-06 using generator-gulp-webapp 1.0.3
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';
import {rev as config}  from '../../config';

const $ = gulpLoadPlugins();


gulp.task('demo:rev-hash:js', () => {

  browserSync.notify('Rev replace');

  var jsfilter = $.filter(config.production.jsfilter, {restore: true});

  return gulp.src(config.production.src)
    .pipe(jsfilter)
    .pipe(gulp.dest(config.production.dest));

});

gulp.task('demo:rev-hash:css', () => {

  browserSync.notify('Rev replace');

  var cssfilter = $.filter(config.production.cssfilter, {restore: true});

  return gulp.src(config.production.src)
    .pipe(cssfilter)
    .pipe(gulp.dest(config.production.dest));

});

gulp.task('demo:rev-hash:html', () => {

  browserSync.notify('Rev replace');

  var nojscssfilter = $.filter(config.production.nojscssfilter, {restore: true});

  return gulp.src(config.production.src)
    .pipe(nojscssfilter)
    .pipe(gulp.dest(config.production.dest));

});

gulp.task('demo:rev-hash', () => {

  return gulp.src(config.production.hash.src)
    .pipe($.revHash(config.production.hash))
    .pipe(gulp.dest(config.production.hash.dest));

});

gulp.task('demo:rev-hash:sequence', (cb) => {

  browserSync.notify('Building Rev');

  $.sequence('demo:rev-hash:js', 'demo:rev-hash:css', 'demo:rev-hash:html', 'demo:rev-hash', cb);
});
