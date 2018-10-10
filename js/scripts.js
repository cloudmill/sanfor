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

  $(".mob-category-title").on("click", function() {
    $(this).toggleClass("active");
    $(".sidebar").toggleClass("active");
  });

  $(".catalog-content .filter .item").on("click", function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(".filter").removeClass("active");
    }
    else {
      $(this).parent().find(".item").removeClass("active");
      $(this).addClass("active");
      $(".filter").addClass("active");
    }
  });

  $(".wrapper header .search").on("click", function() {
    $(".desktop_search").addClass("active");
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
    var index = $(this).index();
    $(".solutions_list .items").removeClass("active");
    $(".solutions_list .items").eq(index).addClass("active");
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
    },
    slidesPerView: 'auto',
    breakpoints: {
      1440: {
        spaceBetween: 60
      },
      400: {
        slidesPerView: 1
      }
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
    breakpoints: {
      450: {
        slidesPerView: 1
      }
    }
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

$(document).mouseup(function(e) {
  var container = $(".desktop_search");
  if (!container.is(e.target) && container.has(e.target).length === 0) 
  {
    container.removeClass('active');
  }
});

function initMap() {
  var mapOptions = {
    zoom: 13,
    center: new google.maps.LatLng(59.953439, 30.396629),
    styles: [
    {
      "featureType": "administrative.locality",
      "elementType": "all",
      "stylers": [
      {
        "hue": "#ff0200"
      },
      {
        "saturation": 7
      },
      {
        "lightness": 19
      },
      {
        "visibility": "on"
      }
      ]
    },
    {
      "featureType": "administrative.locality",
      "elementType": "labels.text",
      "stylers": [
      {
        "visibility": "on"
      },
      {
        "saturation": "-3"
      },
      {
        "hue": "#ff0000"
      }
      ]
    },
    {
      "featureType": "administrative.locality",
      "elementType": "labels.text.fill",
      "stylers": [
      {
        "color": "#536c83"
      }
      ]
    },
    {
      "featureType": "landscape",
      "elementType": "all",
      "stylers": [
      {
        "hue": "#ff0200"
      },
      {
        "saturation": -100
      },
      {
        "lightness": 100
      },
      {
        "visibility": "simplified"
      }
      ]
    },
    {
      "featureType": "landscape",
      "elementType": "geometry.fill",
      "stylers": [
      {
        "visibility": "on"
      },
      {
        "color": "#f2f2f2"
      }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "all",
      "stylers": [
      {
        "saturation": "23"
      },
      {
        "lightness": "20"
      },
      {
        "visibility": "off"
      },
      {
        "hue": "#ff0200"
      }
      ]
    },
    {
      "featureType": "poi.school",
      "elementType": "geometry.fill",
      "stylers": [
      {
        "color": "#ffdbda"
      },
      {
        "saturation": "0"
      },
      {
        "visibility": "on"
      }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
      {
        "hue": "#ff0200"
      },
      {
        "saturation": "100"
      },
      {
        "lightness": "-3"
      },
      {
        "visibility": "simplified"
      }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry.stroke",
      "stylers": [
      {
        "color": "#f39247"
      },
      {
        "saturation": "0"
      }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels",
      "stylers": [
      {
        "hue": "#008eff"
      },
      {
        "saturation": -93
      },
      {
        "lightness": 31
      },
      {
        "visibility": "on"
      }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry.stroke",
      "stylers": [
      {
        "visibility": "on"
      },
      {
        "color": "#ffe5e5"
      },
      {
        "saturation": "0"
      },
      {
        "lightness": "1"
      }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "labels",
      "stylers": [
      {
        "hue": "#ff0069"
      },
      {
        "saturation": -93
      },
      {
        "lightness": "26"
      },
      {
        "visibility": "simplified"
      }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "labels.text",
      "stylers": [
      {
        "visibility": "off"
      }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "geometry",
      "stylers": [
      {
        "hue": "#ff0200"
      },
      {
        "saturation": -90
      },
      {
        "lightness": "61"
      },
      {
        "visibility": "simplified"
      }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "all",
      "stylers": [
      {
        "saturation": "28"
      },
      {
        "lightness": "25"
      },
      {
        "visibility": "on"
      },
      {
        "hue": "#ff0000"
      }
      ]
    },
    {
      "featureType": "water",
      "elementType": "all",
      "stylers": [
      {
        "saturation": -78
      },
      {
        "lightness": 67
      },
      {
        "visibility": "simplified"
      },
      {
        "color": "#ffc1c1"
      }
      ]
    }
    ]
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
