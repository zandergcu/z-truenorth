const { src, dest, parallel, watch } = require('gulp');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-csso');
const concat = require('gulp-concat');

const watcher = watch(['sass/**/*.scss']);

watcher.on('change', function(path, stats) {
  console.log(`File ${path} was changed`);
  css();
});

watcher.on('add', function(path, stats) {
  console.log(`File ${path} was removed`);
  css();
});

function css() {
  return src('sass/main.scss')
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(dest('public/css'))
}

function js() {
  return src(['js/jquery.min.js', 'js/popper.min.js', 'js/bootstrap.min.js', 'js/scripts.js'], { sourcemaps: true })
    .pipe(concat('app.min.js'))
    .pipe(dest('public/js', { sourcemaps: true }))
}

exports.js = js;
exports.css = css;
exports.default = parallel(css, js);
