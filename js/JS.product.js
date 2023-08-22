
/**=====================
     product-packed js
==========================**/

$(".product-packege .select-packege li a").click(function () {
    $("li a").removeClass("active");
    $(this).addClass("active");
});

 /**=====================
     Timer 1 js
==========================**/
 
 function getTimeRemaining(endtime) {
     var t = Date.parse(endtime) - Date.parse(new Date());

     
     var seconds = Math.floor((t / 1000) % 60);
     var minutes = Math.floor((t / 1000 / 60) % 60);
     var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
     var days = Math.floor(t / (1000 * 60 * 60 * 24));

    return {
         'total': t,
         'days': days,
         'hours': hours,
         'minutes': minutes,
         'seconds': seconds
     };
 }
 function initializeClock(id, endtime) {
     var clock = document.getElementById(id);
     var daysSpan = clock.querySelector('.days');
     var hoursSpan = clock.querySelector('.hours');
     var minutesSpan = clock.querySelector('.minutes');
     var secondsSpan = clock.querySelector('.seconds');

     function updateClock() {
         var t = getTimeRemaining(endtime);

         daysSpan.innerHTML = t.days;
         hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
         minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
         secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

         if (t.total <= 0) {
             clearInterval(timeinterval);
         }
     }

     updateClock(); 
     var timeinterval = setInterval(updateClock, 1000);
 }


 var deadline = new Date(Date.parse(new Date()) + 11 * 24 * 60 * 60 * 1000);
 initializeClock('clockdiv-1', deadline);


/**=====================
     slider-6_1 js
==========================**/


$('.slider-6_1').slick({
    arrows: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: true,
    responsive: [{
            breakpoint: 1430,
            settings: {
                slidesToShow: 4,
                autoplay: true,
                autoplaySpeed: 3500,
            }
        },
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        },
        
    ]
});

/**=====================
     Sticky Cart Bottom js
==========================**/
$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  var width_content = jQuery(window).width();

  if (width_content > "300") {
    if (scroll >= 800) {
      $("body").addClass("stickyCart");
    } else {
      $("body").removeClass("stickyCart");
    }
  }
});








