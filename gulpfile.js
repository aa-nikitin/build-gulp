global.$ = {
    config: require('./gulp/config'),
    tasks : [
        'sass',
        'pug',
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
        'sass',
        'pug'
    ),
    $.gulp.parallel(
        'watch',
        'serve'
    )
));