// generated on 2016-01-06 using generator-gulp-webapp 1.0.3
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';
import {rev as config}  from '../../config';

const $ = gulpLoadPlugins();

gulp.task('demo:rev:js', () => {

  browserSync.notify('Rev replace');

  var jsfilter = $.filter(config.production.jsfilter, {restore: true});

  return gulp.src(config.production.src)
    .pipe(jsfilter)
    .pipe($.if('*.js', $.rev()))
    .pipe(gulp.dest(config.production.dest))
    .pipe($.if('*.js', $.rev.manifest()))
    .pipe(gulp.dest(config.production.rev.js));

});

gulp.task('demo:rev:css', () => {

  browserSync.notify('Rev replace');

  var cssfilter = $.filter(config.production.cssfilter, {restore: true});

  return gulp.src(config.production.src)
    .pipe(cssfilter)
    .pipe($.if('*.css',$.rev()))
    .pipe(gulp.dest(config.production.dest))
    .pipe($.if('*.css', $.rev.manifest()))
    .pipe(gulp.dest(config.production.rev.css));

});

gulp.task('demo:rev:html', () => {

  browserSync.notify('Rev replace');

  var nojscssfilter = $.filter(config.production.nojscssfilter, {restore: true});

  return gulp.src(config.production.src)
    .pipe(nojscssfilter)
    .pipe(gulp.dest(config.production.dest));

});


gulp.task('demo:rev', () => {

  return gulp.src(config.production.revSrc)
    .pipe($.revCollector({
      replaceReved: true
    }))
    .pipe(gulp.dest(config.production.dest));

});


gulp.task('demo:rev:sequence', (cb) => {

  browserSync.notify('Building Rev');

  $.sequence('demo:rev:js', 'demo:rev:css', 'demo:rev:html', 'demo:rev', cb);
});
