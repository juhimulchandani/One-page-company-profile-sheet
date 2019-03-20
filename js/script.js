$(function(){
  /********************************************************************************************
                            GENERAL SECTION
    ********************************************************************************************/
    new WOW().init();
    
    
    /********************************************************************************************
                            WORK SECTION
    ********************************************************************************************/
    $('#work').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
        
    gallery:{
    enabled:true
  },
        
        mainClass: 'mfp-with-zoom', // this class is for CSS animation below

  zoom: {
    enabled: true, // By default it's false, so don't forget to enable it

    duration: 300, // duration of the effect, in milliseconds
    easing: 'ease-in-out', // CSS transition easing function

    // The "opener" function should return the element from which popup will be zoomed in
    // and to which popup will be scaled down
    // By defailt it looks for an image tag:
    opener: function(openerElement) {
      // openerElement is the element on which popup was initialized, in this case its <a> tag
      // you don't need to add "opener" option if this code matches your needs, it's defailt one.
      return openerElement.is('img') ? openerElement : openerElement.find('img');
    }
  }
});
  
    /********************************************************************************************
                            TEAM SECTION  (owl carousel)
    ********************************************************************************************/
   
  $(".team-members").owlCarousel({
      items: 3,
      autoplay:true,
      smartSpeed: 700,
      loop: true,
      autoplayHoverPause: true,
      responsive: {
          0:{
              items: 1,
              autoplayHoverPause: false,
          },
          480:{
              items:2,
          },
          768:{
          items: 3,
      },
      },
  });
   
        /********************************************************************************************
                            TEAM SECTION  (owl carousel)
    ********************************************************************************************/
   
  $(".customers-testimonials").owlCarousel({
      items: 1,
      autoplay:true,
      smartSpeed: 700,
      loop: true,
      autoplayHoverPause: true,
     
  });
    /********************************************************************************************
                            STATS SECTION  (counter-up)
    ********************************************************************************************/
    
    $('.counter').counterUp({
    delay: 10,
    time: 1500
});
     /********************************************************************************************
                            CLIENT LIST SECTION  (owl carousel)
    ********************************************************************************************/
   
  $(".clients-list").owlCarousel({
      items: 6,
      autoplay:true,
      smartSpeed: 700,
      loop: true,
      autoplayHoverPause: true,
      responsive:{
          0:{
              items:2,
              autoplayHoverPause:false,
          },
          480:{
              items:4,
          },
          768:{
              items:6,
          }
      }
     
  });
    /********************************************************************************************
                            NAVBAR SECTION  
    ********************************************************************************************/
        $(window).scroll(function(){
            if($(this).scrollTop() < 64){
                $("nav").removeClass("wg-top-navbar");
                $(".btn-back-to-top").fadeOut();
            }else{
                $("nav").addClass("wg-top-navbar");
                $(".btn-back-to-top").fadeIn();
            }
        });
    
    $("a.smooth-scroll").click(function(event){
        //don't perform your default action
        
        event.preventDefault();
        
        var section = $(this).attr("href");
        
        $("html, body").animate({
            scrollTop: $(section).offset().top-64,
        },1500);
    });
    
    
    //onload
    if($(window).scrollTop() > 64){
        $("nav").addClass("wg-top-navbar");
        $(".btn-back-to-top").fadeIn();
    }
    
});
  