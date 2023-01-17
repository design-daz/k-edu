$(document).ready(function () {
  // 리사이징 할때마다 새로고침
  //     var lastWidth = $(window).width();
  //     $(window).resize(function () {
  //       if ($(window).width() != lastWidth) {
  //           location.reload();
  //           lastWidth = $(window).width();
  //           return false;
  //       }
  //   });

  // ====== Nav ===== //

  $(".hd-nav").hover(
    function () {
      $(".hover-bg").stop().show();

      //   $(".nav-bg").stop().show();
      $(".nav-bg").stop().slideDown();
    },
    function () {
      $(".hover-bg").stop().hide();

      $(".nav-bg").stop().hide();
      //   $(".nav-bg").stop().slideUp();
    }
  );

  $(".nav-bg").hover(
    function () {
      $(".hover-bg").stop().show();

      $(".nav-bg").stop().show();
    },
    function () {
      // $(".nav-bg").stop().hide();
      $(".hover-bg").stop().hide();

      $(".nav-bg").stop().hide();

      // $(".nav-bg").stop().slideUp();
    }
  );


  // ====== Nav - shadow ===== //

  // $(window).scroll(
  //   function () {

  //   var height = $(document).scrollTop();

  //   if (height >= 1) {
  //     $("header").addClass("b-shadow");
  //   } else {
  //     $("header").removeClass("b-shadow");
  //   }
      
  //   }); 
  


  // ====== Notice Swiper ===== //

  var swiper01 = new Swiper(".mySwiper.nt-sd", {
    direction: "vertical",
    loop : true,

    navigation: {
      nextEl: ".swiper-button-down",
      prevEl: ".swiper-button-up",
    },
    //   autoplay: {
    //     delay: 1000,
    //   },
  });

  var swiper02 = new Swiper(".mySwiper.vs-sd", {
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
      delay: 3000,
    },
  });


  var swiper03 = new Swiper(".mySwiper.lt-sd-n", {
    navigation: {
      nextEl: ".swiper-button-next.n-btn-r",
      prevEl: ".swiper-button-prev.n-btn-l",
    },

  });

  var swiper04 = new Swiper(".mySwiper.lt-sd-p", {
    navigation: {
      nextEl: ".swiper-button-next.p-btn-r",
      prevEl: ".swiper-button-prev.p-btn-l",
    },

  });


  // ====== Sub - btn (card/list) ===== //

  $(".filter-style > button").click(function() {
    $(this).addClass('on').siblings().removeClass('on');
    $("#" + $(this).data('id')).addClass('on').siblings().removeClass('on');
});



  // ====== Sub - filter select ===== //


$(".selected_item_con").click(function(){
  $(this).find(".select_style_1_con").stop().toggle();
});


}); //ready end
