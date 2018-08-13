'use strict';
module.exports = function() {
    $.gulp.task('js:libs', function(){
        return $.gulp.src('./src/libs/**/*.js')
            .pipe($.gp.concat('libs.js'))
            .pipe($.gp.uglify())
            .pipe($.gp.rename({
                suffix: '.min'
            }))
        .pipe($.gulp.dest('build/assets/js'));
    });
}