global.$ = {
    tasks : [
        'watch',
        'serve',
        'clean'
    ],
    gulp : require('gulp'),
    del : require('del'),
    browserSync : require('browser-sync').create(),
    gp : require('gulp-load-plugins')()
}

$.tasks.forEach(function(task) {
    require(`./gulp/tasks/${task}.js`)();
});

$.gulp.task('default', $.gulp.series(
    'clean',
    $.gulp.parallel(
        'watch',
        'serve'
    )
));