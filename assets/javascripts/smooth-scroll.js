// Bind <a/> click event.
$(document).click('a[href*="#"]', function (event) {
  var $a = $(event.target);
  var $target = $($a.attr('href'));
  if ($target.length) {
    // Prevent default behavior.
    event.preventDefault();
    // Stop previous scroll animation.
    $('html, body').stop();
    // Scroll animation.
    $('html, body').animate({
      scrollTop: $target.offset().top
    }, 600);
  }
});

// Cancel scroll event on mouse scroll.
$(window).bind('mousewheel DOMMouseScroll', function (event){
  $('html, body').stop();
});
