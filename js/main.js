$(".preview-paggination__item").on("click", function (e) {
  gallery = $(this).parent().parent().find(".apartament-list__preview").children("img")

  $(this).parent().children(".preview-paggination__item").removeClass("selected");
  $(this).addClass("selected");

  gallery.removeClass("current")
  gallery.eq($(this).index()).addClass("current")
});

$(".filter-list__item").on("click", function (e) {
  if($(this).parent().hasClass("single")) {
    $(this).parent().children(".filter-list__item").removeClass("selected");
    $(this).addClass("selected");
  } else {
    $(this).toggleClass("selected");
  }
});
$(".filter-section__header").on("click", function (e) {
  $(this).parent().toggleClass("opened");
});
$(".apartament-list__favorite-btn").on("click", function (e) {
  $(this).toggleClass("filled");
});


var minSpan = $( ".price-range__min-span" );
var maxSpan = $( ".price-range__max-span" );

$(".price-range").slider({
  range: true,
  min: 0,
  max: 500,
  values: [75, 300],
  slide: function (event, ui) {
    $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
  },
});


$( function() {
    var minPrice = 500;
    var maxPrice = 57000;
    $( ".price-range" ).each( function() {
        var minSpan = $( this ).find( ".price-range__min" );
        var maxSpan = $( this ).find( ".price-range__max" );
        $( this ).slider({
            range: true,
            min: minPrice,
            max: maxPrice,
            values: [ minPrice, maxPrice ],
            slide: function( event, ui ) {
                minSpan.text( ui.values[ 0 ] + "₽" );
                maxSpan.text( ui.values[ 1 ] + "₽" );
            }
        });
        minSpan.text( $( this ).slider( "values", 0 ) + "₽" );
        maxSpan.text( $( this ).slider( "values", 1 ) + "₽" );
    });
});

$( function() {
  $(".datepicker").datepicker();
} );


$(".try-paggination__item").on("click", function (e) {
  lead_lists = $(this).parent().parent().find(".lead-wrapper").children(".lead-list");

  $(this).parent().children(".try-paggination__item").removeClass("selected");
  $(this).addClass("selected");

  lead_lists.removeClass("current")
  lead_lists.eq($(this).index()).addClass("current")
});

$(".mm-btn").on("click", function (e) {
  $(".m-menu").addClass("opened")

  $('body').css('overflow', 'hidden');
});
$(".m-menu__close").on("click", function (e) {
  $(".m-menu").removeClass("opened")
  $('body').css('overflow', 'visible');
});

$("#m-filters").on("click", function (e) {
  $(".catalogue-sidebar").addClass("opened")

  $('body').css('overflow', 'hidden');
});
$(".catalogue-sidebar__m-close").on("click", function (e) {
  $(".catalogue-sidebar").removeClass("opened")
  
  $('body').css('overflow', 'visible');
});


$(window).on('load', function() {
  $('.preloader').delay(1000).fadeOut('slow');
});

$(window).on('load', function() {
  var $preloader = $('.preloader'),
      $line = $preloader.find('.loading-bar__line'),
      $percent = $preloader.find('.loading-bar__percent'),
      percent = 0,
      interval = setInterval(function() {
          percent += Math.floor(Math.random() * 25) + 1;
          if (percent >= 100) {
              percent = 100;
              clearInterval(interval);
              $preloader.delay(1000).fadeOut('slow');
          }
          if(percent>=25) {
            $(".preloader__title").text("покупка")
            $(".preloader__text").text("Апартаментов / офисов / парковок")
          }
          if(percent>=50) {
            $(".preloader__title").text("субаренда")
            $(".preloader__text").text("Апартаментов / офисов")
          }
          if(percent>=75) {
            $(".preloader__title").text("Flat one")
            $(".preloader__text").text("Инвестиционная недвижимость Москвы и Москвы сити")
          }
          $line.css('width', percent + '%');
          $percent.text(percent + '%');
      }, 500);
});

