var gulp = require('gulp'),
    gutil = require('gulp-util'),
    coffee = require('gulp-coffee'),
    browserify = require('gulp-browserify'),
    compass = require('gulp-compass'),
    concat = require('gulp-concat')
    

   
var coffeeSources = ['components/coffee/tagline.coffe'];

var jsSources = [
    'components/scripts/rclick.js',
    'components/scripts/pixgrid.js',         
    'components/scripts/tagline.js',         
    'components/scripts/template.js'           
];

var sassSources = ['components/sass/style.scss'];

   
gulp.task('coffee', function(){
        
        gulp.src(coffeeSources)
            .pipe(coffe({bare: true})
                  .on('error', gutil.log))
            .pipe(gulp.dest('components/scripts'))
});

    
    
gulp.task('js', function(){
    
    gulp.src(jsSources)
        .pipe(concat('script.js'))
        .pipe(browserify())
        .pipe(gulp.dest('builds/development/js'))
        
})


gulp.task('sass', function(){
    gulp.src(sassSources)
        .pipe(compass({
            sass: 'components/sass',
            image: 'builds/development/images',
            style: 'compressed'
        
        }))
        .on('error', gutil.log)
        .pipe(gulp.dest('builds/development/css'))
})