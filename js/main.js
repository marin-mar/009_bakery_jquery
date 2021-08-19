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

  // $(".intro").slick({
  //   infinite: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // });
});
