const {src, dest,watch,series,parallel} = require('gulp');

// CSS
// De gulp-sass traemos el compilador.
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
// Imagenes
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');

function css(done){
    src('src/scss/app.scss')
        // Compilar
        .pipe(sass())
        .pipe(postcss([autoprefixer()])) // Crea codigo para navegadores viejos. Browserlist en package.json
        /// Destino de la compilacion
        .pipe(dest('./build/css'))
    done();
}
function dev() {
    watch('src/scss/**/*.scss', css);
    watch('src/img/**/*', imagenes);
}


// Imagenes con Gulp
function imagenes(){
    return src('src/img/**/*')
        // Minifica la imagen.
        .pipe(imagemin({optimizationLevel: 3}))
        // Destino de img minificada.
        .pipe(dest('build/img'))
}
// Imagenes a formato Webp
function versionWebp() {
    return src('src/img/**/*.{jpg,png}')
        .pipe(webp())
        .pipe(dest('build/img'))
}


exports.css = css;
exports.dev = dev;
exports.imagenes = imagenes;
exports.versionWebp = versionWebp;
exports.default = series(imagenes,versionWebp,css,dev);


// series: Se inicia una tarea , y hasta que finaliza, inicia la siguiente.
// parallel: Se inician todas al mismo tiempo