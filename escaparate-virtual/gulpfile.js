var elixir = require('laravel-elixir');
var gulp = require('gulp');
var shell = require('gulp-shell');
var Task = elixir.Task;
require('laravel-elixir-stylus');
require('laravel-elixir-imagemin');
require('laravel-elixir-modernizr');

elixir.extend('speak', function(message){
    new Task('speak', function(){
        return gulp.src('').pipe(shell('say ' + message));
    })
    .watch('./app/**');
});


var paths = {
    'bootstrap': './node_modules/bootstrap-styl',
    'fontawesome': './node_modules/font-awesome-stylus'
};

elixir(function(mix) {
  mix.stylus('libs.styl')
    .stylus('app.styl')
    .browserify('libs.js')
    .browserify('app.js')
    .copy('./node_modules/select2/dist/css/select2.css', 'public/css')
    .copy('./node_modules/select2-bootstrap-css/select2-bootstrap.css', 'public/css')
    .copy('./node_modules/select2/dist/js/select2.full.js', 'public/js')
    .modernizr()
    .styles([
        './public/css/libs.css',
        './public/css/select2.css',
        './public/css/select2-bootstrap.css',
        './public/css/app.css'
    ])
   .scripts([
        './public/js/vendor/modernizr-custom.js',
         './public/js/libs.js',
         './public/js/select2.full.js',
         './public/js/app.js'
    ])
    .version(['css/all.css','js/all.js'])
    .imagemin()
    .copy(paths.fontawesome + '/fonts', 'public/build/fonts')
    .copy(paths.bootstrap + '/fonts', 'public/build/fonts')
    .browserSync({proxy: 'laravel.dev'})
    .phpUnit()
    .phpSpec()
    .speak('File Changed');
});