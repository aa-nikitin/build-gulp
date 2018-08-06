'use strict';

module.exports = function() {
    $.gulp.task('sass:build', function(){
        return $.gulp.src('src/style/app.scss')
            .pipe($.gp.plumber({
                errorHandler: $.gp.notify.onError(function(error) {
                    return {
                        title: 'scss',
                        message: error.message
                    }
                })    
            }))
            .pipe($.gp.sassGlob())
            .pipe($.gp.sass())
            .pipe($.gp.autoprefixer({ browsers: $.config.autoprefixerConfig }))
            .pipe($.gp.cssUnit({
                type: 'px-to-rem',
                rootSize: 16
            }))
            .pipe($.gp.cssmin())
            .pipe($.gulp.dest(`${$.config.root}/assets/css/`))
    });
}