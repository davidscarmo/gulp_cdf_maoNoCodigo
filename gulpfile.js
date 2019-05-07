var gulp = require('gulp');
var plumber = require('gulp-plumber');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');

// source path / caminho fonte 
var js_src = "./src/js/*.js"; 

// dist path / caminho de destino 

var js_dist="./js/";
var js_dist_name = "script.js"; // nome do script já concatenado 

// minify e concat scripts / minifica e concatena scripts 

gulp.task('scripts', function()
{  
    return gulp.src(js_src)
        .pipe(plumber())
        .pipe(uglify())
        .pipe(concat(js_dist_name))
        .pipe(gulp.dest(js_dist));

});

// watch source path / monitora o caminho fonte / quando algo é alterado ele chama automaticamente o gulp scripts 
gulp.task('watch', function()
{
    gulp.watch([js_src], gulp.series('scripts')); 
    /* no vídeo informava pra usar ['scripts'] pra chamar o script, mas dava erro, a partir da versão 4.x + é necessário utilizar a função gulp.series(+nome script) pra chamar*/ 
});