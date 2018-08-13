'use strict';

module.exports = function() {
    $.gulp.task('pug', function buildHTML() {
        return $.gulp.src('src/pages/*.pug')
            .pipe($.gp.plumber({
                errorHandler: $.gp.notify.onError(function(error) {
                    return {
                        title: 'pug',
                        message: error.message
                    }
                })    
            }))
            .pipe($.gp.pug({ pretty: true }))
            .pipe($.gulp.dest('build/'));
    });
}