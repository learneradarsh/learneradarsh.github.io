const eslint = require('gulp-eslint');
const uglify = require('gulp-uglify');

const jsPath = '_scripts/*.js';
const destPath = '_site/js';
const libs = [
  'node_modules/three/build/three.module.js',
  'node_modules/gsap/dist/gsap.min.js',
];
const libsDest = `${destPath}/lib`;

module.exports = gulp => {
  // Copy Three.js and GSAP into js/lib and _site/js/lib
  gulp.task('copy-libs', () => {
    return gulp
      .src(libs)
      .pipe(gulp.dest('js/lib'))
      .pipe(gulp.dest(libsDest));
  });

  const compileScripts = () => {
    return gulp
      .src(jsPath)
      .pipe(
        eslint({
          useEslintrc: true,
        })
      )
      .pipe(eslint.format())
      // .pipe(uglify())
      .pipe(gulp.dest(destPath))
      .pipe(gulp.dest('js'));
  };

  gulp.task('scripts', gulp.series('copy-libs', compileScripts));
};
