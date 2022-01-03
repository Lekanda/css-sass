const {src, dest,watch,series,parallel} = require('gulp');
// De gulp-sass traemos el compilador.
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

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
}





exports.css = css;
exports.dev = dev;
exports.default = series(css,dev);


// series: Se inicia una tarea , y hasta que finaliza, inicia la siguiente.
// parallel: Se inician todas al mismo tiempo