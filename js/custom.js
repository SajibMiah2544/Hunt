$(function(){
  
   //animation scroll js
    var html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 86
                }, 1000);
                return false;
            }
        }
    });
    
    // banner slider
    $('.slider-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        speed: 1000,
        prevArrow: '.slidenext',
        nextArrow: '.slideprev',
      });

  // service slider service-slider
      $('.service-slider-main').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        vertical: true,
        prevArrow: '.slider-arrow-top',
        nextArrow: '.slider-arrow-bottom',
        verticalSwiping: true,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
      });

    // testimonial slider
    $('.testimonial-item').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
      vertical: true,
      prevArrow: '.testimonial-arrow-top',
      nextArrow: '.testimonial-arrow-bottom',
      verticalSwiping: true,
      asNavFor:'.testimonial-content-slider',
      centerMode: true,
      centerPadding: '0',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            vertical: false,
            verticalSwiping: false,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            vertical: false,
            verticalSwiping: false,
          }
        }
      ]
    });
    $('.testimonial-content-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
      fade: true,
      speed: 1000,
      asNavFor:'.testimonial-item',
      arrows: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical: false,
            verticalSwiping: false,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical: false,
            verticalSwiping: false,
          }
        }
      ]
    });

    // counter js 
    $('.counter').counterUp({
      delay: 5,
      time: 3000,
  });

  // wow js
  new WOW().init();
  
  // Sticky Menu
  $(window).scroll(function(){

    // Bake To Top
    if($(this).scrollTop() >300){
        $('.bake-top-top').fadeIn();
    }
    else{
        $('.bake-top-top').fadeOut();
    }

    // Sticky Menu
    if($(this).scrollTop() >200){
      $('.navbar').addClass('fixed-nav');
    }
    else{
      $('.navbar').removeClass('fixed-nav');
    }
    });

  // Bake to top
  $('.bake-top-top').on('click', function(){
    $('html').animate({scrollTop: 0}, 1500)
  });

   // Pre loader
    $(window).on('load',function(){
    $('#preloader').delay(2000).fadeOut(2000);
  });

  // venobox images popup
  $('.venobox').venobox({
    framewidth : '800px',                            // default: ''
    frameheight: '600px',
  });
  // Scroll Spy js for Refresh
    // bootstrap scroll spy
      var scrollSpy = new bootstrap.ScrollSpy(document.body, {
        target: '#navPart',
        offset: 86,
    })
  var dataSpyList = [].slice.call(document.querySelectorAll('[data-bs-spy="scroll"]'))
  dataSpyList.forEach(function (dataSpyEl) {
    bootstrap.ScrollSpy.getInstance(dataSpyEl)
      .refresh()
  })

});