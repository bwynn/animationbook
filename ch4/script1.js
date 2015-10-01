// arbitrary attribute designation - creating this multiplier allows for easy fine tuning of
// any animations by slowing down or speeding up all element animations to get timing just right
var M = 10;

//$("div.first").animate({ opacity: 1 }, { duration: 1000 * M });

//$("div.second").velocity({ opacity: 1 }, { delay: 250 * M });

// or bake it in using .mock object on Velocity
$.Velocity.mock = 5;

$("div").velocity({ opacity: 1 }, { duration: 1000 });
