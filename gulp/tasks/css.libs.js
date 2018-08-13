'use strict';
module.exports = function() {
    $.gulp.task('css:libs', function(){
        return $.gulp.src('./src/libs/**/*.css')
            .pipe($.gp.concat('libs.css'))
            .pipe($.gp.cssmin())
            .pipe($.gp.rename({
                suffix: '.min'
            }))
            .pipe($.gulp.dest('build/assets/css'));
    });
}