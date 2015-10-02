// USING BLAST JS
//$("div").blast({ delimiter: "word" }); // separates words into spans when word used as delimiter

//$("div").blast({ delimiter: "character" }); // separates each character into it's own span using
// character delimiter

//$("div").blast({ delimiter: "sentence" }); // separates sentences into spans when sentence used as delimiter

//$("div").blast({ delimiter: "sentence", customClass: "specialClass" }).css("opacity", 0.5);
// assign general classes onto all elements

//$("div").blast({ delimiter: "word", generateValueClass: true }); // generate individual class assignments
// for targeted declarations

//$("div").blast({ delimiter: "word", tag: "div" }); // place delimited words into div elements

/*$("div")
  .html("This is our new message")
  .blast({ delimiter: "word" })
  .css("opacity", 0 )
  .velocity({ opacity: 1 });*/

// Using Velocity UI's stagger property
/*$("div").html("This is our new message")
        .blast({ delimiter: "word" })
        .css( "opacity", 0 )
        .velocity( "transition.fadeIn", { stagger: 50 });

// To include the full range of animation
$("div .blast").velocity(
  // Animate the existing text out of view with the appropriate UI pack effect
  "transition.fadeOut", {
    // Stagger the outward animation as you did the inward animation
    stagger: 50,
    backwards: true,
    // When this outward animation is complete, begin the inward animation
    complete: function() {
      $("div")
          .html(message)
          .blast({ delimiter: "word" })
          .css( "opacity", 0 )
          .velocity({ opacity: 1 }, { stagger: 50 });
    }
  }
);*/

// Changing individual words within a sentence with a smooth transition
/*$("div").blast({ delimiter: "word" })
    // select the third word in the sentence
    .eq(2)
      // fade the third element out of view then replace its inner text with
      // new message
      .velocity({ opacity: 0 }, function() { $(this).text("running") })
      // fade the replaced text into view
      .velocity({ opacity: 1 });*/

// to apply further effects onto inline elements, set to inline block to
// add more advanced animations and transitions
/*$("div")
  .html("New Status: AWESOME!")
  .blast({ delimiter: "word" })
    .css({ opacity: 0, display: "inline-block" })
    .velocity("transition.perspectiveDownIn", { stagger: 50 });*/

// TEXTUAL FLOURISHES
/*$("div").blast({ delimiter: "character" }).each(function(i, element) {
  // successively reduce the opacity of each element with an arbitrary formula
  var adjustedOpacity = 1 - i/10;
  element.style.opacity = adjustedOpacity;
});*/

// changing blues
$("div").blast({ delimiter: "character" }).each(function(i, element) {
  var adjustedBlue = i*20;
  element.style.color = "rgb(0, 0," + adjustedBlue + ")";
});
