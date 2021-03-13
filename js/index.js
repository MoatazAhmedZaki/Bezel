

$(".owl-carousel").owlCarousel({
  center: true,
  loop: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  //    nav:true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

$(window).scroll(function () {
  if (
    $(window).scrollTop() > $(".container-fluid.bord").height() &&
    innerWidth > 1000
  ) {
    $(".navbar-brand img").attr("src", "images/logo-dark.png");
    $(".container-fluid.bord").addClass("bg-light");
    $(".navbar").removeClass("navbar-light");
    $(".navbar").addClass("navbar-dark");
    $(".container-fluid.bord").css("position", "fixed");

    $(".navbar-dark .navbar-nav .nav-link ").css("color", "black");

    $(".nav-link i").css("color", "black");
    $(".navbar").css("padding-top", "5px");
    $(".navbar").css("padding-bottom", "5px");
    $(".bord").css("padding-top", "0px");
  } else if (
    $(window).scrollTop() < $(".container-fluid.bord").height() &&
    innerWidth > 1000
  ) {
    $(".navbar-brand img").attr("src", "images/logo-light.png");
    $(".container-fluid.bord").removeClass("bg-light");
    $(".container-fluid.bord ").removeClass("navbar-dark");
    $(".container-fluid.bord").css("position", "absolute");
    $(".navbar-dark .navbar-nav .nav-link ").css("color", "white");
    $(".bord i").css("color", "white");
    $(".navbar").css("padding-top", "10px");
    $(".navbar").css("padding-bottom", "25px");
  }
});

$("ul.navbar-nav")
  .find("a")
  .click(function () {
    var $href = $(this).attr("href");
    var $anchor = $($href).offset();
    $("body").animate({ scrollTop: $anchor.top - 50 }, 1500);

    $(this).addClass("active");

    $(this).parent().siblings().children().removeClass("active");

    return false;
  });


$(document).ready(function () {
  // INITIATE THE FOOTER
  siteFooter();

  $(window).resize(function () {
    siteFooter();
  });
  function siteFooter() {
    var siteContent = $("#site-content");
    var siteContentHeight = siteContent.height();
    var siteContentWidth = siteContent.width();

    var siteFooter = $("#site-footer");
    var siteFooterHeight = siteFooter.height() + 1;
    var siteFooterWidth = siteFooter.width();

    siteContent.css({
      "margin-bottom": siteFooterHeight,
    });
  }
});

if (innerWidth < 1000) {
  $(".navbar-toggler i").css("color", "white");

  $(".container-fluid.bord").css("position", "fixed");
  $(".bord i").css("color", "black");
  $(".navbar").css("background-color", "white");
  $(".navbar-brand img").attr("src", "images/logo-dark.png");
  $(".navbar").css("border-radius", "10px ");

  //   $('#site-content').css("margin-bottom" : "5px" );
}
