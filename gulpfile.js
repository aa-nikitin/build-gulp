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
        'js.process',
        'clean',
        'sass.build',
        'js.process.build',
        'js.libs',
        'css.libs',
        'favicon.generate',
        'favicon.markups'
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
        'js:process',
        'js:libs',
        'sprite:svg',
        'js:libs',
        'css:libs'
    ),
    $.gulp.parallel(
        'watch',
        'serve'
    )
));

$.gulp.task('build', $.gulp.series(
    'clean',
    $.gulp.parallel(
        'sass:build',
        'pug',
        'copy:fonts',
        'copy:image',
        'sprite:images',
        'sprite:svg',
        'js:process:build',
        'js:libs',
        'css:libs'
    )
));