$(document).ready(function(){

    /* Buttons */

    $("#change").attr("disabled", true);
    $("#change").css("cursor", "default");
    $("#change").css("background-color", "#cdcdcd");
    $("#change1").css("cursor", "pointer");
    $("#change2").css("cursor", "pointer");
    $("#change3").css("cursor", "pointer");
    $("#change4").css("cursor", "pointer");

    $("#change").click(function(){
        $("#two").css("display", "none");
        $("#three").css("display", "none");
        $("#four").css("display", "none");
        $("#five").css("display", "none");
        $("#one").css("display", "block");
        $("#change").attr("disabled", true);
        $("#change").css("cursor", "default");
        $("#change").css("background-color", "#cdcdcd");
        $("#change1").attr("disabled", false);
        $("#change1").css("cursor", "pointer");
        $("#change1").css("background-color", "#696969");
        $("#change2").attr("disabled", false);
        $("#change2").css("cursor", "pointer");
        $("#change2").css("background-color", "#696969");
        $("#change3").attr("disabled", false);
        $("#change3").css("cursor", "pointer");
        $("#change3").css("background-color", "#696969");
        $("#change4").attr("disabled", false);
        $("#change4").css("cursor", "pointer");
        $("#change4").css("background-color", "#696969");
    });

    $("#change1").click(function(){
        $("#one").css("display", "none");
        $("#three").css("display", "none");
        $("#four").css("display", "none");
        $("#five").css("display", "none");
        $("#two").css("display", "block");
        $("#change1").attr("disabled", true);
        $("#change1").css("cursor", "default");
        $("#change1").css("background-color", "#cdcdcd");
        $("#change").attr("disabled", false);
        $("#change").css("cursor", "pointer");
        $("#change").css("background-color", "#696969");
        $("#change2").attr("disabled", false);
        $("#change2").css("cursor", "pointer");
        $("#change2").css("background-color", "#696969");
        $("#change3").attr("disabled", false);
        $("#change3").css("cursor", "pointer");
        $("#change3").css("background-color", "#696969");
        $("#change4").attr("disabled", false);
        $("#change4").css("cursor", "pointer");
        $("#change4").css("background-color", "#696969");
    });

    $("#change2").click(function(){
        $("#one").css("display", "none");
        $("#two").css("display", "none");
        $("#four").css("display", "none");
        $("#five").css("display", "none");
        $("#three").css("display", "block");
        $("#change2").attr("disabled", true);
        $("#change2").css("cursor", "default");
        $("#change2").css("background-color", "#cdcdcd");
        $("#change").attr("disabled", false);
        $("#change").css("cursor", "pointer");
        $("#change").css("background-color", "#696969");
        $("#change1").attr("disabled", false);
        $("#change1").css("cursor", "pointer");
        $("#change1").css("background-color", "#696969");
        $("#change3").attr("disabled", false);
        $("#change3").css("cursor", "pointer");
        $("#change3").css("background-color", "#696969");
        $("#change4").attr("disabled", false);
        $("#change4").css("cursor", "pointer");
        $("#change4").css("background-color", "#696969");
    });

    $("#change3").click(function(){
        $("#one").css("display", "none");
        $("#two").css("display", "none");
        $("#three").css("display", "none");
        $("#four").css("display", "block");
        $("#five").css("display", "none");
        $("#change3").attr("disabled", true);
        $("#change3").css("cursor", "default");
        $("#change3").css("background-color", "#cdcdcd");
        $("#change4").attr("disabled", false);
        $("#change4").css("cursor", "pointer");
        $("#change4").css("background-color", "#696969");
        $("#change2").attr("disabled", false);
        $("#change2").css("cursor", "pointer");
        $("#change2").css("background-color", "#696969");
        $("#change1").attr("disabled", false);
        $("#change1").css("cursor", "pointer");
        $("#change1").css("background-color", "#696969");
        $("#change").attr("disabled", false);
        $("#change").css("cursor", "pointer");
        $("#change").css("background-color", "#696969");
    });

    $("#change4").click(function(){
        $("#one").css("display", "none");
        $("#two").css("display", "none");
        $("#three").css("display", "none");
        $("#four").css("display", "none");
        $("#five").css("display", "block");
        $("#change4").attr("disabled", true);
        $("#change4").css("cursor", "default");
        $("#change4").css("background-color", "#cdcdcd");
        $("#change").attr("disabled", false);
        $("#change").css("cursor", "pointer");
        $("#change").css("background-color", "#696969");
        $("#change1").attr("disabled", false);
        $("#change1").css("cursor", "pointer");
        $("#change1").css("background-color", "#696969");
        $("#change2").attr("disabled", false);
        $("#change2").css("cursor", "pointer");
        $("#change2").css("background-color", "#696969");
        $("#change3").attr("disabled", false);
        $("#change3").css("cursor", "pointer");
        $("#change3").css("background-color", "#696969");
    });

    /* Gallery */

    function timer()
    {
        if($("#five").css("display") != "none"){
            $("#five").fadeOut("slow");
            $("#one").fadeIn("slow");
            $("#change").attr("disabled", true);
            $("#change").css("cursor", "default");
            $("#change").css("background-color", "#cdcdcd");
            $("#change1").attr("disabled", false);
            $("#change1").css("cursor", "pointer");
            $("#change1").css("background-color", "#696969");
            $("#change2").attr("disabled", false);
            $("#change2").css("cursor", "pointer");
            $("#change2").css("background-color", "#696969");
            $("#change3").attr("disabled", false);
            $("#change3").css("cursor", "pointer");
            $("#change3").css("background-color", "#696969");
            $("#change4").attr("disabled", false);
            $("#change4").css("cursor", "pointer");
            $("#change4").css("background-color", "#696969");
        }

        else if($("#one").css("display") != "none"){
            $("#one").fadeOut("slow");
            $("#two").fadeIn("slow");
            $("#change1").attr("disabled", true);
            $("#change1").css("cursor", "default");
            $("#change1").css("background-color", "#cdcdcd");
            $("#change").attr("disabled", false);
            $("#change").css("cursor", "pointer");
            $("#change").css("background-color", "#696969");
            $("#change2").attr("disabled", false);
            $("#change2").css("cursor", "pointer");
            $("#change2").css("background-color", "#696969");
            $("#change3").attr("disabled", false);
            $("#change3").css("cursor", "pointer");
            $("#change3").css("background-color", "#696969");
            $("#change4").attr("disabled", false);
            $("#change4").css("cursor", "pointer");
            $("#change4").css("background-color", "#696969");
        }

        else if($("#two").css("display") != "none"){
            $("#two").fadeOut("slow");
            $("#three").fadeIn("slow");
            $("#change2").attr("disabled", true);
            $("#change2").css("cursor", "default");
            $("#change2").css("background-color", "#cdcdcd");
            $("#change1").attr("disabled", false);
            $("#change1").css("cursor", "pointer");
            $("#change1").css("background-color", "#696969");
            $("#change3").attr("disabled", false);
            $("#change3").css("cursor", "pointer");
            $("#change3").css("background-color", "#696969");
            $("#change4").attr("disabled", false);
            $("#change4").css("cursor", "pointer");
            $("#change4").css("background-color", "#696969");
            $("#change").attr("disabled", false);
            $("#change").css("cursor", "pointer");
            $("#change").css("background-color", "#696969");
        }

        else if($("#three").css("display") != "none"){
            $("#three").fadeOut("slow");
            $("#four").fadeIn("slow");
            $("#change3").attr("disabled", true);
            $("#change3").css("cursor", "default");
            $("#change3").css("background-color", "#cdcdcd");
            $("#change2").attr("disabled", false);
            $("#change2").css("cursor", "pointer");
            $("#change2").css("background-color", "#696969");
            $("#change4").attr("disabled", false);
            $("#change4").css("cursor", "pointer");
            $("#change4").css("background-color", "#696969");
            $("#change1").attr("disabled", false);
            $("#change1").css("cursor", "pointer");
            $("#change1").css("background-color", "#696969");
            $("#change").attr("disabled", false);
            $("#change").css("cursor", "pointer");
            $("#change").css("background-color", "#696969");
        }

        else if($("#four").css("display") != "none"){
            $("#four").fadeOut("slow");
            $("#five").fadeIn("slow");
            $("#change4").attr("disabled", true);
            $("#change4").css("cursor", "default");
            $("#change4").css("background-color", "#cdcdcd");
            $("#change3").attr("disabled", false);
            $("#change3").css("cursor", "pointer");
            $("#change3").css("background-color", "#696969");
            $("#change2").attr("disabled", false);
            $("#change2").css("cursor", "pointer");
            $("#change2").css("background-color", "#696969");
            $("#change1").attr("disabled", false);
            $("#change1").css("cursor", "pointer");
            $("#change1").css("background-color", "#696969");
            $("#change").attr("disabled", false);
            $("#change").css("cursor", "pointer");
            $("#change").css("background-color", "#696969");
        }
    }

    /* Timer */

    $("[id^=change]").click(function(){
        clearInterval(myTimer);
        myTimer = setInterval(timer, 7000);
    });

    var myTimer = setInterval(timer, 7000);


});