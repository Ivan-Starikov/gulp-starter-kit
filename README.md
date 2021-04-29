# gulp-starter-kit
A simple Gulp 4 starter kit 

## First steps
1. Install Node.js and npm. Check for the installation by command `node -v` 
2. Open the project folder and type `npm init` to create `package.json` file
3. Type `npm i gulp-cli -g` to install the gulp command line globally
4. Type `npm i gulp -D` to install gulp module.
5. Create `gulpfile.js` with folowing code `const { src, dest } = require('gulp');`

## Project structure
`/build` - final result

`/src` - development files

## CSS
Instead common CSS we will use SCSS preprocessor

### SCSS file structure 

`src/styles` - keeps all scss files.

`src/pages/common/` - keeps all scss modules (header, footer)

`src/pages/common/variables.scss` - keeps all variables 

`src/pages/common/mixins/` - reusabale styles

`src/pages/style.scss` - main scss file

### SCSS plugins 
1. Install scss-plugin `npm i node-sass gulp-sass -D`
2. Create a function that changes scss code to css  
3. Add to the `gulpfile.js` following  code (example):
```
const scss = require('gulp-sass')        // apply gulp-sass module

const styles = () => {                  
  return src('./src/styles/style.scss') // function 'styles' takes style.scss
    .pipe(scss())                       // converts style.scss to style.css
    .pipe(dest('./build/css'))          // puts style.css to the build/css/ folder
}

exports.styles = styles;                // create a new task from function
```

## HTML 
Instead common HTML we will use Pug preprocessor

### Pug file structure 

`src/pages` - keeps all pug files.

`src/pages/blocks` - all pug modules (header, footer)

`src/pages/blocks/layout.pug` -  main layout file.

`src/pages/index.pug` 

### Pug plugins 
1. Install pug-plugin `npm i gulp-pug -D`
2. Create a function that changes pug to html code 
3. Add to the `gulpfile.js` Pug task

### Reloading
1. Add { watch } to the line `const { src, dest } = require('gulp');` in `gulpfile.js` 
2. Create a function
```
const watching = () => {
  watch(['./src/styles/**/*.scss'], styles)
}
```
3. Add plugin for fast reloading. Type `npm i browser-sync -D`
4. Make a task 

