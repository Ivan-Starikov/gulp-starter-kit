# gulp-starter-kit
A simple Gulp 4 starter kit 

## Create new progect (with current gulp kit)
Type following commands: 
1. `git clone https://github.com/poezdev/gulp-starter-kit`
2. `npm i gulp-cli -g` 
2. `npm i gulp gulp-sass node-sass gulp-plumber browser-sync -D`

## First steps (create new gulp kit) 
1. Install Node.js and npm. Check for the installation by command `node -v` 
2. Open the project folder and type `npm init` to create `package.json` file
3. Type `npm i gulp-cli -g` to install the gulp command line globally
4. Type `npm i gulp -D` to install gulp module.
5. Create `gulpfile.js` with folowing code `const { src, dest } = require('gulp');`

## Folder structure
`/scss` - keeps all scss files

`/css` - appears after compilation

## CSS
Instead common CSS we will use SCSS preprocessor

### SCSS file structure 

`scss/style.scss` - main scss file

`scss/common/` - keeps all scss modules (header, footer)

`scss/common/variables.scss` - keeps all variables 

`scss/common/mixins.scss` - reusabale styles

### SCSS plugins 
1. Install scss plugins `npm i node-sass gulp-sass plumber -D`
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

Create main `index.html` 

### Reloading
1. Add { watch } to the line `const { src, dest } = require('gulp');` in `gulpfile.js` 
2. Create a function
```
const watching = () => {
  watch(['./src/styles/**/*.scss'], styles)                // watches for changes in all scss files and launches function `style`
  watch(['./*.html']).on('change', browserSync.reload)     // watches for changes in html file and reloads it
  watch(['./js/**/*.js']).on('change', browserSync.reload) // watches for changes in js files and reloads it
}
```
3. Add plugin for fast reloading. Type `npm i browser-sync -D`
4. Make a task 
```
const browsersync = () => {
  browserSync.init({
    server: {
      baseDir: './',
    }
  });
}
```
5. Add `exports.default` for parallel executions of the functions 
```
exports.default = parallel(browsersync, watching);
```
