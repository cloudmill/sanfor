var SITE_TEMPLATE_PATH = "/local/templates/sanfor";

// disable scroll

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
    e.preventDefault();
  e.returnValue = false;  
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

function disableScroll() {
  if (window.addEventListener) // older FF
    window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
}

function enableScroll() {
  if (window.removeEventListener)
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.onmousewheel = document.onmousewheel = null; 
  window.onwheel = null; 
  window.ontouchmove = null;  
  document.onkeydown = null;  
}

// disable scroll

$(document).ready(function () {
  $('.name span').click(function() {
    $('.name span').removeClass('active');
    $(this).addClass('active');
    $(this).parents('.name').siblings('.block').children('.item').removeClass('active');
    $(this).parents('.name').siblings('.block').children('.item').eq($(this).index()).addClass('active');
  });

  var link = window.location.href;
  link = link.split("/");
  if (link[3] == "production" && link[4] == "") {
    var offset = $(window).height() - $(".wrapper.catalog main .inner .catalog-content .products .pages").offset().top - $(".wrapper.catalog main .inner .catalog-content .products .pages").height();
    $(document).on("scroll", function() {
      var positive_offset = Math.abs(offset);
      var bottom = $(document).scrollTop() + offset;
      console.log(bottom);
      if (bottom >= 0) {
        $(".wrapper.catalog main .inner .sidebar").addClass("scrolled");
        $(".wrapper.catalog main .inner .sidebar").css("top", positive_offset);
      }
      else {
        $(".wrapper.catalog main .inner .sidebar").removeClass("scrolled");
        $(".wrapper.catalog main .inner .sidebar").css("top", 0);
      }
    });
  }

  $(".mob_btn").on("click", function() {
    if ($(this).hasClass("open")) {
      enableScroll();
    }
    else {
      disableScroll();
    }
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

  $(".wrapper.category-3.ln .inner .resove-problems .problems .problem").on("click", function() {
    $(this).parent().find(".problem").removeClass("active");
    $(this).addClass("active");
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

  var mySwiper_evo = new Swiper ('.evo-blog-swiper', {
    loop: true,
    simulateTouch: false,
    spaceBetween: 52,
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  var mySwiper_serts = new Swiper ('.serts-blog-swiper', {
    loop: true,
    simulateTouch: false,
    spaceBetween: 100,
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  var mySwiper_serts = new Swiper ('.scale-swiper', {
    loop: true,
    simulateTouch: false,
    spaceBetween: 0,
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
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
    slidesPerView: 3,
    spaceBetween: 0,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerGroup: 3
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
