var $div = $("div");

// animate the element using velocity
//  $div.velocity({ opacity: 0 });

//$div.velocity({ width: "500px", opacity: 1 }, { duration: 400, easing: "swing"});

//$div.velocity({ top: 50 }, 1000, "ease-in-out", function() { alert("Complete"); });

//$div.velocity({ top: 50 }, { duration: 1000, easing: "ease-in-out", delay: 500 });

//$div.velocity({ width: "100px", height: "100px"}).velocity({ top : "50px" });

/*$div.velocity({
  top: 50,
  left: "50%",
  rotateZ: 25
});*/

/*$div.velocity({
  top: "50px",
  left: "-50",
  width: "+=5rem",
  height: "+10rem",
  paddingLeft: "*2",
  paddingRight: "/=2"
});*/

// chaining will execute in sequence/order
/*$div
  .velocity({
    width: "100px", height: "100px"
  })
  .velocity({ top: "50px" });*/

//$div.velocity({ opacity: 0 }, { duration: 1000 });

// EASING

// $div.velocity({ width: "100px", height: "100px"}, "easeInOutSine");

// Spring physics - array takes tension, friction numbers, default 500
//$div.velocity({ width: "100px", height: "100px"}, [ 250, 15 ]);

// spring easing - you can also pass in an 'easing' property to more clearly define the page
//$div.velocity({ width: "100px", height: "100px"}, "spring");

// begin and complete callbacks
// $div.velocity({opacity: 0}, { begin: function() { console.log("Begin!")}, complete: function() { } });

// looping
// $div.velocity({ height: "10em" }, { loop: 2 });

// infinite loops
//$div.velocity({ height: "10em" }, { loop: true });

// subsequently stopping infinite loops
//$div.velocity("stop");

// $div.velocity({ translateY: "100px" }, { loop: 2 });

// pulsating effect
//$div.velocity({ opacity: .5 }, { loop: true }, 10);

/*$div.velocity({ translateY: "100px", height: "100px" }, { delay: 200 })
    .velocity({ translateX: "50px", width: "100px"}, { delay: 1000 });*/

// reverse the previous call - will only step back once on multiple chained animations
//$div.velocity("reverse");

// SCROLLING
/*$div.velocity( "scroll", { duration: 1000, easing: "spring" })
    .velocity({ opacity: 0 });*/

// More scroll features are covered in the book.
// $div.velocity("scroll", { duration: 1000, offset: "200px" });

// transforms
$div.velocity({ translateZ: "500px", rotateZ: "-15deg" });
