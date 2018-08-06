'use strict';

module.exports = function() {
    $.gulp.task('serve', function () {
        $.browserSync.init({
            open: true,
            server: 'build' // Базовая директория
        });

        $.browserSync.watch(['build'], $.browserSync.reload); 

    });
}