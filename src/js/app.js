import sayHello from './lib/sayHello.js';
import $ from 'jquery';
import 'slick-carousel';

sayHello();

$(document).ready(function() {

  const sliderMain = $('.slider__main');

  let sliderOptions =  {
    centerMode: true,
    loop: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: true
  };

  sliderMain.slick(sliderOptions);

  sliderMain.on('afterChange init', function(event, slick) {
    slick.$slides.removeClass('animated fadeInLeft').removeClass('animated fadeOutRight');
    for (let i = 0; i < slick.$slides.length; i++) {
      let $slide = $(slick.$slides[i]);

      if ($slide.hasClass('slick-current')) {
        $slide.prev().addClass('animated fadeInLeft');
        $slide.next().addClass('animated fadeOutRight');
        break;
      }
    }
  });

  $('.slider__controls__next').click(function() {
    sliderMain.slick('slickNext');
  });

  $('.slider__controls__prev').click(function() {
    sliderMain.slick('slickPrev');
  });

});


