// boilerplate from https://github.com/wapbamboogie/bootstrap-4-boilerplate

"use strict";

var gulp = require("gulp"),
  sass = require("gulp-sass"),
  maps = require("gulp-sourcemaps"),
  del = require("del"),
  autoprefixer = require("gulp-autoprefixer"),
  cssmin = require("gulp-cssmin");

gulp.task("compileSass", function() {
  return gulp
    .src("_assets/css/main.scss")
    .pipe(maps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(cssmin())
    .pipe(maps.write())
    .pipe(gulp.dest("dist/css"));
});

gulp.task("clean", function() {
  del(["dist"]);
});

gulp.task("build", ["compileSass"], function() {
  return gulp
    .src(["favicon.ico", "_assets/img/**", "_assets/fonts/**"], {
      base: "./_assets"
    })
    .pipe(gulp.dest("dist"));
});

gulp.task("serve", ["build"], function() {
  gulp.watch("_assets/css/**/*.scss", ["compileSass"]);
});

gulp.task("default", ["clean", "build"]);
