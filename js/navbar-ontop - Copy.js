$(document).ready(function() {

    $(window).on('resize', function() {
       if ($(window).width() <= 640 ) {
          $('.navbar').hide();
       }   else {
          $('.navbar').show();
       }
    }).trigger("resize");
  
    $('.toggle').on('click', function() {
       $('.navbar').slideToggle('slow');
    });
  
  });