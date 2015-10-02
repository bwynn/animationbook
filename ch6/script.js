//$("rect").velocity({ fill: "#ff0000", stroke: "#000000" });

// Animate the x and y coordinates of a rectangle
//$("rect").velocity({ x: 100, y: 100 });
// Animate the cx and cy coordinates of a circle
//$("circle").velocity({ cx: 100, cy: 100 });
// animate the dimensions of a rectangle
//$("rect").velocity({ width: 200, height: 200 });
// animate the radius of a circle
//$("circ").velocity({ r: 300 });

// Move one cicrle toward the left
$("#circleLeft").velocity({ cx: "-=15px" }, { easing: "spring" });
$("#circleRight").velocity({ cx: "+=15px"}, { easing: "spring" });

$("svg").on("mouseover mouseout", function() {
  $("#circleLeft, #circleRight").velocity("reverse");
});
