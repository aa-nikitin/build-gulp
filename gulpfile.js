global.$ = {
    config: require('./gulp/config'),
    tasks : [
        'sass',
        'pug',
        'watch',
        'serve',
        'copy.fonts',
        'copy.image',
        'sprite.images',
        'sprite.svg',
        'clean',
        'sass.build'
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
        'pug',
        'copy:fonts',
        'copy:image',
        'sprite:images',
        'sprite:svg'
    ),
    $.gulp.parallel(
        'watch',
        'serve'
    )
));