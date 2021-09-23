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
      $("body").removeClass("lock");
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQoZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IGhlYWRlciA9ICQoXCIjaGVhZGVyXCIpO1xyXG4gIGNvbnN0IGludHJvSCA9ICQoXCIjaW50cm9cIikuaW5uZXJIZWlnaHQoKTtcclxuICBsZXQgc2Nyb2xsT2Zmc2V0ID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG5cclxuICAvKiBGaXhlZCBIZWFkZXIgKi9cclxuICBjaGVja1Njcm9sbChzY3JvbGxPZmZzZXQpO1xyXG5cclxuICAkKHdpbmRvdykub24oXCJzY3JvbGxcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgc2Nyb2xsT2Zmc2V0ID0gJCh0aGlzKS5zY3JvbGxUb3AoKTtcclxuICAgIGNoZWNrU2Nyb2xsKHNjcm9sbE9mZnNldCk7XHJcbiAgfSk7XHJcblxyXG4gIGZ1bmN0aW9uIGNoZWNrU2Nyb2xsKHNjcm9sbE9mZnNldCkge1xyXG4gICAgaWYgKHNjcm9sbE9mZnNldCA+PSBpbnRyb0gpIHtcclxuICAgICAgaGVhZGVyLmFkZENsYXNzKFwiZml4ZWRcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBoZWFkZXIucmVtb3ZlQ2xhc3MoXCJmaXhlZFwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qIFNtb290aCBTY3JvbGwgKi9cclxuICAkKFwiW2RhdGEtc2Nyb2xsXVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxldCBibG9ja0lkID0gJCh0aGlzKS5kYXRhKFwic2Nyb2xsXCIpO1xyXG4gICAgbGV0IGJsb2NrT2Zmc2V0ID0gJChibG9ja0lkKS5vZmZzZXQoKS50b3A7XHJcblxyXG4gICAgJChcIi5oZWFkZXJfX2xpbmtcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAkKHRoaXMpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG5cclxuICAgICQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoXHJcbiAgICAgIHtcclxuICAgICAgICBzY3JvbGxUb3A6IGJsb2NrT2Zmc2V0LFxyXG4gICAgICB9LFxyXG4gICAgICA1MDBcclxuICAgICk7XHJcbiAgfSk7XHJcblxyXG4gIC8qIE5hdi1Ub2dnbGUtTWVudSAqL1xyXG4gICQoXCIjbmF2LXRvZ2dsZVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAkKFwiLmhlYWRlcl9fbGlzdFwiKS50b2dnbGVDbGFzcyhcImFjdGl2ZVwiKTtcclxuXHJcbiAgICBpZiAoJChcIi5oZWFkZXJfX2xpc3RcIikuaGFzQ2xhc3MoXCJhY3RpdmVcIikpIHtcclxuICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgJChcImJvZHlcIikuYWRkQ2xhc3MoXCJsb2NrXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgJChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCJsb2NrXCIpO1xyXG4gICAgfVxyXG5cclxuICAgICQoXCIuaGVhZGVyX19pdGVtLCBoZWFkZXJfX2xpbmtcIikuY2xpY2soZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICQoXCIjbmF2LXRvZ2dsZSwgYm9keSwgLmhlYWRlcl9fbGlzdFwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgJChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCJsb2NrXCIpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIC8qIFNsaWRlciAtIEFib3V0IC0gQmxvZyAqL1xyXG4gICQoXCIuYWJvdXRfX2xpc3RcIikuc2xpY2soe1xyXG4gICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICBhcnJvd3M6IHRydWUsXHJcbiAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgIGZhZGU6IHRydWUsXHJcbiAgfSk7XHJcblxyXG4gIC8qIFNsaWRlciAtIE1lbnUgKi9cclxuICAkKFwiLnNsaWRlci0tbWFpblwiKS5zbGljayh7XHJcbiAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgIGFycm93czogZmFsc2UsXHJcbiAgICBmYWRlOiB0cnVlLFxyXG4gICAgYXNOYXZGb3I6IFwiLnNsaWRlci0tbmF2XCIsXHJcbiAgfSk7XHJcbiAgJChcIi5zbGlkZXItLW5hdlwiKS5zbGljayh7XHJcbiAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgIGFzTmF2Rm9yOiBcIi5zbGlkZXItLW1haW5cIixcclxuICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgZm9jdXNPblNlbGVjdDogdHJ1ZSxcclxuICAgIGNlbnRlck1vZGU6IHRydWUsXHJcbiAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBicmVha3BvaW50OiA2MDAsXHJcbiAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDQwMCxcclxuICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9KTtcclxuXHJcbiAgLyogQWNjb3JkaW9uICovXHJcbiAgJChcIi5hY2NvcmRpb25cIikuY2xpY2soZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdDtcclxuICAgICQodGhpcykudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgfSk7XHJcbn0pO1xyXG4iXSwiZmlsZSI6Im1haW4uanMifQ==
