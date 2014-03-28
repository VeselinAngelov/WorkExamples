$(document).ready(function(){

    /* Subject selection */
    $("#one").click(function(){
        $("#sidebar2, #sidebar3, #sidebar4, #sidebar5, #sidebar6, #sidebar7, #sidebar8, #sidebar9, #sidebar10, #sidebar11, #sidebar12").hide();
        if($("#request").text() == "Please select a subject group"){
            $("#sidebar1").animate({width: 'toggle'}, 300);
            $("#cnse").hide();
            $("#cese").hide();
            $("#maths").show();
            $("hr").show();
            $("#request").text("Please select a person to view their details");
            $("#s1, #one").addClass("selected");
            $("[id^=contact]").hide();
            $("#s2, #s3, #two, #three, #four, #s4, #five, #s5, #six, #s6, #seven, #s7, #eight, #s8, #nine, #s9, #ten, #s10, #eleven, #s11, #twelve, #s12").removeClass("selected");
        }
        else if($("#request").text() == "Please select a person to view their details" &&  $("#sidebar1").css("display") != "none"){
            $("#sidebar1").animate({width: 'toggle'}, 300);
            $("#request").text("Please select a subject group");
            $("#maths").show();
            $("hr").show();
            $("#s1, #one, #four, #s4, #five, #s5, #six, #s6, #seven, #s7, #eight, #s8, #nine, #s9, #ten, #s10, #eleven, #s11, #twelve, #s12").removeClass("selected");
        }
        else if($("#request").text() == "Please select a person to view their details" && $("#sidebar1").css("display") == "none"){
            $("#sidebar1").animate({width: 'toggle'}, 300);
            $("#request").text("Please select a person to view their details");
            $("#s1, #one").addClass("selected");
            $("#cnse").hide();
            $("#cese").hide();
            $("#maths").show();
            $("hr").show();
            $("[id^=contact]").hide();
            $("#s2, #s3, #two, #three, #four, #s4, #five, #s5, #six, #s6, #seven, #s7, #eight, #s8, #nine, #s9, #ten, #s10, #eleven, #s11, #twelve, #s12").removeClass("selected");
        }



    })

    $("#two").click(function(){
        $("#sidebar1, #sidebar3, #sidebar4, #sidebar5, #sidebar6, #sidebar7, #sidebar8, #sidebar9, #sidebar10, #sidebar11, #sidebar12").hide();
        if($("#request").text() == "Please select a subject group"){
            $("#request").text("Please select a person to view their details");
            $("#sidebar2").animate({width: 'toggle'}, 300);
            $("#s2, #two").addClass("selected");
            $("#cnse").hide();
            $("#maths").hide();
            $("#cese").show();
            $("hr").show();
            $("[id^=contact]").hide();
            $("#s1, #s3, #one, #three, #four, #s4, #five, #s5, #six, #s6, #seven, #s7, #eight, #s8, #nine, #s9, #ten, #s10, #eleven, #s11, #twelve, #s12").removeClass("selected");
        }
        else if($("#request").text() == "Please select a person to view their details" &&  $("#sidebar2").css("display") != "none"){
            $("#sidebar2").animate({width: 'toggle'}, 300);
            $("#request").text("Please select a subject group");
            $("#cese").show();
            $("hr").show();
            $("#s2, #two, #four, #s4, #five, #s5, #six, #s6, #seven, #s7, #eight, #s8, #nine, #s9, #ten, #s10, #eleven, #s11, #twelve, #s12").removeClass("selected");
        }
        else if($("#request").text() == "Please select a person to view their details" && $("#sidebar2").css("display") == "none"){
            $("#sidebar2").animate({width: 'toggle'}, 300);
            $("#request").text("Please select a person to view their details");
            $("#s2, #two").addClass("selected");
            $("#cnse").hide();
            $("#maths").hide();
            $("#cese").show();
            $("hr").show();
            $("[id^=contact]").hide();
            $("#s1, #s3, #one, #three, #four, #s4, #five, #s5, #six, #s6, #seven, #s7, #eight, #s8, #nine, #s9, #ten, #s10, #eleven, #s11, #twelve, #s12").removeClass("selected");
        }

    })

    $("#three").click(function(){
        $("#sidebar2, #sidebar1, #sidebar4, #sidebar5, #sidebar6, #sidebar7, #sidebar8, #sidebar9, #sidebar10, #sidebar11, #sidebar12").hide();
        if($("#request").text() == "Please select a subject group"){
            $("#request").text("Please select a person to view their details");
            $("#sidebar3").animate({width: 'toggle'}, 300);
            $("#s3, #three").addClass("selected");
            $("#cese").hide();
            $("#maths").hide();
            $("#cnse").show();
            $("hr").show();
            $("[id^=contact]").hide();
            $("#s1, #s2, #one, #two, #four, #s4, #five, #s5, #six, #s6, #seven, #s7, #eight, #s8, #nine, #s9, #ten, #s10, #eleven, #s11, #twelve, #s12").removeClass("selected");
        }
        else if($("#request").text() == "Please select a person to view their details" &&  $("#sidebar3").css("display") != "none"){
            $("#sidebar3").animate({width: 'toggle'}, 300);
            $("#request").text("Please select a subject group");
            $("#cnse").show();
            $("hr").show();
            $("#s3, #three, #four, #s4, #five, #s5, #six, #s6, #seven, #s7, #eight, #s8, #nine, #s9, #ten, #s10, #eleven, #s11, #twelve, #s12").removeClass("selected");
        }
        else if($("#request").text() == "Please select a person to view their details" && $("#sidebar3").css("display") == "none"){
            $("#sidebar3").animate({width: 'toggle'}, 300);
            $("#request").text("Please select a person to view their details");
            $("#s3, #three").addClass("selected");
            $("#cese").hide();
            $("#maths").hide();
            $("#cnse").show();
            $("hr").show();
            $("[id^=contact]").hide();
            $("#s1, #s2, #one, #two, #four, #s4, #five, #s5, #six, #s6, #seven, #s7, #eight, #s8, #nine, #s9, #ten, #s10, #eleven, #s11, #twelve, #s12").removeClass("selected");
        }

    })


    /* Person selection */

    //Group 1
    $("#four").click(function(){
        $("#four, #s4").addClass("selected");
        $("#five, #s5, #six, #s6").removeClass("selected");
        $("[id^=contact]").hide();
        $("#contact1").show();
    });

    $("#five").click(function(){
        $("#five, #s5").addClass("selected")
        $("#four, #s4, #six, #s6").removeClass("selected");
        $("[id^=contact]").hide();
        $("#contact2").show();
    });

    $("#six").click(function(){
        $("#six, #s6").addClass("selected")
        $("#four, #s4, #five, #s5").removeClass("selected");
        $("[id^=contact]").hide();
        $("#contact3").show();
    });

    //Group 2
    $("#seven").click(function(){
        $("#seven, #s7").addClass("selected")
        $("#eight, #s8, #nine, #s9").removeClass("selected");
        $("[id^=contact]").hide();
        $("#contact4").show();
    });

    $("#eight").click(function(){
        $("#eight, #s8").addClass("selected")
        $("#seven, #s7, #nine, #s9").removeClass("selected");
        $("[id^=contact]").hide();
        $("#contact5").show();
    });

    $("#nine").click(function(){
        $("#nine, #s9").addClass("selected")
        $("#seven, #s7, #eight, #s8").removeClass("selected");
        $("[id^=contact]").hide();
        $("#contact6").show();
    });

    //Group 3
    $("#ten").click(function(){
        $("#ten, #s10").addClass("selected")
        $("#eleven, #s11, #twelve, #s12").removeClass("selected");
        $("[id^=contact]").hide();
        $("#contact7").show();
    });

    $("#eleven").click(function(){
        $("#eleven, #s11").addClass("selected")
        $("#ten, #s10, #twelve, #s12").removeClass("selected");
        $("[id^=contact]").hide();
        $("#contact8").show();
    });

    $("#twelve").click(function(){
        $("#twelve, #s12").addClass("selected")
        $("#ten, #s10, #eleven, #s11").removeClass("selected");
        $("[id^=contact]").hide();
        $("#contact9").show();
    });


});