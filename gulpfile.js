/**
 * Created by Yy on 2017/7/7.
 */

var gulp  = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var sass = require('gulp-sass');
var browserify = require('browserify');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');
var babelify = require('babelify');



// 静态服务器
gulp.task('serve',['copy-html', 'sass', 'build-js'], function() {
    browserSync.init({
        server: {
            baseDir: "./dest"
        }
    });

    gulp.watch("src/scss/*.scss", ['sass']);
    gulp.watch("src/*.html").on('change', reload);
    gulp.watch("src/js/*.js", ['build-js']);
});

// // 代理
//
// gulp.task('browser-sync', function() {
//     browserSync.init({
//         proxy: "你的域名或IP"
//     });
// });

// scss编译后的css将注入到浏览器里实现更新
gulp.task('sass', function() {
    return gulp.src("src/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("dest/css"))
        .pipe(reload({stream: true}));
});

// copy html
gulp.task('copy-html', function () {

    return gulp.src('src/*.html')
        .pipe(gulp.dest('dest/'));
});

//编译es6
gulp.task('build-js', function () {

    browserify({
        entries: [
            "./src/js/index.js"
        ]
    })
        .transform(babelify.configure({
            presets: ["es2015"]
        }))
        .bundle()
        .pipe(source('index.js'))
        .pipe(gulp.dest('./dest/js/'));

});

gulp.task('default', ['serve']);