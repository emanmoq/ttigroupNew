jQuery(function ($) {
  //declare slider (owl-carousel slider)
  
  $('.bunner').owlCarousel({
    
    autoplay: true,
    loop: false,
    items:1,
    dots:true,

  });
  $('#gallery_01').owlCarousel({
    
    autoplay: false,
    loop: false,
    margin: 20,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 4,
        margin:15

      },
      600: {
        items: 4,
      },
      1000: {
        items: 5,

      }


    },
    fullWidth: true,
    afterAction: function () {
      if (this.itemsAmount > this.visibleItems.length) {
        $('.next').show();
        $('.prev').show();

        $('.next').removeClass('disabled');
        $('.prev').removeClass('disabled');
        if (this.currentItem == 0) {
          $('.prev').addClass('disabled');
        }
        if (this.currentItem == this.maximumItem) {
          $('.next').addClass('disabled');
        }

      } else {
        $('.next').hide();
        $('.prev').hide();
      }
    }
  });
  
  $('#gallery_01 .owl-next').html('<div class="owl-icon"><img src="assets/images/ArrowLeft.png"></div>')
  $('#gallery_01 .owl-prev').html('<div class="owl-icon"><img src="assets/images/Arrow.png"></div>')

  $('.similarCar').owlCarousel({
    autoplay: false,
    loop: false,
    margin: 30,
    nav: true,
    dots: false,

    responsive: {
      0: {
        items: 2,
        margin: 0

      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,

      }
    },

    fullWidth: true,
    afterAction: function () {
      if (this.itemsAmount > this.visibleItems.length) {
        $('.next').show();
        $('.prev').show();

        $('.next').removeClass('disabled');
        $('.prev').removeClass('disabled');
        if (this.currentItem == 0) {
          $('.prev').addClass('disabled');
        }
        if (this.currentItem == this.maximumItem) {
          $('.next').addClass('disabled');
        }

      } else {
        $('.next').hide();
        $('.prev').hide();
      }
    }
  });

    if ( $(window).width() < 854 ) {
  $('.similarCar').addClass("hide");
    }
  $(window).resize(function() {
    if ( $(window).width() < 854 ) {
      $('.similarCar').addClass("hide");
  
    } else {
      $('.similarCar').removeClass("hide");
    }
});
$('.similarCar .owl-next').html('<div class="owl-icon"><img src="assets/images/noun_ArrowLeft.png"></div>')
$('.similarCar .owl-prev').html('<div class="owl-icon"><img src="assets/images/noun_ArrowRight.png"></div>')
  $('.pdfCar').owlCarousel({
    autoplay: false,
    loop: false,
    margin: 0,
    nav: true,
    dotsContainer: '.sliderDots',
    navText: ["<i class='fa fa-arrow-left'></i>", "<i class='fa fa-arrow-right'></i>"],
    items: 1,
    fullWidth: true,
    afterAction: function () {
      if (this.itemsAmount > this.visibleItems.length) {
        $('.next').show();
        $('.prev').show();

        $('.next').removeClass('disabled');
        $('.prev').removeClass('disabled');
        if (this.currentItem == 0) {
          $('.prev').addClass('disabled');
        }
        if (this.currentItem == this.maximumItem) {
          $('.next').addClass('disabled');
        }

      } else {
        $('.next').hide();
        $('.prev').hide();
      }
    }
  });
  $('.coverPageCar').owlCarousel({
    autoplay: false,
    loop: false,
    margin: 15,
    nav: true,
    navText: ["<i class='fa fa-arrow-left'></i>", "<i class='fa fa-arrow-right'></i>"],
    items: 4,
    responsive:{
      0:{
        items:3
      },
      600:{
        items:3
      },
      1000:{
        items:4
      }
    }
  });
  $('.chooseComapnyLogoCar').owlCarousel({
    autoplay: false,
    loop: true,
    margin: 15,
    nav: false,
    navText: ["<i class='fa fa-arrow-left'></i>", "<i class='fa fa-arrow-right'></i>"],
    items: 4,
    responsive:{
      0:{
        items:3
      },
      600:{
        items:3
      },
      1000:{
        items:4
      }
    }
  });
$(".categListSlider").owlCarousel({
  autoplay: false,
  loop: false,
  margin: 15,
  nav: false,
  dots:false,
  items: 3,


});
$(".CategoriesList .owl-item   .nav-link").click(function(){
  $(this).addClass("active");
  $(".CategoriesList .owl-item  .nav-link").removeClass("active");

})
  /************************** */
  $('.filtersTitle').click(function () {

    $(".arrow i").toggleClass('lni-chevron-down lni-chevron-up');
  })

  $('.filtersTitle').click(function () {
    $(this).parent().find('.filterBox').slideToggle(400);
  });
  /********************************* */
  $(".deleteItem").click(function () {
    $(this).closest("tr").remove()
  });
  $(".checkboxInput").each(function () {
    $(".checkboxInput").on('change', function () {
      $('.radioBtnCont').removeClass("active");
      if ($(this).prop("checked")) {
        $(this).parent('.radioBtnCont').addClass("active");
      } else {
        $(this).parent('.radioBtnCont').removeClass("active");
      }
      var value = $(this).val();
    $(".radioDetailsCont").removeClass("show");
      switch (value) {
        case 'emailRadio':
          $(".emailDetailsContainer").addClass("show");
          break;
        case 'pdfRadio':
          $(".PDFDetailsContainer").addClass("show");
          break;
      }

    })
  });
  $(".signContLabel").each(function () {
    $("input[type='radio']").on('change', function () {
      $('.signContLabel').removeClass("active");
      if ($(this).prop("checked")) {
        $(this).parent('.signContLabel').addClass("active");
      } else {
        $(this).parent('.signContLabel').removeClass("active");
      }

  });
});
/**************************** */

  $(".showHideIcon").click( function() {
    
    var x = $(this).closest(".form-group").find(".showHidePass");
     if ( x.attr("type") == "text") {
      x.attr("type","password");
      $(this).closest(".form-group").find(".showPass").css("display", "block");
      $(this).closest(".form-group").find(".hidePass").css("display", "none");
  }
  else {
    x.attr("type","text");
    $(this).closest(".form-group").find(".hidePass").css("display", "block");
    $(this).closest(".form-group").find(".showPass").css("display", "none");
  }
  });

  /****************************************** */
  $(".navbar-toggler").click(function () {
    $(".mobilMenu.collapse ").show();
    $(".overlay").toggle()

  });
  $(".closeMenu").click(function () {
    $(".overlay").css("display", "none");
    $(".mobilMenu ").hide()
  })
  $(".overlay").click(function () {
    $(this).css("display", "none");
    $(".mobilMenu ").hide();
  });

});

