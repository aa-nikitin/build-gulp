'use strict';

module.exports = function() {
		$.gulp.task('sprite:images', function() {
	    return $.gulp.src('./src/sprite/*.{png,gif}')
	    .pipe($.gp.spritesmith({
	    	imgName: 'sprite.png',
	    	padding: 5,
	    	algorithm: 'binary-tree',
	    	cssName: 'sprite.css'
	  	})).pipe($.gulp.dest($.config.root + '/assets/img/sprite'));
	})
};