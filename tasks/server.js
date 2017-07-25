import gulp from 'gulp';
import gulpif from 'gulp-if';
import liveserver from 'gulp-live-server';
import args from './util/args';

gulp.task('serve', (cb)=> {
    if (!args.watch) return cb;
    var server = liveserver.new(['--harmony', 'server/bin/www']);
    server.start();

    gulp.watch(['server/public/**/*.js', 'server/views/**/*.ejs', 'server/public/**/*.css'], (file)=>{
        server.notify.apply(server, [file]);
    })

    // 重启服务器级别
    gulp.watch(['server/routes/**/*.js', 'server/app.js'], ()=>{
        server.start.bind(server)();
    })

})
