//Основные модули
import gulp from "gulp";
//Импорт модулей
import { path } from "./gulp/config/path.js";
//Импорт общих плагинов
import { plugins } from "./gulp/config/plugins.js";

//Передаем значения в глобальную переменную
global.app = {
    isBuild: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build'),
    path: path,
    gulp: gulp,
    plugins: plugins
}

//Импорт задач
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { less } from "./gulp/tasks/less.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
import { otfToTtf, ttfToWoff, fontsStyle} from "./gulp/tasks/fonts.js";
import { svgSprive } from "./gulp/tasks/svgSprive.js";
import { zip } from "./gulp/tasks/zip.js";
import { ftp } from "./gulp/tasks/ftp.js";
import browserSync, { stream } from "browser-sync";

//Наблюдатель за изменениями в файлах
function watcher() {
    gulp.watch(path.watch.files, copy);//вместо copy gulp.series(copy, ftp)
    gulp.watch(path.watch.html, html);//вместо copy gulp.series(html, ftp)
    gulp.watch(path.watch.less, less);
    // gulp.watch(path.watch.less, less).on('change', browserSync.reload);//для всех задачь чтобы сразу заливать на сервер
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.images, images);
}

export { svgSprive };
//Последовательгая обработка шрифтов
const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);

//Основные задачи
const mainTasks = gulp.series(fonts, gulp.parallel(copy, html, less, js, images),svgSprive);

//Построение сценариев выполнениея задач
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const deployZIP = gulp.series(reset, mainTasks, zip);
const deployFTP = gulp.series(reset, mainTasks, ftp);

//Экспорт сценариев
export { dev }
export { build }
export { deployZIP }
export { deployFTP }

//Выполнение сценария по умолчанию
gulp.task('default', dev); 