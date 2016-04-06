$(document).ready(function() {

var one = $("#1");
var two = $("#2");

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

two.click(function(){
    two.css("background-color","red").after('Clicked');
});

});
