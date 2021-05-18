$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        
        autoplay: true,
        loop: true,
        autoplayTimeout:1800,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items: 1,
            },
            // breakpoint from 480 up
            480 : {
                items: 3,
            },
            // breakpoint from 768 up
            768 : {
                items: 5,
            }
        }
    });
  });