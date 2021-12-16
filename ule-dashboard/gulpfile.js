const gulp = require('gulp');
const prettify = require('gulp-html-prettify');
const htmlmin = require('gulp-htmlmin');

// File Copy
gulp.task('copy', function () {
  // Jquery
  gulp.src('./node_modules/jquery/dist/jquery.min.js').pipe(gulp.dest('../product-version/assets/plugins/jquery/'));

  // Bootstrap
  gulp.src('node_modules/bootstrap/dist/css/bootstrap.min.css').pipe(gulp.dest('../product-version/assets/plugins/bootstrap/css/'));
  gulp.src('node_modules/bootstrap/dist/js/bootstrap.min.js').pipe(gulp.dest('../product-version/assets/plugins/bootstrap/js/'));
  gulp.src('node_modules/popper.js/dist/popper.min.js').pipe(gulp.dest('../product-version/assets/plugins/popper/dist/'));

  //AmCharts
  gulp.src('node_modules/amcharts3/amcharts/amcharts.js').pipe(gulp.dest('../product-version/assets/plugins/amcharts/'));
  gulp.src('node_modules/amcharts3/amcharts/pie.js').pipe(gulp.dest('../product-version/assets/plugins/amcharts/'));
  gulp.src('node_modules/amstock3/amcharts/amstock.js').pipe(gulp.dest('../product-version/assets/plugins/amcharts/'));
  gulp.src('node_modules/amstock3/amcharts/serial.js').pipe(gulp.dest('../product-version/assets/plugins/amcharts/'));
  gulp.src('node_modules/ammap3/ammap/ammap.js').pipe(gulp.dest('../product-version/assets/plugins/amcharts/'));
  gulp.src('node_modules/ammap3/ammap/maps/js/worldLow.js').pipe(gulp.dest('../product-version/assets/plugins/amcharts/'));
  gulp.src('node_modules/amstock3/amcharts/plugins/dataloader/dataloader.min.js').pipe(gulp.dest('../product-version/assets/plugins/amcharts/plugins/'));
  gulp.src('node_modules/amstock3/amcharts/plugins/export/export.min.js').pipe(gulp.dest('../product-version/assets/plugins/amcharts/plugins/'));

  // Animate.css
  gulp.src('node_modules/animate.css/animate.min.css').pipe(gulp.dest('../product-version/assets/plugins/animate/'));

  // Bootstrap Date Picker
  gulp.src('node_modules/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css').pipe(gulp.dest('../product-version/assets/plugins/bootstrap-datepicker/dist/css/'));
  gulp.src('node_modules/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js').pipe(gulp.dest('../product-version/assets/plugins/bootstrap-datepicker/dist/js/'));

  // Bootstrap Data Range Picker
  gulp.src('node_modules/bootstrap-daterangepicker/daterangepicker.css').pipe(gulp.dest('../product-version/assets/plugins/bootstrap-daterangepicker/'));
  gulp.src('node_modules/bootstrap-daterangepicker/daterangepicker.js').pipe(gulp.dest('../product-version/assets/plugins/bootstrap-daterangepicker/'));

  // Bootstrap Material Date Time Picker
  gulp.src('node_modules/bootstrap-material-datetimepicker/css/bootstrap-material-datetimepicker.css').pipe(gulp.dest('../product-version/assets/plugins/bootstrap-material-datetimepicker/css/'));
  gulp.src('node_modules/bootstrap-material-datetimepicker/js/bootstrap-material-datetimepicker.js').pipe(gulp.dest('../product-version/assets/plugins/bootstrap-material-datetimepicker/js/'));

  // Bootstrap Tag Input
  gulp.src('node_modules/bootstrap-tagsinput/dist/bootstrap-tagsinput.css').pipe(gulp.dest('../product-version/assets/plugins/bootstrap-tagsinput/css/'));
  gulp.src('node_modules/bootstrap-tagsinput/dist/bootstrap-tagsinput.min.js').pipe(gulp.dest('../product-version/assets/plugins/bootstrap-tagsinput/js/'));

  // Bootstrap Touchpin
  gulp.src('node_modules/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.css').pipe(gulp.dest('../product-version/assets/plugins/bootstrap-touchspin/css/'));
  gulp.src('node_modules/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.js').pipe(gulp.dest('../product-version/assets/plugins/bootstrap-touchspin/js/'));

  // Jquery Mask Plugin
  gulp.src('node_modules/jquery-mask-plugin/dist/jquery.mask.min.js').pipe(gulp.dest('../product-version/assets/plugins/jquery-mask-plugin/'));

  // C3.js
  gulp.src('node_modules/c3.js/dist/c3.min.js').pipe(gulp.dest('../product-version/assets/plugins/c3/'));

  // D3.js
  gulp.src('node_modules/d3/dist/d3.min.js').pipe(gulp.dest('../product-version/assets/plugins/d3/'));

  // PG Calender
  gulp.src('node_modules/pg-calendar/dist/css/pignose.calendar.min.css').pipe(gulp.dest('../product-version/assets/plugins/pg-calendar/css/'));
  gulp.src('node_modules/pg-calendar/dist/js/pignose.calendar.full.min.js').pipe(gulp.dest('../product-version/assets/plugins/pg-calendar/js/'));

  // Chartist
  gulp.src('node_modules/chartist/dist/chartist.min.css').pipe(gulp.dest('../product-version/assets/plugins/chartist/css/'));
  gulp.src('node_modules/chartist/dist/chartist.min.js').pipe(gulp.dest('../product-version/assets/plugins/chartist/js/'));
  gulp.src('node_modules/chartist-plugin-tooltips/dist/chartist-plugin-tooltip.css').pipe(gulp.dest('../product-version/assets/plugins/chartist-plugin-tooltips/css/'));
  gulp.src('node_modules/chartist-plugin-tooltips/dist/chartist-plugin-tooltip.min.js').pipe(gulp.dest('../product-version/assets/plugins/chartist-plugin-tooltips/js/'));

  // Chart.js
  gulp.src('node_modules/chart.js/dist/Chart.bundle.min.js').pipe(gulp.dest('../product-version/assets/plugins/chart.js/'));

  // Clockpicker
  gulp.src('node_modules/clockpicker/dist/bootstrap-clockpicker.min.css').pipe(gulp.dest('../product-version/assets/plugins/clockpicker/css/'));
  gulp.src('node_modules/clockpicker/dist/bootstrap-clockpicker.min.js').pipe(gulp.dest('../product-version/assets/plugins/clockpicker/js/'));

  // Jquery Slimscroll
  gulp.src('node_modules/jquery-slimscroll/jquery.slimscroll.min.js').pipe(gulp.dest('../product-version/assets/plugins/jquery-slimscroll/'));

  // MetisMenu
  gulp.src('node_modules/metismenu/dist/metisMenu.min.css').pipe(gulp.dest('../product-version/assets/plugins/metismenu/css/'));
  gulp.src('node_modules/metismenu/dist/metisMenu.min.js').pipe(gulp.dest('../product-version/assets/plugins/metismenu/js/'));

  // jquery-countto
  gulp.src('node_modules/jquery-count-to/build/jquery-countTo.min.js').pipe(gulp.dest('../product-version/assets/plugins/jquery-count-to/'));

  // DataMaps
  gulp.src('node_modules/datamaps/dist/datamaps.world.min.js').pipe(gulp.dest('../product-version/assets/plugins/datamaps/'));

  // Topojson
  gulp.src('node_modules/topojson/dist/topojson.min.js').pipe(gulp.dest('../product-version/assets/plugins/topojson/'));

  // Dropzone
  gulp.src('node_modules/dropzone/dist/min/dropzone.min.css').pipe(gulp.dest('../product-version/assets/plugins/dropzone/css/'));
  gulp.src('node_modules/dropzone/dist/min/dropzone.min.js').pipe(gulp.dest('../product-version/assets/plugins/dropzone/js/'));

  // Echart
  gulp.src('node_modules/echarts/dist/echarts.min.js').pipe(gulp.dest('../product-version/assets/plugins/echarts/'));

  // Flot
  gulp.src('node_modules/flot/jquery.flot.js').pipe(gulp.dest('../product-version/assets/plugins/flot/'));
  gulp.src('node_modules/flot/jquery.flot.pie.js').pipe(gulp.dest('../product-version/assets/plugins/flot/'));
  gulp.src('node_modules/flot/jquery.flot.resize.js').pipe(gulp.dest('../product-version/assets/plugins/flot/'));

  // Flot Spline
  gulp.src('node_modules/flot-spline/js/jquery.flot.spline.min.js').pipe(gulp.dest('../product-version/assets/plugins/flot-spline/'));

  // Full Calendar
  gulp.src('node_modules/fullcalendar/dist/fullcalendar.min.css').pipe(gulp.dest('../product-version/assets/plugins/fullcalendar/css/'));
  gulp.src('node_modules/fullcalendar/dist/fullcalendar.js').pipe(gulp.dest('../product-version/assets/plugins/fullcalendar/js/'));

  // HighChart
  gulp.src('node_modules/highcharts/highcharts.js').pipe(gulp.dest('../product-version/assets/plugins/highcharts/'));
  gulp.src('node_modules/highcharts/highcharts-more.js').pipe(gulp.dest('../product-version/assets/plugins/highcharts/'));
  gulp.src('node_modules/highcharts/modules/exporting.js').pipe(gulp.dest('../product-version/assets/plugins/highcharts/modules/'));

  // iCheck
  gulp.src('node_modules/icheck/skins/all.css').pipe(gulp.dest('../product-version/assets/plugins/icheck/skins/'));
  gulp.src('node_modules/icheck/skins/flat/*.css').pipe(gulp.dest('../product-version/assets/plugins/icheck/skins/flat/'));
  gulp.src('node_modules/icheck/skins/flat/*.css').pipe(gulp.dest('../product-version/assets/plugins/icheck/skins/flat/'));
  gulp.src('node_modules/icheck/skins/futurico/*.css').pipe(gulp.dest('../product-version/assets/plugins/icheck/skins/futurico/'));
  gulp.src('node_modules/icheck/skins/futurico/*.css').pipe(gulp.dest('../product-version/assets/plugins/icheck/skins/futurico/'));
  gulp.src('node_modules/icheck/skins/line/*.png').pipe(gulp.dest('../product-version/assets/plugins/icheck/skins/line/'));
  gulp.src('node_modules/icheck/skins/line/*.png').pipe(gulp.dest('../product-version/assets/plugins/icheck/skins/line/'));
  gulp.src('node_modules/icheck/skins/minimal/*.png').pipe(gulp.dest('../product-version/assets/plugins/icheck/skins/minimal/'));
  gulp.src('node_modules/icheck/skins/minimal/*.png').pipe(gulp.dest('../product-version/assets/plugins/icheck/skins/minimal/'));
  gulp.src('node_modules/icheck/skins/polaris/*.png').pipe(gulp.dest('../product-version/assets/plugins/icheck/skins/polaris/'));
  gulp.src('node_modules/icheck/skins/polaris/*.png').pipe(gulp.dest('../product-version/assets/plugins/icheck/skins/polaris/'));
  gulp.src('node_modules/icheck/skins/square/*.png').pipe(gulp.dest('../product-version/assets/plugins/icheck/skins/square/'));
  gulp.src('node_modules/icheck/skins/square/*.png').pipe(gulp.dest('../product-version/assets/plugins/icheck/skins/square/'));
  gulp.src('node_modules/icheck/icheck.min.js').pipe(gulp.dest('../product-version/assets/plugins/icheck/'));

  // Jquery-asColorPicker
  gulp.src('node_modules/jquery-asColorPicker/dist/css/asColorPicker.min.css').pipe(gulp.dest('../product-version/assets/plugins/jquery-asColorPicker/css/'));
  gulp.src('node_modules/jquery-asColorPicker/dist/jquery-asColorPicker.min.js').pipe(gulp.dest('../product-version/assets/plugins/jquery-asColorPicker/js/'));
  gulp.src('node_modules/jquery-asColor/dist/jquery-asColor.min.js').pipe(gulp.dest('../product-version/assets/plugins/jquery-asColor/'));
  gulp.src('node_modules/jquery-asGradient/dist/jquery-asGradient.min.js').pipe(gulp.dest('../product-version/assets/plugins/jquery-asGradient/'));

  // Jquery-ui
  gulp.src('node_modules/jqueryui/jquery-ui.min.css').pipe(gulp.dest('../product-version/assets/plugins/jqueryui/css/'));
  gulp.src('node_modules/jqueryui/jquery-ui.min.js').pipe(gulp.dest('../product-version/assets/plugins/jqueryui/js/'));

  // Justgage
  gulp.src('node_modules/justgage/justgage.js').pipe(gulp.dest('../product-version/assets/plugins/justgage/'));

  // Raphael
  gulp.src('node_modules/raphael/raphael.min.js').pipe(gulp.dest('../product-version/assets/plugins/raphael/'));

  // Jquery-knob
  gulp.src('node_modules/jquery-knob/dist/jquery.knob.min.js').pipe(gulp.dest('../product-version/assets/plugins/jquery-knob/'));

  // moment
  gulp.src('node_modules/moment/min/moment.min.js').pipe(gulp.dest('../product-version/assets/plugins/moment/'));

  // Morris
  gulp.src('node_modules/morris.js/morris.min.js').pipe(gulp.dest('../product-version/assets/plugins/morris/'));

  // Nestable
  gulp.src('node_modules/nestable/jquery.nestable.js').pipe(gulp.dest('../product-version/assets/plugins/nestable/'));

  // Peity
  gulp.src('node_modules/peity/jquery.peity.min.js').pipe(gulp.dest('../product-version/assets/plugins/peity/'));

  // Rickshaw
  gulp.src('node_modules/rickshaw/rickshaw.min.css').pipe(gulp.dest('../product-version/assets/plugins/rickshaw/css/'));
  gulp.src('node_modules/rickshaw/rickshaw.min.js').pipe(gulp.dest('../product-version/assets/plugins/rickshaw/js/'));
  gulp.src('node_modules/rickshaw/vendor/d3.layout.min.js').pipe(gulp.dest('../product-version/assets/plugins/rickshaw/vendor/'));
  gulp.src('node_modules/rickshaw/vendor/d3.min.js').pipe(gulp.dest('../product-version/assets/plugins/rickshaw/vendor/'));

  // Select2
  gulp.src('node_modules/select2/dist/css/select2.min.css').pipe(gulp.dest('../product-version/assets/plugins/select2/css/'));
  gulp.src('node_modules/select2/dist/js/select2.full.min.js').pipe(gulp.dest('../product-version/assets/plugins/select2/js/'));

  // Sparkline
  gulp.src('node_modules/jquery-sparkline/jquery.sparkline.min.js').pipe(gulp.dest('../product-version/assets/plugins/jquery-sparkline/'));

  // Summernote
  gulp.src('node_modules/summernote/dist/summernote.css').pipe(gulp.dest('../product-version/assets/plugins/summernote/css/'));
  gulp.src('node_modules/summernote/dist/summernote.min.js').pipe(gulp.dest('../product-version/assets/plugins/summernote/js/'));
  gulp.src('node_modules/summernote/dist/font/summernote.eot').pipe(gulp.dest('../product-version/assets/plugins/summernote/font/'));
  gulp.src('node_modules/summernote/dist/font/summernote.ttf').pipe(gulp.dest('../product-version/assets/plugins/summernote/font/'));
  gulp.src('node_modules/summernote/dist/font/summernote.woff').pipe(gulp.dest('../product-version/assets/plugins/summernote/font/'));

  // Switchery
  gulp.src('node_modules/switchery/standalone/switchery.css').pipe(gulp.dest('../product-version/assets/plugins/switchery/css/'));
  gulp.src('node_modules/switchery/standalone/switchery.js').pipe(gulp.dest('../product-version/assets/plugins/switchery/js/'));

  // Timepickers
  gulp.src('node_modules/bootstrap-timepicker/css/bootstrap-timepicker.min.css').pipe(gulp.dest('../product-version/assets/plugins/bootstrap-timepicker/css/'));
  gulp.src('node_modules/bootstrap-timepicker/js/bootstrap-timepicker.min.js').pipe(gulp.dest('../product-version/assets/plugins/bootstrap-timepicker/js/'));

  // Toastr
  gulp.src('node_modules/toastr/build/toastr.min.css').pipe(gulp.dest('../product-version/assets/plugins/toastr/css/'));
  gulp.src('node_modules/toastr/build/toastr.min.js').pipe(gulp.dest('../product-version/assets/plugins/toastr/js/'));

  // Typehead
  gulp.src('node_modules/jquery-typeahead/dist/jquery.typeahead.min.css').pipe(gulp.dest('../product-version/assets/plugins/jquery-typeahead/css/'));
  gulp.src('node_modules/jquery-typeahead/dist/jquery.typeahead.min.js').pipe(gulp.dest('../product-version/assets/plugins/jquery-typeahead/js/'));

  // Validation
  gulp.src('node_modules/jquery-validation/dist/jquery.validate.min.js').pipe(gulp.dest('../product-version/assets/plugins/jquery-validation/'));

  // Jqvmap
  gulp.src('node_modules/jqvmap/dist/jqvmap.min.css').pipe(gulp.dest('../product-version/assets/plugins/jqvmap/css/'));
  gulp.src('node_modules/jqvmap/dist/jquery.vmap.min.js').pipe(gulp.dest('../product-version/assets/plugins/jqvmap/js/'));

  // Waypoints
  gulp.src('node_modules/waypoints/lib/jquery.waypoints.min.js').pipe(gulp.dest('../product-version/assets/plugins/waypoints/'));

  // Simple Weather
  gulp.src('node_modules/simpleweather/jquery.simpleWeather.js').pipe(gulp.dest('../product-version/assets/plugins/simpleweather/'));

  gulp.src('./src/css/*.css').pipe(gulp.dest('./dist/css/'));
  gulp.src('./src/*.html').pipe(gulp.dest('./dist/'));

});

// // HTML Prettify

// HTML Prettify
gulp.task('html_prettify', function () {
  gulp.src('main/template-vertical-nav-light/*.html')
    .pipe(prettify({ indent_char: ' ', indent_size: 4 }))
    .pipe(gulp.dest('./main/template-vertical-nav-light/'))
});


// // HTML Minify
gulp.task('html_minify', function () {
  return gulp.src('main/template-vertical-nav-light/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('./main/template-vertical-nav-light/'));
});

