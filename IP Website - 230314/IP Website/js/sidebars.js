$(document).ready(function(){

    function stopVideo() {
        $(".video").attr("src","");
    }

    $("#ten").click(function(){
        $("#sidebar2, #sidebar3, #sidebar4, #sidebar5, #sidebar6, #sidebar7, #sidebar8, #sidebar9, #sidebar10, #sidebar11, #sidebar12").hide();
        if($("#request").text() == "Please select a department"){
            $("#sidebar1").animate({width: 'toggle'}, 300);
            $("#request").text("Please select a building");
            $("#s1, #ten").addClass("selected");
            $("#s2, #s3, #eleven, #twelve, #one, #s4, #two, #s5, #three, #s6, #four, #s7, #five, #s8, #six, #s9, #seven, #s10, #eight, #s11, #nine, #s12").removeClass("selected");
        }
        else if($("#request").text() == "Please select a building" &&  $("#sidebar1").css("display") != "none"){
            $("#sidebar1").animate({width: 'toggle'}, 300);
            $("#request").text("Please select a department");
            $("#s1, #ten").removeClass("selected");
        }
        else if($("#request").text() == "Please select a building" && $("#sidebar1").css("display") == "none"){
            $("#sidebar1").animate({width: 'toggle'}, 300);
            $("#request").text("Please select a building");
            $("#s1, #ten").addClass("selected");
            $("#s2, #s3, #eleven, #twelve, #one, #s4, #two, #s5, #three, #s6, #four, #s7, #five, #s8, #six, #s9, #seven, #s10, #eight, #s11, #nine, #s12").removeClass("selected");
        }
        else if($("#request").text() == "Please select a room" && $("#sidebar1").css("display") != "none"){
            $("#sidebar1").animate({width: 'toggle'}, 300);
            $("#request").text("Please select a department");
            $("#s1, #s3, #s2, #eleven, #ten, #twelve").removeClass("selected");
        }
        else if($("#request").text() == "Please select a room" && $("#sidebar2").css("display") != "none"
            || $("#sidebar3").css("display") != "none" || $("#sidebar1").css("display") == "none"){
            $("#sidebar1").animate({width: 'toggle'}, 300);
            $("#request").text("Please select a building");
            $("#s1, #ten").addClass("selected");
            $("#s2, #s3, #eleven, #twelve, #one, #s4, #two, #s5, #three, #s6, #four, #s7, #five, #s8, #six, #s9, #seven, #s10, #eight, #s11, #nine, #s12").removeClass("selected");
        }
    })

    $("#eleven").click(function(){
        $("#sidebar1, #sidebar3, #sidebar4, #sidebar5, #sidebar6, #sidebar7, #sidebar8, #sidebar9, #sidebar10, #sidebar11, #sidebar12").hide();
        if($("#request").text() == "Please select a department"){
            $("#request").text("Please select a building");
            $("#sidebar2").animate({width: 'toggle'}, 300);
            $("#s2, #eleven").addClass("selected");
            $("#s1, #s3, #ten, #twelve, #one, #s4, #two, #s5, #three, #s6, #four, #s7, #five, #s8, #six, #s9, #seven, #s10, #eight, #s11, #nine, #s12").removeClass("selected");
        }
        else if($("#request").text() == "Please select a building" &&  $("#sidebar2").css("display") != "none"){
            $("#sidebar2").animate({width: 'toggle'}, 300);
            $("#request").text("Please select a department");
            $("#s2, #eleven").removeClass("selected");
        }
        else if($("#request").text() == "Please select a building" && $("#sidebar2").css("display") == "none"){
            $("#sidebar2").animate({width: 'toggle'}, 300);
            $("#request").text("Please select a building");
            $("#s2, #eleven").addClass("selected");
            $("#s1, #s3, #ten, #twelve, #one, #s4, #two, #s5, #three, #s6, #four, #s7, #five, #s8, #six, #s9, #seven, #s10, #eight, #s11, #nine, #s12").removeClass("selected");
        }
        else if($("#request").text() == "Please select a room" && $("#sidebar2").css("display") != "none"){
            $("#sidebar2").animate({width: 'toggle'}, 300);
            $("#request").text("Please select a department");
            $("#s1, #s3, #s2, #eleven, #ten, #twelve").removeClass("selected");
        }
        else if($("#request").text() == "Please select a room" && $("#sidebar1").css("display") == "none"
            || $("#sidebar3").css("display") == "none" || $("#sidebar2").css("display") == "none"){
            $("#sidebar2").animate({width: 'toggle'}, 300);
            $("#request").text("Please select a building");
            $("#s2, #eleven").addClass("selected");
            $("#s1, #s3, #ten, #twelve, #one, #s4, #two, #s5, #three, #s6, #four, #s7, #five, #s8, #six, #s9, #seven, #s10, #eight, #s11, #nine, #s12").removeClass("selected");
        }
    })

    $("#twelve").click(function(){
        $("#sidebar2, #sidebar1, #sidebar4, #sidebar5, #sidebar6, #sidebar7, #sidebar8, #sidebar9, #sidebar10, #sidebar11, #sidebar12").hide();
        if($("#request").text() == "Please select a department"){
            $("#request").text("Please select a building");
            $("#sidebar3").animate({width: 'toggle'}, 300);
            $("#s3, #twelve").addClass("selected");
            $("#s1, #s2, #ten, #eleven, #one, #s4, #two, #s5, #three, #s6, #four, #s7, #five, #s8, #six, #s9, #seven, #s10, #eight, #s11, #nine, #s12").removeClass("selected");
        }
        else if($("#request").text() == "Please select a building" &&  $("#sidebar3").css("display") != "none"){
            $("#sidebar3").animate({width: 'toggle'}, 300);
            $("#request").text("Please select a department");
            $("#s3, #twelve").removeClass("selected");
        }
        else if($("#request").text() == "Please select a building" && $("#sidebar3").css("display") == "none"){
            $("#sidebar3").animate({width: 'toggle'}, 300);
            $("#request").text("Please select a building");
            $("#s3, #twelve").addClass("selected");
            $("#s1, #s2, #ten, #eleven, #one, #s4, #two, #s5, #three, #s6, #four, #s7, #five, #s8, #six, #s9, #seven, #s10, #eight, #s11, #nine, #s12").removeClass("selected");
        }
        else if($("#request").text() == "Please select a room" && $("#sidebar3").css("display") != "none"){
            $("#sidebar3").animate({width: 'toggle'}, 300);
            $("#request").text("Please select a department");
            $("#s1, #s3, #s2, #eleven, #ten, #twelve").removeClass("selected");
        }
        else if($("#request").text() == "Please select a room" && $("#sidebar1").css("display") == "none"
            || $("#sidebar2").css("display") == "none" || $("#sidebar3").css("display") == "none"){
            $("#sidebar3").animate({width: 'toggle'}, 300);
            $("#request").text("Please select a building");
            $("#s3, #twelve").addClass("selected");
            $("#s1, #s2, #ten, #eleven, #one, #s4, #two, #s5, #three, #s6, #four, #s7, #five, #s8, #six, #s9, #seven, #s10, #eight, #s11, #nine, #s12").removeClass("selected");
        }
    })



        //Department 1

    $("#one").click(function(){
        $("#sidebar5, #sidebar6, #sidebar7, #sidebar8, #sidebar9, #sidebar10, #sidebar11, #sidebar12").hide();
        if($("#request").text()== "Please select a building"){
            $("#sidebar4").animate({width: 'toggle'}, 300);
            $("#request").text("Please select a room");
            $("#one, #s4").addClass("selected");
            $("#two, #s5, #three, #s6, #s13, #thirteen, #s14, #fourteen, #s15, #fifteen, #s16, #sixteen, #s17, #seventeen, #s18, #eighteen, #s19, #nineteen, #s20, #twenty, #s21, #twentyone").removeClass("selected");
        }
        else if($("#sidebar4").css("display") != "none"){
            $("#sidebar4").animate({width: 'toggle'}, 300);
            $("#request").text("Please select a building");
            $("#one, #s4, #s13, #thirteen, #s14, #fourteen, #s15, #fifteen, #s16, #sixteen, #s17, #seventeen, #s18, #eighteen, #s19, #nineteen, #s20, #twenty, #s21, #twentyone").removeClass("selected");
        }
        else if($("#sidebar4").css("display") == "none" && $("#request").text("Please select a room")){
            $("#sidebar4").animate({width: 'toggle'}, 300);
            $("#request").text("Please select a room");
            $("#one, #s4").addClass("selected");
            $("#two, #s5, #three, #s6, #s13, #thirteen, #s14, #fourteen, #s15, #fifteen, #s16, #sixteen, #s17, #seventeen, #s18, #eighteen, #s19, #nineteen, #s20, #twenty, #s21, #twentyone").removeClass("selected");
        }
    })

    $("#two").click(function(){
        $("#sidebar4, #sidebar6, #sidebar7, #sidebar8, #sidebar9, #sidebar10, #sidebar11, #sidebar12").hide();
        if($("#request").text()== "Please select a building"){
            $("#sidebar5").animate({width: 'toggle'}, 300);
            $("#request").text("Please select a room");
            $("#two, #s5").addClass("selected");
            $("#one, #s4, #three, #s6, #s13, #thirteen, #s14, #fourteen, #s15, #fifteen, #s16, #sixteen, #s17, #seventeen, #s18, #eighteen, #s19, #nineteen, #s20, #twenty, #s21, #twentyone").removeClass("selected");
        }
        else if($("#sidebar5").css("display") != "none"){
            $("#sidebar5").animate({width: 'toggle'}, 300);
            $("#request").text("Please select a building");
            $("#two, #s5, #s13, #thirteen, #s14, #fourteen, #s15, #fifteen, #s16, #sixteen, #s17, #seventeen, #s18, #eighteen, #s19, #nineteen, #s20, #twenty, #s21, #twentyone").removeClass("selected");
        }
        else if($("#sidebar5").css("display") == "none" && $("#request").text("Please select a room")){
            $("#sidebar5").animate({width: 'toggle'}, 300);
            $("#request").text("Please select a room");
            $("#two, #s5").addClass("selected");
            $("#one, #s4, #three, #s6, #s13, #thirteen, #s14, #fourteen, #s15, #fifteen, #s16, #sixteen, #s17, #seventeen, #s18, #eighteen, #s19, #nineteen, #s20, #twenty, #s21, #twentyone").removeClass("selected");
        }
    })

    $("#three").click(function(){
        $("#sidebar4, #sidebar5, #sidebar7, #sidebar8, #sidebar9, #sidebar10, #sidebar11, #sidebar12").hide();
        if($("#request").text()== "Please select a building"){
            $("#sidebar6").animate({width: 'toggle'}, 300);
            $("#request").text("Please select a room");
            $("#three, #s6").addClass("selected");
            $("#one, #s4, #two, #s5, #s13, #thirteen, #s14, #fourteen, #s15, #fifteen, #s16, #sixteen, #s17, #seventeen, #s18, #eighteen, #s19, #nineteen, #s20, #twenty, #s21, #twentyone").removeClass("selected");
        }
        else if($("#sidebar6").css("display") != "none"){
            $("#sidebar6").animate({width: 'toggle'}, 300);
            $("#request").text("Please select a building");
            $("#three, #s6, #s13, #thirteen, #s14, #fourteen, #s15, #fifteen, #s16, #sixteen, #s17, #seventeen, #s18, #eighteen, #s19, #nineteen, #s20, #twenty, #s21, #twentyone").removeClass("selected");
        }
        else if($("#sidebar6").css("display") == "none" && $("#request").text("Please select a room")){
            $("#sidebar6").animate({width: 'toggle'}, 300);
            $("#request").text("Please select a room");
            $("#three, #s6").addClass("selected");
            $("#one, #s4, #two, #s5, #s13, #thirteen, #s14, #fourteen, #s15, #fifteen, #s16, #sixteen, #s17, #seventeen, #s18, #eighteen, #s19, #nineteen, #s20, #twenty, #s21, #twentyone").removeClass("selected");
        }
    })

    //Department 2

    $("#four").click(function(){
        $("#sidebar4, #sidebar5, #sidebar6, #sidebar8, #sidebar9, #sidebar10, #sidebar11, #sidebar12").hide();
        if($("#request").text()== "Please select a building"){
            $("#sidebar7").animate({width: 'toggle'}, 300);
            $("#request").text("Please select a room");
            $("#four, #s7").addClass("selected");
            $("#five, #s8, #six, #s9, #s22, #twentytwo, #s23, #twentythree, #s24, #twentyfour, #s25, #twentyfive, #s26, #twentysix, #s27, #twentyseven, #s28, #twentyeight, #s29, #twentynine, #s30, #thirty").removeClass("selected");
        }
        else if($("#sidebar7").css("display") != "none"){
            $("#sidebar7").animate({width: 'toggle'}, 300);
            $("#request").text("Please select a building");
            $("#four, #s7, #s22, #twentytwo, #s23, #twentythree, #s24, #twentyfour, #s25, #twentyfive, #s26, #twentysix, #s27, #twentyseven, #s28, #twentyeight, #s29, #twentynine, #s30, #thirty").removeClass("selected");
        }
        else if($("#sidebar7").css("display") == "none" && $("#request").text("Please select a room")){
            $("#sidebar7").animate({width: 'toggle'}, 300);
            $("#request").text("Please select a room");
            $("#four, #s7").addClass("selected");
            $("#five, #s8, #six, #s9, #s22, #twentytwo, #s23, #twentythree, #s24, #twentyfour, #s25, #twentyfive, #s26, #twentysix, #s27, #twentyseven, #s28, #twentyeight, #s29, #twentynine, #s30, #thirty").removeClass("selected");
        }
    })

    $("#five").click(function(){
        $("#sidebar4, #sidebar5, #sidebar6, #sidebar7, #sidebar9, #sidebar10, #sidebar11, #sidebar12").hide();
        if($("#request").text()== "Please select a building"){
            $("#sidebar8").animate({width: 'toggle'}, 300);
            $("#request").text("Please select a room");
            $("#five, #s8").addClass("selected");
            $("#four, #s7, #six, #s9, #s22, #twentytwo, #s23, #twentythree, #s24, #twentyfour, #s25, #twentyfive, #s26, #twentysix, #s27, #twentyseven, #s28, #twentyeight, #s29, #twentynine, #s30, #thirty").removeClass("selected");
        }
        else if($("#sidebar8").css("display") != "none"){
            $("#sidebar8").animate({width: 'toggle'}, 300);
            $("#request").text("Please select a building");
            $("#five, #s8, #s22, #twentytwo, #s23, #twentythree, #s24, #twentyfour, #s25, #twentyfive, #s26, #twentysix, #s27, #twentyseven, #s28, #twentyeight, #s29, #twentynine, #s30, #thirty").removeClass("selected");
        }
        else if($("#sidebar8").css("display") == "none" && $("#request").text("Please select a room")){
            $("#sidebar8").animate({width: 'toggle'}, 300);
            $("#request").text("Please select a room");
            $("#five, #s8").addClass("selected");
            $("#four, #s7, #six, #s9, #s22, #twentytwo, #s23, #twentythree, #s24, #twentyfour, #s25, #twentyfive, #s26, #twentysix, #s27, #twentyseven, #s28, #twentyeight, #s29, #twentynine, #s30, #thirty").removeClass("selected");
        }
    })

    $("#six").click(function(){
        $("#sidebar4, #sidebar5, #sidebar6, #sidebar7, #sidebar8, #sidebar10, #sidebar11, #sidebar12").hide();
        if($("#request").text()== "Please select a building"){
            $("#sidebar9").animate({width: 'toggle'}, 300);
            $("#request").text("Please select a room");
            $("#six, #s9").addClass("selected");
            $("#four, #s7, #five, #s8, #s22, #twentytwo, #s23, #twentythree, #s24, #twentyfour, #s25, #twentyfive, #s26, #twentysix, #s27, #twentyseven, #s28, #twentyeight, #s29, #twentynine, #s30, #thirty").removeClass("selected");
        }
        else if($("#sidebar9").css("display") != "none"){
            $("#sidebar9").animate({width: 'toggle'}, 300);
            $("#request").text("Please select a building");
            $("#six, #s9, #s22, #twentytwo, #s23, #twentythree, #s24, #twentyfour, #s25, #twentyfive, #s26, #twentysix, #s27, #twentyseven, #s28, #twentyeight, #s29, #twentynine, #s30, #thirty").removeClass("selected");
        }
        else if($("#sidebar9").css("display") == "none" && $("#request").text("Please select a room")){
            $("#sidebar9").animate({width: 'toggle'}, 300);
            $("#request").text("Please select a room");
            $("#six, #s9").addClass("selected");
            $("#four, #s7, #five, #s8, #s22, #twentytwo, #s23, #twentythree, #s24, #twentyfour, #s25, #twentyfive, #s26, #twentysix, #s27, #twentyseven, #s28, #twentyeight, #s29, #twentynine, #s30, #thirty").removeClass("selected");
        }
    })

    //Department 3

    $("#seven").click(function(){
        $("#sidebar4, #sidebar5, #sidebar6, #sidebar7, #sidebar8, #sidebar9, #sidebar11, #sidebar12").hide();
        if($("#request").text()== "Please select a building"){
            $("#sidebar10").animate({width: 'toggle'}, 300);
            $("#request").text("Please select a room");
            $("#seven, #s10").addClass("selected");
            $("#eight, #s11, #nine, #s12, #s31, #thirtyone, #s32, #thirtytwo, #s33, #thirtythree, #s34, #thirtyfour, #s35, #thirtyfive, #s36, #thirtysix, #s37, #thirtyseven, #s38, #thirtyeight, #s39, #thirtynine").removeClass("selected");
        }
        else if($("#sidebar10").css("display") != "none"){
            $("#sidebar10").animate({width: 'toggle'}, 300);
            $("#request").text("Please select a building");
            $("#seven, #s10, #s31, #thirtyone, #s32, #thirtytwo, #s33, #thirtythree, #s34, #thirtyfour, #s35, #thirtyfive, #s36, #thirtysix, #s37, #thirtyseven, #s38, #thirtyeight, #s39, #thirtynine").removeClass("selected");
        }
        else if($("#sidebar10").css("display") == "none" && $("#request").text("Please select a room")){
            $("#sidebar10").animate({width: 'toggle'}, 300);
            $("#request").text("Please select a room");
            $("#seven, #s10").addClass("selected");
            $("#eight, #s11, #nine, #s12, #s31, #thirtyone, #s32, #thirtytwo, #s33, #thirtythree, #s34, #thirtyfour, #s35, #thirtyfive, #s36, #thirtysix, #s37, #thirtyseven, #s38, #thirtyeight, #s39, #thirtynine").removeClass("selected");
        }
    })

    $("#eight").click(function(){
        $("#sidebar4, #sidebar5, #sidebar6, #sidebar7, #sidebar8, #sidebar9, #sidebar10, #sidebar12").hide();
        if($("#request").text()== "Please select a building"){
            $("#sidebar11").animate({width: 'toggle'}, 300);
            $("#request").text("Please select a room");
            $("#eight, #s11").addClass("selected");
            $("#seven, #s10, #nine, #s12, #s31, #thirtyone, #s32, #thirtytwo, #s33, #thirtythree, #s34, #thirtyfour, #s35, #thirtyfive, #s36, #thirtysix, #s37, #thirtyseven, #s38, #thirtyeight, #s39, #thirtynine").removeClass("selected");
        }
        else if($("#sidebar11").css("display") != "none"){
            $("#sidebar11").animate({width: 'toggle'}, 300);
            $("#request").text("Please select a building");
            $("#eight, #s11, #s31, #thirtyone, #s32, #thirtytwo, #s33, #thirtythree, #s34, #thirtyfour, #s35, #thirtyfive, #s36, #thirtysix, #s37, #thirtyseven, #s38, #thirtyeight, #s39, #thirtynine").removeClass("selected");
        }
        else if($("#sidebar11").css("display") == "none" && $("#request").text("Please select a room")){
            $("#sidebar11").animate({width: 'toggle'}, 300);
            $("#request").text("Please select a room");
            $("#eight, #s11").addClass("selected");
            $("#seven, #s10, #nine, #s12, #s31, #thirtyone, #s32, #thirtytwo, #s33, #thirtythree, #s34, #thirtyfour, #s35, #thirtyfive, #s36, #thirtysix, #s37, #thirtyseven, #s38, #thirtyeight, #s39, #thirtynine").removeClass("selected");
        }
    })

    $("#nine").click(function(){
        $("#sidebar4, #sidebar5, #sidebar6, #sidebar7, #sidebar8, #sidebar9, #sidebar10, #sidebar11").hide();
        if($("#request").text()== "Please select a building"){
            $("#sidebar12").animate({width: 'toggle'}, 300);
            $("#request").text("Please select a room");
            $("#nine, #s12").addClass("selected");
            $("#seven, #s10, #eight, #s11, #s31, #thirtyone, #s32, #thirtytwo, #s33, #thirtythree, #s34, #thirtyfour, #s35, #thirtyfive, #s36, #thirtysix, #s37, #thirtyseven, #s38, #thirtyeight, #s39, #thirtynine").removeClass("selected");
        }
        else if($("#sidebar12").css("display") != "none"){
            $("#sidebar12").animate({width: 'toggle'}, 300);
            $("#request").text("Please select a building");
            $("#nine, #s12, #s31, #thirtyone, #s32, #thirtytwo, #s33, #thirtythree, #s34, #thirtyfour, #s35, #thirtyfive, #s36, #thirtysix, #s37, #thirtyseven, #s38, #thirtyeight, #s39, #thirtynine").removeClass("selected");
        }
        else if($("#sidebar12").css("display") == "none" && $("#request").text("Please select a room")){
            $("#sidebar12").animate({width: 'toggle'}, 300);
            $("#request").text("Please select a room");
            $("#nine, #s12").addClass("selected");
            $("#seven, #s10, #eight, #s11, #s31, #thirtyone, #s32, #thirtytwo, #s33, #thirtythree, #s34, #thirtyfour, #s35, #thirtyfive, #s36, #thirtysix, #s37, #thirtyseven, #s38, #thirtyeight, #s39, #thirtynine").removeClass("selected");
        }
    })


    //Department1 - George Moore
    $("#thirteen").click(function(){
        $("#thirteen, #s13").addClass("selected");
        $("#fourteen, #s14, #fifteen, #s15").removeClass("selected");
        $("[id^=room]").hide();
        $("#room1").show();
        setTimeout(stopVideo, 100);
    });

    $("#fourteen").click(function(){
        $("#fourteen, #s14").addClass("selected")
        $("#fifteen, #s15, #thirteen, #s13").removeClass("selected");
        $("[id^=room]").hide();
        $("#room2").show();
        setTimeout(stopVideo, 100);
    });

    $("#fifteen").click(function(){
        $("#fifteen, #s15").addClass("selected")
        $("#fourteen, #s14, #thirteen, #s13").removeClass("selected");
        $("[id^=room]").hide();
        $("#room3").show();
        $(".video").attr("src", "http://www.youtube.com/embed/p6j8fuvQICI?feature=player_detailpage?hd=1");
    });

    //Department1 - Hamish Wood
    $("#sixteen").click(function(){
        $("#sixteen, #s16").addClass("selected")
        $("#seventeen, #s17, #eighteen, #s18").removeClass("selected");
        $("[id^=room]").hide();
        $("#room4").show();
        setTimeout(stopVideo, 100);
    });

    $("#seventeen").click(function(){
        $("#seventeen, #s17").addClass("selected")
        $("#sixteen, #s16, #eighteen, #s18").removeClass("selected");
        $("[id^=room]").hide();
        $("#room5").show();
        setTimeout(stopVideo, 100);
    });

    $("#eighteen").click(function(){
        $("#eighteen, #s18").addClass("selected")
        $("#sixteen, #s16, #seventeen, #s17").removeClass("selected");
        $("[id^=room]").hide();
        $("#room6").show();
        $(".video").attr("src", "http://www.youtube.com/embed/p6j8fuvQICI?feature=player_detailpage?hd=1");
    });

    //Department1 - Charles Oakley
    $("#nineteen").click(function(){
        $("#nineteen, #s19").addClass("selected")
        $("#twenty, #s20, #twentyone, #s21").removeClass("selected");
        $("[id^=room]").hide();
        $("#room7").show();
        setTimeout(stopVideo, 100);
    });

    $("#twenty").click(function(){
        $("#twenty, #s20").addClass("selected")
        $("#nineteen, #s19, #twentyone, #s21").removeClass("selected");
        $("[id^=room]").hide();
        $("#room8").show();
        setTimeout(stopVideo, 100);
    });

    $("#twentyone").click(function(){
        $("#twentyone, #s21").addClass("selected")
        $("#nineteen, #s19, #twenty, #s20").removeClass("selected");
        $("[id^=room]").hide();
        $("#room9").show();
        setTimeout(stopVideo, 100);
    });


    //Department 2 - George Moore
    $("#twentytwo").click(function(){
        $("#twentytwo, #s22").addClass("selected")
        $("#twentythree, #s23, #twentyfour, #s24").removeClass("selected");
        $("[id^=room]").hide();
        $("#room10").show();
        setTimeout(stopVideo, 100);
    });

    $("#twentythree").click(function(){
        $("#twentythree, #s23").addClass("selected")
        $("#twentytwo, #s22, #twentyfour, #s24").removeClass("selected");
        $("[id^=room]").hide();
        $("#room11").show();
        setTimeout(stopVideo, 100);
    });

    $("#twentyfour").click(function(){
        $("#twentyfour, #s24").addClass("selected")
        $("#twentytwo, #s22, #twentythree, #s23").removeClass("selected");
        $("[id^=room]").hide();
        $("#room12").show();
        setTimeout(stopVideo, 100);
    });

    //Department 2 - Hamish Wood
    $("#twentyfive").click(function(){
        $("#twentyfive, #s25").addClass("selected")
        $("#twentysix, #s26, #twentyseven, #s27").removeClass("selected");
        $("[id^=room]").hide();
        $("#room13").show();
        setTimeout(stopVideo, 100);
    });

    $("#twentysix").click(function(){
        $("#twentysix, #s26").addClass("selected")
        $("#twentyfive, #s25, #twentyseven, #s27").removeClass("selected");
        $("[id^=room]").hide();
        $("#room14").show();
        setTimeout(stopVideo, 100);
    });

    $("#twentyseven").click(function(){
        $("#twentyseven, #s27").addClass("selected")
        $("#twentysix, #s26, #twentyfive, #s25").removeClass("selected");
        $("[id^=room]").hide();
        $("#room15").show();
        setTimeout(stopVideo, 100);
    });

    //Department 2 - Charles Oakley
    $("#twentyeight").click(function(){
        $("#twentyeight, #s28").addClass("selected")
        $("#twentynine, #s29, #thirty, #s30").removeClass("selected");
        $("[id^=room]").hide();
        $("#room16").show();
        setTimeout(stopVideo, 100);
    });

    $("#twentynine").click(function(){
        $("#twentynine, #s29").addClass("selected")
        $("#twentyeight, #s28, #thirty, #s30").removeClass("selected");
        $("[id^=room]").hide();
        $("#room17").show();
        setTimeout(stopVideo, 100);
    });

    $("#thirty").click(function(){
        $("#thirty, #s30").addClass("selected")
        $("#twentynine, #s29, #twentyeight, #s28").removeClass("selected");
        $("[id^=room]").hide();
        $("#room18").show();
        setTimeout(stopVideo, 100);
    });

    //Department 3 - George Moore
    $("#thirtyone").click(function(){
        $("#thirtyone, #s31").addClass("selected")
        $("#thirtytwo, #s32, #thirtythree, #s33").removeClass("selected");
        $("[id^=room]").hide();
        $("#room19").show();
        setTimeout(stopVideo, 100);
    });

    $("#thirtytwo").click(function(){
        $("#thirtytwo, #s32").addClass("selected")
        $("#thirtyone, #s31, #thirtythree, #s33").removeClass("selected");
        $("[id^=room]").hide();
        $("#room20").show();
        setTimeout(stopVideo, 100);
    });

    $("#thirtythree").click(function(){
        $("#thirtytree, #s33").addClass("selected")
        $("#thirtyone, #s31, #thirtytwo, #s32").removeClass("selected");
        $("[id^=room]").hide();
        $("#room21").show();
        $(".video").attr("src", "http://www.youtube.com/embed/p6j8fuvQICI?feature=player_detailpage?hd=1");
    });

    //Department 3 - Hamish Wood
    $("#thirtyfour").click(function(){
        $("#thirtyfour, #s34").addClass("selected")
        $("#thirtyfive, #s35, #thirtysix, #s36").removeClass("selected");
        $("[id^=room]").hide();
        $("#room22").show();
        setTimeout(stopVideo, 100);
    });

    $("#thirtyfive").click(function(){
        $("#thirtyfive, #s35").addClass("selected")
        $("#thirtyfour, #s34, #thirtysix, #s36").removeClass("selected");
        $("[id^=room]").hide();
        $("#room23").show();
        setTimeout(stopVideo, 100);
    });

    $("#thirtysix").click(function(){
        $("#thirtysix, #s36").addClass("selected")
        $("#thirtyfive, #s35, #thirtyfour, #s34").removeClass("selected");
        $("[id^=room]").hide();
        $("#room24").show();
        setTimeout(stopVideo, 100);
    });

    //Department 3 - Charles Oakley
    $("#thirtyseven").click(function(){
        $("#thirtyseven, #s37").addClass("selected")
        $("#thirtyeight, #s38, #thirtynine, #s39").removeClass("selected");
        $("[id^=room]").hide();
        $("#room25").show();
        setTimeout(stopVideo, 100);
    });

    $("#thirtyeight").click(function(){
        $("#thirtyeight, #s38").addClass("selected")
        $("#thirtyseven, #s37, #thirtynine, #s39").removeClass("selected");
        $("[id^=room]").hide();
        $("#room26").show();
        setTimeout(stopVideo, 100);
    });

    $("#thirtynine").click(function(){
        $("#thirtynine, #s39").addClass("selected")
        $("#thirtyseven, #s37, #thirtyeight, #s38").removeClass("selected");
        $("[id^=room]").hide();
        $("#room27").show();
        setTimeout(stopVideo, 100);
    });


    $('input').keypress(function(e) {
        if(e.which == 13) {
            jQuery(this).blur();
            jQuery('#submit').focus().click();
        }
    });
});