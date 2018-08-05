'use strict';

module.exports = function() {
    $.gulp.task('watch', function(){
        $.gulp.watch('src/style/*.scss', $.gulp.series('sass'));
        $.gulp.watch('src/pages/*.pug', $.gulp.series('pug'));
    });
}