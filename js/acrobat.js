$(document).ready(function(){

$(".tool-card").hover(

function(){

$(this).css(
"transform",
"translateY(-10px)"
);

},

function(){

$(this).css(
"transform",
"translateY(0)"
);

}

);

});