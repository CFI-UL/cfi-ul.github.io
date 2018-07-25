var referenceSelector = '#title';
var menuSelector = '.js_menu';
var menyStickyClassName = 'js_menu_sticky';

$(window).scroll(function () {
  if ($(window).scrollTop() > $(referenceSelector).offset().top) {
    $(menuSelector).addClass(menyStickyClassName)
  } else {
    $(menuSelector).removeClass(menyStickyClassName)
  }
})
