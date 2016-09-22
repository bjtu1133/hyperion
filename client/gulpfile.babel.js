"use strict";

import gulp from "gulp";
import browserify from "browserify";
import source from "vinyl-source-stream";

gulp.task("default",["transpile-src","build-asset"]);

gulp.task("transpile-src", () => {

	return browserify("src/app.js")
	.transform("babelify")
	.bundle()
  .on("error",function(error){
    console.log(console.error("\nError: ",error.message, "\n"));
  })
	.pipe(source("bundle.js"))
	.pipe(gulp.dest("dist"));

});

gulp.task("watch", ["transpile-src"], () => {
  gulp.watch("src/**/*", ["transpile-src"]);
});

gulp.task("build-asset",
["transpile-jquery",
"transpile-bootstrap-css",
"transpile-bootstrap-js",
"transpile-bootstrap-fonts"
]);

gulp.task("transpile-jquery", () => {
	return gulp.src("../node_modules/jquery/dist/jquery.min.js")
	.pipe(gulp.dest("dist/asset/js"));
})

gulp.task("transpile-bootstrap-css", function(){
  return gulp.src("../node_modules/bootstrap/dist/css/*.min.css")
    .pipe(gulp.dest("dist/asset/css"));
});

gulp.task("transpile-bootstrap-js", function(){
  return gulp.src("../node_modules/bootstrap/dist/js/*.min.js")
    .pipe(gulp.dest("dist/asset/js"));
});

gulp.task("transpile-bootstrap-fonts", function(){
  return gulp.src("../node_modules/bootstrap/dist/fonts/*.*")
    .pipe(gulp.dest("dist/asset/fonts"));
});
