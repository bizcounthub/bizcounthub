export function countDownHandler() {
  var countdown_select = window.$("[data-countdown]");
  countdown_select.each(function () {
    window.$(this).countdown(window.$(this).data('countdown'))
      .on('update.countdown', function (e) {
        var format = '%H : %M : %S';
        if (e.offset.totalDays > 0) {
          format = '%d Day%!d ' + format;
        }
        if (e.offset.weeks > 0) {
          format = '%w Week%!w ' + format;
        }
        //console.log(window.$(this).data('countdown'));
        window.$(this).html(e.strftime(format));
      });
  }).on('finish.countdown', function (e) {
    window.$(this).html('This offer has expired!').addClass('disabled');
  });
};
