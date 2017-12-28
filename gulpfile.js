var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglifyjs'),
    browserSync = require('browser-sync'),
    cssnano = require('gulp-cssnano'),
    rename = require('gulp-rename'),
    del = require('del'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    cache = require('gulp-cache'),
    autoprefixer = require('gulp-autoprefixer'),
    rigger = require('gulp-rigger');


gulp.task('default'/*,['css-libs']*/, function () {
    return gulp.src(['www/styles/*.scss', 'www/styles/*.sass'])//change
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 8', 'ie 7'], {cascade: true}))
        .pipe(gulp.dest('www/styles'))
        .pipe(browserSync.reload({stream: true}));


});

gulp.task('scripts', function () {
    return gulp.src('www/js/main.js')
        .pipe(rigger())
        .pipe(concat('main.js'))
        .pipe(gulp.dest('www/js'))
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
});


gulp.task('css-libs', function () {
    return gulp.src('www/styles/main.css')
        .pipe(cssnano())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('www/styles'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('img', function () {
    return gulp.src('www/images/**/*')
        .pipe(cache(imagemin({
            interlaced: true,
            progressice: true,
            svgoPlugins: [{removeViewBox: false}],
            une: [pngquant()]
        })))
        .pipe(gulp.dest('build/images'));
});


gulp.task('browser-sync', function () {
    browserSync({
        server: {
            baseDir: 'www'
        },
        notify: false
    });
});

gulp.task('clean', function () {
    return del.sync('build');

});

gulp.task('clean', function () {
    return cache.clearAll();
});


gulp.task('watch', ['browser-sync',/* 'css-libs',*/ 'scripts'], function () {
    gulp.watch(['www/styles/**/*.scss', 'www/styles/**/*.sass'], ['default']);
    gulp.watch('www/*.html', browserSync.reload);
    //gulp.watch('www/js/**/*.js', browserSync.reload);
});



gulp.task('build', ['clean', 'img', 'default', 'scripts'], function () {
    var buildCss = gulp.src([
        'www/styles/*.css',
        'www/styles/*.min.css'
    ])
        .pipe(gulp.dest('build/styles'));

    var buildFonts = gulp.src('www/fonts/**/**.*')
        .pipe(gulp.dest('build/fonts'));

    var buildJs = gulp.src('www/scripts/**/*')
        .pipe(gulp.dest('build/scripts'));

    var buildHtml = gulp.src('www/*.html')
        .pipe(gulp.dest('build'));

    var buildLibs = gulp.src('www/vendor/*.html')
        .pipe(gulp.dest('build/vendor'));

});


