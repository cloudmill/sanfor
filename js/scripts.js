var SITE_TEMPLATE_PATH = "/local/templates/sanfor";

$(document).ready(function () {
  $('.name span').click(function() {
    $('.name span').removeClass('active');
    $(this).addClass('active');
    $(this).parents('.name').siblings('.block').children('.item').removeClass('active');
    $(this).parents('.name').siblings('.block').children('.item').eq($(this).index()).addClass('active');
  });


  $(".mob_btn").on("click", function() {
    $(this).toggleClass("open");
    $("body").toggleClass("noscroll");
    $("header").toggleClass("active");
  });

  $('.button  span').click(function() {
    $(this).toggleClass('active');
    $(this).parents('.button').siblings('.text').toggleClass('active');
  });

  $('.content .block .item').click(function() {
    $(this).addClass('active');
    $(this).siblings('.item').removeClass('active');
  });

  var mySwiper = new Swiper ('.feedback-swiper-container', {
    loop: true,
    simulateTouch: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
  });

  var mySwiper_blog = new Swiper ('.blog-swiper-container', {
    loop: true,
    simulateTouch: false,
    slidesPerView: 'auto',
    spaceBetween: 60,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var mySwiper_detail = new Swiper ('.detail-blog-swiper', {
    loop: true,
    simulateTouch: false,
    slidesPerView: 'auto',
    spaceBetween: 60,
    navigation: {
      nextEl: '.swiper-button-next.det',
      prevEl: '.swiper-button-prev.det',
    },
  });
});

function initMap() {
  var mapOptions = {
    zoom: 13,
    center: new google.maps.LatLng(59.953439, 30.396629),
  };
  var mapElement = document.getElementById('map');
  var map = new google.maps.Map(mapElement, mapOptions);
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(59.943825, 30.430794),
    map: map,
    icon: SITE_TEMPLATE_PATH + "/img/google_icon.png",
    title: "Sanfor"
  });
}
