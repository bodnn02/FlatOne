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

$(window).scroll(function() {
  if ($(this).scrollTop() > 500) {
      $('.product-sidebar').addClass('scrolled');
  } else {
      $('.product-sidebar').removeClass('scrolled');
  }
});

$(".stories-list__item").on("click", function (e) {
  story_id = $(this).attr("data-story")
  story = $(".story[data-story="+story_id+"]")

  $(this).addClass("checked")
  $(".overlay").addClass("opened")
  $(".stories-overlay").addClass("opened")
  $(".story[data-story="+story_id+"]").addClass("current")

  $('body').css('overflow', 'hidden');
  $(".header").removeClass("scrolled")

  story_paggination = $(story).find(".story-paggination")
  story_content = $(story).find(".story-content__list")

  $(story_paggination).children().first().addClass("current")
  $(story_content).children().first().addClass("current")
  $(story_content).children().first().children("video")[0].play()
  storyUpdate()
});
$(".stories-overlay__close").on("click", function (e) {
  closeStory()
});
$(".stories-overlay__next").on("click", function (e) {
  nextStory()
});

$(".stories-overlay__prev").on("click", function (e) {
  prevStory()
});

var storyUpdate = function(e) {
  $(".story-content__item.current > video").on('timeupdate', function() {
    var currentTime = $(this)[0].currentTime
    var duration = $(this)[0].duration
  
    var percent = (currentTime / duration) * 100;

    if(percent == 100) {
      nextStory()
    }
  
    $(".story-paggination__item.current").children(".story-paggination__progress").width(percent + '%');
  });
}

var nextStory = function(e) {
  current_story = $(".story.current")
  current_index = $(".story-paggination__item.current").index()

  story_paggination = $(current_story).find(".story-paggination").children(".story-paggination__item")
  story_content = $(current_story).find(".story-content__list").children(".story-content__item")

  story_paggination.removeClass("current")
  story_content.removeClass("current")

  if(current_index + 1 == story_paggination.length) {
    closeStory()
  } else {
    story_paggination.eq(current_index ).addClass("checked")

    story_content.eq(current_index).children("video")[0].pause()
    story_content.eq(current_index).children("video").off("timeupdate")

    story_paggination.eq(current_index + 1).addClass("current")
    story_content.eq(current_index + 1).addClass("current")
    story_content.eq(current_index + 1).children("video")[0].play()
    storyUpdate()
  }
}

var prevStory = function(e) {
  current_story = $(".story.current")
  current_index = $(".story-paggination__item.current").index()

  story_paggination = $(current_story).find(".story-paggination").children(".story-paggination__item")
  story_content = $(current_story).find(".story-content__list").children(".story-content__item")

  story_paggination.removeClass("current")
  story_content.removeClass("current")

  if(current_index - 1 < 0) {
    closeStory()
  } else {
    $(".story.current video").each(function() {
      this.currentTime = 0;
    });
    story_paggination.eq(current_index - 1).removeClass("checked")

    story_paggination.eq(current_index).children(".story-paggination__progress").css("width","0%")

    story_content.eq(current_index).children("video")[0].pause()
    story_content.eq(current_index).children("video").off("timeupdate")

    story_paggination.eq(current_index - 1).addClass("current")
    story_content.eq(current_index - 1).addClass("current")
    story_content.eq(current_index - 1).children("video")[0].play()
    storyUpdate()
  }
}

var closeStory = function(e) { 
  $(".overlay").removeClass("opened")
  $(".stories-overlay").removeClass("opened")

  $(".story.current video").off("timeupdate")

  $(".story.current video").each(function() {
    this.pause()
  });

  $(".story.current video").each(function() {
    this.currentTime = 0;
  });

  $(".story.current .story-paggination__progress").css("width","0%")
  $('body').css('overflow', 'visible');

  $(".story.current").removeClass("current")
  $(".story .current").removeClass('current');
  $(".story .checked").removeClass("checked")
}

$(".play-btn").on("click", function(e) {
  storyPause()
});

$(".mute-btn").on("click", function(e) {
  video = $(".story-content__item.current > video")

  $('video').volume(0.5);

  if($(video).volume() == 0) {
    $(this).addClass("sound-btn")

    $(video)[0].volume(0);
  } else {
    $(this).removeClass("sound-btn")
    
    $(video)[0].volume(1);
  }
});
var storyPause = function(e) {
  video = $(".story-content__item.current > video")

  if($(video).get(0).paused === false) {
    $(".play-btn").addClass("pause-btn")

    $(video)[0].pause()
  } else {
    $(".play-btn").removeClass("pause-btn")
    $(video)[0].play()
  }
}
$(".story-content__item").on("click", function(e) {
  storyPause()
})
$(".story").swipe( {
  swipeLeft:function(event, direction, distance, duration) {
    nextStory()
  },
  swipeRight:function(event, direction, distance, duration) {
    prevStory()
  },
  threshold:100,
  allowPageScroll:"vertical"
});

$(".quiz-list__item").on("click", function(e) {
  $(this).parent().children(".quiz-list__item").removeClass("selected")

  $(this).addClass("selected")
})