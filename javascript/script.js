$(function () { 
  var mixer = mixitup('.blog__filter-list');
})
$('.feedback__slider').slick({
  dots: true,
  slidesToshow: 1,
  autoplaySpeed: 300,
  appendDots: $('.feedback__line'),
  prevArrow: ".feedback__arrows-prev",
  nextArrow: ".feedback__arrows-next",
})
$('.questions__accordion-link').on('click', function (e) {
  e.preventDefault()
  $(this).toggleClass('questions__accrodion-link--activ')
  $(this).children('.questions__accordion-text').slideToggle();
})

$('.burger').on('click', function (e){
  e.preventDefault()
  $('.header__top').toggleClass('header__top--open');
})