const { src, dest,watch } = require('gulp');
function defaultTask(cb) {
    // place code for your default task here
    return src('./ucf-apps/demos/src/**/*.*')
    .pipe(dest('../mobile.tinper.org/componentsDemos//ucf-apps/demos/src'))
}

// 关联的任务（task）将在启动时执行
watch('./ucf-apps/demos/src/**/*.*', { ignoreInitial: false }, defaultTask);
  
exports.default = defaultTask