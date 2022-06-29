import gulpLess from "gulp-less";
import rename from "gulp-rename";

import cleanCss from "gulp-clean-css";//Сжатие CSS файла
import webpcss from "gulp-webpcss";//Вывод WEBP изображений
import autoprefixer from "gulp-autoprefixer";//Добавление префиксов
import groupCssMediaQueries from "gulp-group-css-media-queries";//Группировка медиа запросов

export const less = () => {
    return app.gulp.src(app.path.src.less, { sourcemaps: app.isDev })
        .pipe(app.plugins.plumber(
            // app.plugins.notify.onError({
            //     title: "LESS",
            //     message: "Error: <%= error.message %>"
            // })
        ))
        .pipe(app.plugins.replace(/@img\//g, '../img/'))
        .pipe(gulpLess({
            outputStyles: 'expanded'
        }))
        .pipe(
            app.plugins.if(
                app.isBuild,
                groupCssMediaQueries()
            )
        )
        .pipe(
            app.plugins.if(
                app.isBuild,
                webpcss({
                    webpClass: ".webp",
                    noWebpClass: ".no-webp"
                })
            )
        )
        .pipe(
            app.plugins.if(
                app.isBuild,
                autoprefixer({
                    grid: true,
                    overrideBrowserslist: ["last 3 version"],
                    cascade: true
                })
            )
        )
        //Закоментировать если не нужен не сжатый дубль файла стилей
        // .pipe(app.plugins.replace(/@img\//g, '../img/'))//это же на 17(решение проблемы с автозаменой при импорте)
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(
            app.plugins.if(
                app.isBuild,
                cleanCss()
            )
        )
        .pipe(rename({
            extname: ".min.css"
        }))
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(app.plugins.browsersync.stream());
}