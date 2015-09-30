//$("div").addClass("fadeInAndMove", 1000); //jquery ui animation

//$("div").animate({ opacity: 1, top: 50 }, 1000); //jquery animate method

var fadeIn = {
  //opacity: 1,
  //top: "50px"
  p: {
    opacity: 1,
    top: "50px"
  },
  oFast: {
    duration: 1000,
    easing: "linear"
  },
  oSlow: {
    duration: 3000,
    easing: "linear"
  }
};

$("div").velocity(fadeIn.p, fadeIn.oFast);

/*$(".one").velocity({ translateX: 100, opacity: 1 }, 1000, function() {
  $(".two").velocity({ translateX: 200, opacity: 1 }, 1000, function() {
    $(".three").velocity({ translateX: 300, opacity: 1 }, 1000);
  });
});*/

$(".one").velocity({ translateX: 100, opacity: 1 })
         .velocity({ translateY: 100 })
         .velocity({ translateZ: 100 });
