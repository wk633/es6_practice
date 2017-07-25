import gulp from 'gulp';
import gulpSequence from 'gulp-sequence';
import args from './util/args';

console.log("debug from build.js: print args");
console.log(args);

gulp.task('build', gulpSequence('clean', 'css', 'pages', 'scripts', ['browser', 'serve']))
