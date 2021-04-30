const { src, dest, watch, parallel } = require('gulp');
const plumber = require('gulp-plumber') // поиск ошибок
const scss = require('gulp-sass');
const browserSync = require('browser-sync').create();


const styles = () => {
  return src('./scss/style.scss')
    .pipe(plumber())
    .pipe(scss())
    .pipe(dest('./css'))
    .pipe(browserSync.stream())
}

const browsersync = () => {
  browserSync.init({
    server: {
      baseDir: './',
    }
  });
}

const watching = () => {
  watch(['./scss/**/*.scss'], styles)
  watch(['./*.html']).on('change', browserSync.reload)
  watch(['./js/**/*.js']).on('change', browserSync.reload)
}

exports.styles = styles; 
exports.watching = watching; 
exports.browsersync = browsersync;

exports.default = parallel(browsersync, watching);


