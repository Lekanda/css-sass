const {src, dest,watch,series,parallel} = require('gulp');
// De gulp-sass traemos el compilador.
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

const imagemin = require('gulp-imagemin');

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


exports.css = css;
exports.dev = dev;
exports.imagenes = imagenes;
exports.default = series(imagenes,css,dev);


// series: Se inicia una tarea , y hasta que finaliza, inicia la siguiente.
// parallel: Se inician todas al mismo tiempo