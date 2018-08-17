'use strict';

var realFavicon = require ('gulp-real-favicon');
var fs = require('fs');

// File where the favicon markups are stored
var FAVICON_DATA_FILE = 'faviconData.json';

module.exports = function() {
    $.gulp.task('favicon:markups', function() {
        return $.gulp.src(['build/index.html'])
            .pipe(realFavicon.injectFaviconMarkups(JSON.parse(fs.readFileSync(FAVICON_DATA_FILE)).favicon.html_code))
            .pipe($.gulp.dest('build')); 
    });
}
/*     
    gulp favicon:generate
    gulp favicon:markups
    добавить в index.html --- ./icons

*/