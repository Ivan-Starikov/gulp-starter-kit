const { src, dest, watch, parallel } = require('gulp');
const scss = require('gulp-sass');
const pug = require('gulp-pug');
const browserSync = require('browser-sync').create();


const pugToHtml = () => {
  return src('./src/pages/index.pug')
    .pipe(pug())
    .pipe(dest('./build'))
}

const styles = () => {
  return src('./src/styles/style.scss')
    .pipe(scss())
    .pipe(dest('./build/css'))
    .pipe(browserSync.stream())
}

const watching = () => {
  watch(['./src/styles/**/*.scss'], styles)
  watch(['./src/pages/**/*.pug'], pugToHtml)
  watch(['./build/*.html']).on('change', browserSync.reload)
}

const browsersync = () => {
  browserSync.init({
    server: {
      baseDir: 'src/'
    }
  });
}


exports.styles = styles; 
exports.pugToHtml = pugToHtml;
exports.watching = watching; 
exports.browsersync = browsersync;

exports.default = parallel(browsersync, watching);
