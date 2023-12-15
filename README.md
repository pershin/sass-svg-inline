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
const sassSvgInline = require('sass-svg-inline');

sassSvgInline.setDir('./img/');

gulp.task('default', function (cb) {
  gulp.src(['test.scss'])
          .pipe(sass({
            functions: {
              'svg($path)': sassSvgInline.svg
            }
          }))
          .pipe(gulp.dest('./'));
  cb();
});
```

### test.scss

```css
.test {
  background-image: svg('123.svg');
}
```

## License

  [MIT](LICENSE)
