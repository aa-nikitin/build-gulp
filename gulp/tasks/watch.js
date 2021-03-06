'use strict';

module.exports = function() {
    $.gulp.task('watch', function(){
        $.gulp.watch('src/pages/**/*.pug', $.gulp.series('pug'));
        $.gulp.watch('src/fonts/**/*.*', $.gulp.series('copy:fonts'));
        $.gulp.watch('src/images/**/*.*', $.gulp.series('copy:image'));
        $.gulp.watch('src/js/**/*.js', $.gulp.series('js:process'));
        $.gulp.watch('src/style/**/*.scss', $.gulp.series('sass'));
    });
}