$(".gallery-overlay__item").on("click", function (e) {
  gallery_current = $(this).parent().parent().parent().find(".gallery-overlay__current");

  $(this).parent().children(".gallery-overlay__item").removeClass("selected");
  $(this).toggleClass("selected");

  gallery_current.attr('src', $(this).children("img").attr('src'));
});

$(".gallery-overlay__prev").on("click", function (e) {
  gallery_current = $(this).parent().parent().find(".gallery-overlay__current")
  paggination_list = $(this).parent().parent().find(".gallery-overlay__list")

  current_index = $(paggination_list).children(".selected").index()
  lenght_list = $(paggination_list).children("li").length

  if (current_index == 0) {
    $(paggination_list).children("li").removeClass("selected")
    $(paggination_list).children("li").eq(lenght_list).addClass("selected")
    gallery_current.attr('src', $(paggination_list).children("li").children("img").attr("src"))
  }
  if(current_index == lenght_list) {
    $(paggination_list).children("li").removeClass("selected")
    $(paggination_list).children("li").eq(0).addClass("selected")
    gallery_current.attr('src', $(paggination_list).children("li").eq(0).children("img").attr("src"))
  }
  if(current_index < lenght_list) {
    $(paggination_list).children("li").removeClass("selected")
    $(paggination_list).children("li").eq(current_index - 1).addClass("selected")
    gallery_current.attr('src', $(paggination_list).children("li").eq(current_index - 1).children("img").attr('src'))
  }
});

$(".gallery-overlay__next").on("click", function (e) {
  gallery_current = $(this).parent().parent().find(".gallery-overlay__current")
  paggination_list = $(this).parent().parent().find(".gallery-overlay__list")
  
  current_index = $(paggination_list).children(".selected").index()
  lenght_list = $(paggination_list).children("li").length

  if (current_index == 0) {
    $(paggination_list).children("li").removeClass("selected")
    $(paggination_list).children("li").eq(lenght_list).addClass("selected")

    gallery_current.attr('src', $(paggination_list).children("li").children("img").attr("src"))
  }
  if(current_index == lenght_list) {
    $(paggination_list).children("li").removeClass("selected")
    $(paggination_list).children("li").eq(0).addClass("selected")

    gallery_current.attr('src', $(paggination_list).children("li").eq(0).children("img").attr("src"))
  }
  if(current_index < lenght_list) {
    $(paggination_list).children("li").removeClass("selected")
    $(paggination_list).children("li").eq(current_index + 1).addClass("selected")

    gallery_current.attr('src', $(paggination_list).children("li").eq(current_index + 1).children("img").attr('src'))
  }
});

$(".product-gallery__see-all").on("click", function (e) {
  $(".overlay").addClass("opened")
  $(".gallery-overlay").addClass("opened")
});
$(".gallery-overlay__close").on("click", function (e) {
  $(".overlay").removeClass("opened")
  $(".gallery-overlay").removeClass("opened")
});

$("#book-btn").on("click", function (e) {
  $('body').css('overflow', 'hidden');

  $(".overlay").addClass("opened")
  $(".form-overlay").addClass("opened")
});
$(".form-overlay__close").on("click", function (e) {
  $('body').css('overflow', 'visible');

  $(".overlay").removeClass("opened")
  $(".form-overlay").removeClass("opened")
});

$(".form-overlay__back-btn").on("click", function (e) {
  $('body').css('overflow', 'visible');

  $(".overlay").removeClass("opened")
  $(".form-overlay").removeClass("opened")
  return false;
});

$(".wishlist-btn").on("click", function (e) {
  $(this).toggleClass("filled")
});

$(window).scroll(function() {
  if ($(this).scrollTop() > 100) {
      $('.header').addClass('scrolled');
  } else {
      $('.header').removeClass('scrolled');
  }
});