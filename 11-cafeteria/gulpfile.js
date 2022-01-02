const {src, dest,watch} = require('gulp');
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
    watch('src/scss/app.scss', css);
}

exports.css = css;
exports.dev = dev;