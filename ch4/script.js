//$("div").addClass("fadeInAndMove", 1000); //jquery ui animation

//$("div").animate({ opacity: 1, top: 50 }, 1000); //jquery animate method

/*var fadeIn = {
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

$("div").velocity(fadeIn.p, fadeIn.oFast);*/

/*$(".one").velocity({ translateX: 100, opacity: 1 }, 1000, function() {
  $(".two").velocity({ translateX: 200, opacity: 1 }, 1000, function() {
    $(".three").velocity({ translateX: 300, opacity: 1 }, 1000);
  });
});*/

/*$(".one").velocity({ translateX: 100, opacity: 1 })
         .velocity({ translateY: 100 })
         .velocity({ translateZ: 100 });*/

//$.Velocity({ e: $("div"), p: { opacity: 1, scale: 1 }, o: { duration: 1000, easing: "linear" } });

// Create the array of Velocity calls
var loadingSequence = [
  { e: $(".one"), p: { translateX: 100, opacity: 1 },
    o: { duration: 1000 } },
  { e: $(".two"), p: { translateY: 200, opacity: 1 },
    o: { duration: 1000 } },
  { e: $(".two"), p: { translateX: 400 },
    o: { duration: 3000 } },
  { e: $(".three"), p: { translateX: 300, opacity: .9 },
    o: { duration: 1000, easing: "spring" } }
];

$.Velocity.RunSequence( loadingSequence );

/*$("div")
    .velocity({ opacity: 1, scale: 1 }, { duration: 500, easing: "ease-in-out" })
    .velocity({ borderWidth: "1rem" }, { delay: 200, easing: "spring", duration: 400 });*/

// syntax for Velocity UI optimization
/*$.Velocity.RegisterEffect(name, {
  // default duration if value isn't passed into the call
  defaultDuration: duration,
  // the following velocity calls occur one after another,
  // with each taking up a predefined percentage of the effects total duration
  calls: [
    [ propertiesObject, durationPercentage, optionsObject ],
    [ propertiesObject, durationPercentage, optionsObject ]
  ],
  reset: resetPropertiesObject
});*/

// Example of registering effect
$.Velocity
    .RegisterEffect("shadowIn", {
      defaultDuration: 1000,
      calls: [
        [ { opacity: 1, scale: 1 }, 0.4 ],
        [ { boxShadowBlur: 5 }, 0.6 ]
      ]
    })
    .RegisterEffect("shadowGrow", {
      defaultDuration: 800,
      calls: [
        // we reverse the order to mirror the "in" direction
        [ { boxShadowBlur: 15 }, 0.2 ],
        [ { scale: 1.5 }, 0.8 ]
      ]
    })
    .RegisterEffect("shadowOut", {
      defaultDuration: 1500,
      calls: [
        [ { boxShadowBlur: 50 }, 0.3 ],
        [ { opacity: 0, scale: 0 }, 0.8 ]
      ]
    });

$("div").velocity("shadowIn").velocity("shadowGrow").velocity("shadowOut");
