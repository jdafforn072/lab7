$(document).ready(function() {

var one = $("#1");
var two = $("#2");
var three = $("#3");
var four = $("#4");

one.hover(function() {
    one.fadeTo( "slow" , 0.25);
},function(){
    one.fadeTo( "slow" , 1);
});
two.hover(function() {
    two.fadeTo( "slow" , 0.25);
},function(){
    two.fadeTo( "slow" , 1);
});
three.hover(function() {
    three.fadeTo( "slow" , 0.25);
},function(){
    three.fadeTo( "slow" , 1);
});
four.hover(function() {
    four.fadeTo( "slow" , 0.25);
},function(){
    four.fadeTo( "slow" , 1);
});
one.click(function(){
    one.css("background-color","red"),
    one.add('<span>Clicked</span>').text("Clicked");
});
two.click(function(){
    two.css("background-color","red"),
    two.add('<span>Clicked</span>').text("Clicked");
});
three.click(function(){
    three.css("background-color","red"),
    three.add('<span>Clicked</span>').text("Clicked");
});
four.click(function(){
    four.css("background-color","red"),
    four.add('<span>Clicked</span>').text("Clicked");
});

});
