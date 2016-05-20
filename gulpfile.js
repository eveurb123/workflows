var gulp = require('gulp');
    gutil = require('gulp-util');
    coffee = require('gulp-coffee');

   
var coffeeSources = ['components/coffee/tagline.coffe'];


    gulp.task('coffee', function(){
        
        gulp.src(coffeeSources)
            .pipe(coffe({bare: true})
                  .on('error', gutil.log))
            .pipe(gulp.dest('components/scripts'))
            
                
    });

    
    
