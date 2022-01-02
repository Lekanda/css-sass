const {src, dest,watch} = require('gulp');
// De gulp-sass traemos el compilador.
const sass = require('gulp-sass')(require('sass'));

function css(done){
    src('src/scss/app.scss')
        // Compilar
        .pipe(sass())
        /// Destino de la compilacion
        .pipe(dest('./build/css'))
    done();
}
function dev() {
    watch('src/scss/app.scss', css);
    }

exports.css = css;
exports.dev = dev;