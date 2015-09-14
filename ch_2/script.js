var $div = $("div");

// animate the element using velocity
//  $div.velocity({ opacity: 0 });

//$div.velocity({ width: "500px", opacity: 1 }, { duration: 400, easing: "swing"});

//$div.velocity({ top: 50 }, 1000, "ease-in-out", function() { alert("Complete"); });

//$div.velocity({ top: 50 }, { duration: 1000, easing: "ease-in-out", delay: 500 });

$div.velocity({ width: "100px", height: "100px"}).velocity({ top : "50px" });
