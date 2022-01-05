const {src, dest,watch,series,parallel} = require('gulp');

// CSS
// De gulp-sass traemos el compilador.
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

// SOURCEMAPS
const sourcemaps=require('gulp-sourcemaps');


// Imagenes
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const avif = require('gulp-avif');





function css(done){
    src('src/scss/app.scss')
        // Inicia un sourcemap para CSS y lo guarda en un archivo.
        .pipe(sourcemaps.init())
        // Compilar
        .pipe(sass())
        .pipe(postcss([autoprefixer(), cssnano()])) // Crea codigo para navegadores viejos. Browserlist en package.json
        // Escribe un sourcemap antes de la salida.
        .pipe(sourcemaps.write('.'))
        /// Destino de la compilacion
        .pipe(dest('./build/css'))
    done();
}
function dev() {
    watch('src/scss/**/*.scss', css);
    watch('src/img/**/*', imagenes);
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
    const opciones = {
        // Compresion de imagenes
        quality: 50
    }
    return src('src/img/**/*.{jpg,png}')
        .pipe(webp(opciones))
        .pipe(dest('build/img'))
}
// Imagenes a formato AVIF
function versionAvif() {
    const opciones = {
        // Compresion de imagenes
        quality: 50
    }
    return src('src/img/**/*.{jpg,png}')
        .pipe(avif(opciones))
        .pipe(dest('build/img'))
}



exports.css = css;
exports.dev = dev;
exports.imagenes = imagenes;
exports.versionWebp = versionWebp;
exports.versionAvif = versionAvif;
exports.default = series(imagenes,versionWebp,versionAvif,css,dev);


// series: Se inicia una tarea , y hasta que finaliza, inicia la siguiente.
// parallel: Se inician todas al mismo tiempo