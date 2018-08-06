'use strict';

var webpack = require('webpack');
var webpackStream = require('webpack-stream');

module.exports = function() {
    $.gulp.task('js:process', function () {
        return $.gulp.src('./src/js/app.js')
            .pipe(webpackStream( {
                entry: './src/js/app.js',
                output: {
                  filename: 'app.js',
                },
                module: {
                  rules: [
                    {
                      test: /\.js$/,
                      exclude: /node_modules/,
                      loader: 'babel-loader'
                    },
                  ],
                },
                devtool : 'eval-sourcemap'
            }, webpack))
            .on('error', function handleError() {
                this.emit('end'); // Recover from errors
            })
            .pipe($.gulp.dest('build/assets/js'))
    });
}