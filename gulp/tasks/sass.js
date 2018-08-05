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
            .pipe($.gp.sass())
            
            //.on('error', notify.onError())
            .pipe($.gulp.dest(`${$.config.root}/assets/css/`));
    });
}