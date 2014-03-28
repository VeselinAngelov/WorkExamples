$(document).ready(function() {
    $("#content, #footerBar, .fullscr").css("display", "none");
    $("body").css("background-color", "#777777")

    $(window).load(function() {
    $("#content, #footerBar, img").fadeIn(600);
        $("#loadBackground, #loader").css("display", "none");
        $("body").css("background-color", "white");

    $("a.nav").click(function(event){
        event.preventDefault();
        newLocation = this.href;
        $("body").fadeOut(400, redirectPage);
    });

    function redirectPage() {
        window.location = newLocation;
    }
})});