'use strict';

module.exports = function() {
    $.gulp.task('sass', function(){
        return $.gulp.src('src/style/app.scss')
            .pipe($.gp.plumber({
                errorHandler: $.gp.notify.onError(function(error) {
                    return {
                        title: 'scss',
                        message: error.message
                    }
                })    
            }))
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.sassGlob())
            .pipe($.gp.sass())
            .pipe($.gp.autoprefixer({ browsers: $.config.autoprefixerConfig }))
            /*.pipe($.gp.cssUnit({
                type: 'px-to-rem',
                rootSize: 16
            }))*/
            .pipe($.gp.sourcemaps.write())
            //.on('error', notify.onError())
            .pipe($.gulp.dest(`${$.config.root}/assets/css/`))
            .pipe($.browserSync.stream());
    });
}