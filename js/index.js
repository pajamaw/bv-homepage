(function($) {
  "use strict";
  $('a.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top - 50)
    }, 1250, 'easeInOutExpo');
    event.preventDefault();
  });
  $('body').scrollspy({
    target: '.navbar-fixed-top',
    offset: 51
  });
  $('#dropdown-items').on('mouseleave', function(){
    $('.navbar-toggle:visible').click();
  });
  $('.navbar-collapse ul li a').click(function(){
    $('.navbar-toggle:visible').click();
  });
  $('#mainNav').affix({
    offset: {
      top: 100
    }
  })
})(jQuery);
