$(document).ready(function(){
    $(window).scroll(function(){
        var scrollTop = 105;
        if($(window).scrollTop() >= scrollTop){
            $("#navBar, #nav").addClass("sticky");
        }

        if($(window).scrollTop() < scrollTop){
            $("#navBar, #nav").removeClass("sticky");
        }
    })
});