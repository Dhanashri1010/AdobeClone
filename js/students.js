$(document).ready(function(){

$(".benefit-card").hover(

function(){
$(this).css("transform","translateY(-10px)");
},

function(){
$(this).css("transform","translateY(0)");
}

);

});