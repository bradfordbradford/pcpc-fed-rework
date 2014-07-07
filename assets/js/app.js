$(document).ready(function($) {



    // Prevent FOUC while JS loads, then swap for Run
    // -----------------------------------------------
    $('html').removeClass('no-js').addClass('js');
    setTimeout(function () {
        $('body').removeClass('init').addClass('run');
    }, 500);



    // Menu
    // -----------------------------------------------
    $('#main-navigation').accessibleMegaMenu();
    $('#main-navigation').addClass('run');




    // Mobile Menu
    // -----------------------------------------------
    var menu = $('#navigation-menu');
    var menuToggle = $('#js-mobile-menu');
    $(menuToggle).on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass("active-menu");
    menu.slideToggle(function(){
      if(menu.is(':hidden')) {
        menu.removeAttr('style');
      }
    });
    });




    // Search
    // -----------------------------------------------
    $('.js-search-trigger').on('click touchstart', function(e){
      $('.js-search').toggleClass('is-visible');
      $('#js-search-overlay').addClass('is-visible');
      e.preventDefault();
    });
    $('#js-search-overlay').on('click touchstart', function(e){
      $('.js-search').removeClass('is-visible');
      $(this).removeClass('is-visible');
      e.preventDefault();
    });




    // Smooth Scroll for Basic Anchors Links
    // -----------------------------------------------
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




    // Horizontal Tabs
    // -----------------------------------------------
     $('.accordion-tabs-minimal').each(function(index) {
        $(this).children('li').first().children('a').addClass('is-active').next().addClass('is-open').show();
      });

      $('.accordion-tabs-minimal').on('click', 'li > a', function(event) {
        if (!$(this).hasClass('is-active')) {
          event.preventDefault();
          var accordionTabs = $(this).closest('.accordion-tabs-minimal')
          accordionTabs.find('.is-open').removeClass('is-open').hide();

          $(this).next().toggleClass('is-open').toggle();
          accordionTabs.find('.is-active').removeClass('is-active');
          $(this).addClass('is-active');
        } else {
          event.preventDefault();
        }
    });




    // LazyLoad Images
    // -----------------------------------------------
    $('img.load').lazyload({
        effect : "fadeIn"
    });




});