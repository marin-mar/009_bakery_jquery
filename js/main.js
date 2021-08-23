$(function () {
  const header = $("#header");
  const introH = $("#intro").innerHeight();
  let scrollOffset = $(window).scrollTop();

  /* Fixed Header */
  checkScroll(scrollOffset);

  $(window).on("scroll", function () {
    scrollOffset = $(this).scrollTop();
    checkScroll(scrollOffset);
  });

  function checkScroll(scrollOffset) {
    if (scrollOffset >= introH) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  }

  /* Smooth Scroll */
  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();
    let blockId = $(this).data("scroll");
    let blockOffset = $(blockId).offset().top;

    $(".header__link").removeClass("active");
    $(this).addClass("active");

    $("html, body").animate(
      {
        scrollTop: blockOffset,
      },
      500
    );
  });

  /* Nav-Toggle-Menu */
  $("#nav-toggle").on("click", function (event) {
    event.preventDefault();

    $(".header__list").toggleClass("active");

    if ($(".header__list").hasClass("active")) {
      $(this).addClass("active");
      $("body").addClass("lock");
    } else {
      $(this).removeClass("active");
      $("body").removeClass("lock");
    }

    $(".header__item, header__link").click(function (event) {
      $("#nav-toggle, body, .header__list").removeClass("active");
    });
  });

  /* Slider - About - Blog */
  $(".about__list").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    fade: true,
  });

  /* Slider - Menu */
  $(".slider--main").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".slider--nav",
  });
  $(".slider--nav").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".slider--main",
    dots: false,
    arrows: true,
    focusOnSelect: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  });

  /* Accordion */
  $(".accordion").click(function (event) {
    event.preventDefault;
    $(this).toggleClass("active");
  });
});
