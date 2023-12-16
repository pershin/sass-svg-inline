# Sass SVG Inline

## Installation

```bash
npm i sass-svg-inline
```

## Example

### gulpfile.js

```js
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const svg = require('sass-svg-inline');

function buildStyles() {
  return gulp.src('./sass/**/*.scss')
          .pipe(sass({
            functions: {
              'svg($path)': svg.setDir('./img')
            }
          }).on('error', sass.logError))
          .pipe(gulp.dest('./css'));
}

gulp.task('buildStyles', buildStyles);
gulp.task('default', gulp.series('buildStyles'));
```

### sass/style.scss

```css
.circle {
  background-image: svg('circle.svg');
  height: 64px;
  width: 64px;
}
```

## License

  [MIT](LICENSE)
