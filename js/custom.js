
(function($) {
    $(document).ready(function() {
   
        if (!device.tablet() && !device.mobile()) {
            $(".player").mb_YTPlayer();
        } else {
            //jQuery will add the default background to the preferred class 
            $('.video-background').addClass(
                'video-background-default-image');
        }
    });
})(jQuery);


/*
 * Countdown
 */

$('#clock').countdown('2016/10/31').on('update.countdown', function(event) {
       var $this = $(this).html(event.strftime(''
         + '<div><span>%-w</span>week%!w</div>'
         + '<div><span>%-d</span>day%!d</div>'
         + '<div><span>%H</span>hr</div>'
         + '<div><span>%M</span>min</div>'
         + '<div><span>%S</span>sec</div>'));
     });