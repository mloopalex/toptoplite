(function () {
    $.fn.numanimate = function (options) {
        var settings = $.extend({
            'endnum ': 10
        }, options);

        var $this = $(this);
        $this.addClass('animate');
        var timer = 0;
        var _speed = parseInt(1500 / settings.endnum);
        $this.text('-');
        var top_scroll_view = $this.offset().top;
        var _height_bl = $this.height();
        var _height_win = $(window).height();
        var _d_h = parseInt(_height_win / 40);
        var top_scrool = $(window).scrollTop();
        if ((top_scrool > (top_scroll_view - _height_win + _d_h + _height_bl))) {
            StartAnim();
        }
        var _animate = false;
        $(window).scroll(function () {
            top_scrool = $(this).scrollTop();
            if (_animate === false) {
                StartAnim();
            }
        });

        function StartAnim() {
            if ((top_scrool > (top_scroll_view - _height_win + _d_h + _height_bl))) {
                _animate = true;
                var _shover = setInterval(function () {
                    $this.text(timer);
                    timer++;
                    if (timer > settings.endnum) {
                        $this.text(settings.endnum);
                        clearInterval(_shover);
                    }
                }, _speed);
            }
        }
    }
})();