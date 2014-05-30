


//  // Now, Now  //
$(document).ready(function($) {

    // Prevent FOUC while JS loads, then swap for Run ----------
    setTimeout(function () {
        $('body').removeClass('init').addClass('run');
    }, 500);

    // Menu ----------
    $('html.js #main-navigation').accessibleMegaMenu();


    // Mobile Menu ----------
    var menu = $('#navigation-menu');
    var menuToggle = $('#js-mobile-menu');
    var signUp = $('.sign-up');

    $(menuToggle).on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass("active-menu");
    menu.slideToggle(function(){
      if(menu.is(':hidden')) {
        menu.removeAttr('style');
      }
    });
    });


    // underline under the active nav item
    $(".nav .nav-link").click(function() {
    $(".nav .nav-link").each(function() {
      $(this).removeClass("active-nav-item");
    });
    $(this).addClass("active-nav-item");
    $(".nav .more").removeClass("active-nav-item");
    });



    // Smooth Scroll for Basic Anchors Links ----------
    $('a[href^="#"]').on('click',function (e) {
      e.preventDefault();
      var target = this.hash,
      $target = $(target);
      $('html, body').stop().animate({
          'scrollTop': $target.offset().top
      }, 500, 'swing', function () {
          window.location.hash = target;
          // history.replaceState({}, '', '/');
      });
    });


    // // Toggle View All ----------
    // $('.open-g-door').on('click', function(e){
    //     $('.g-door').toggleClass("open");
    //     mainNav.toggleClass("push-for-door");
    //     $(this).toggleClass("switch");
    //     e.preventDefault();
    // });
    // // Add an optional secondary close button
    // $('.close-g-door').on('click', function(e){
    //     $('.g-door').removeClass("open");
    //     mainNav.removeClass("push-for-door");
    //     e.preventDefault();
    // });


    // LazyLoad Images ----------
    $('img.load').lazyload({
        effect : "fadeIn"
    });


    // Collapsible Content - Add Toggle ----------
    // var toggleIcon = $( "<span class='toggle-icon' data-icon='E'></span>" );
    // $('.collapse-header').append(toggleIcon);
    // // Collapsible Content
    // $(function() {
    //   $(".collapse-header").click(function () {
    //     if ($(this).hasClass('open')){
    //         $(this).next('.collapse-content').slideUp('slow');
    //         $(this).removeClass('open')
    //     }
    //     else {
    //       // close other content
    //       $('.collapse-header').not(this).next('.collapse-content').slideUp('slow');
    //       $('.collapse-header').not(this).removeClass('open');

    //       //open clicked content
    //       $(this).next('.collapse-content').slideDown('slow');
    //       // add open class
    //       $(this).addClass('open');
    //     }
    //   });
    // });


    // Slideshow ----------
    // $('.slideshow').flexslider({
    //     animation: "slide",
    //     controlNav: false,
    //     prevText: '',
    //     nextText: ''
    // });

});
