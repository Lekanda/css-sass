const {src, dest} = require('gulp');
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

exports.css = css;