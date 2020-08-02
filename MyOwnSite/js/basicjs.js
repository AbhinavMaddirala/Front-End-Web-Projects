$(document).scroll(function(){
    
    $(".navbar").css("background-color","black");
    
});

$(function(){
    $(".banner").focus(function(){
        $(".navbar").css("background-color","transparent");
    });
});