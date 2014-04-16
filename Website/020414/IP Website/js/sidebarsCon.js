$(document).ready(function(){

    /* Subject selection */
    $("#one").click(function(){
        $("#sidebar2, #sidebar3, #sidebar4, #sidebar5, #sidebar6, #sidebar7").hide();
        if($("#request").text() == "Please select a subject group"){
            $("#sidebar1").animate({width: 'toggle'}, 300);
            $("#cese, #cs, #cnse, #dmd, #ee, #se").hide();
            $("#maths").show();
            $("hr").show();
            $("#request").text("Please select a person to view their details");
            $("#s1, #one").addClass("selected");
            $("[id^=contact]").hide();
            $("#s13, #s2, #thirteen, #two, #s3, #three, #four, #s4, #five, #s5, #six, #s6, #seven, #s7, #eight, #s8, #nine, #s9, #ten, #s10, #eleven, #s11, #twelve, #s12, #s14, #fourteen, #s15, #fifteen, #s16, #sixteen, #s17, #seventeen, #s18, #eighteen, #s19, #nineteen, #s20, #twenty, #s21, #twentyone, #s22, #twentytwo, #s23, #twentythree, #s24, #twentyfour, #s25, #twentyfive, #s26, #twentysix, #s27, #twentyseven, #s28, #twentyeight").removeClass("selected");
        }
        else if($("#request").text() == "Please select a person to view their details" &&  $("#sidebar1").css("display") != "none"){
            $("#sidebar1").animate({width: 'toggle'}, 300);
            $("#request").text("Please select a subject group");
            $("#maths").show();
            $("hr").show();
            $("#s13, #s2, #thirteen, #two, #s3, #three, #four, #s4, #five, #s5, #six, #s6, #seven, #s7, #eight, #s8, #nine, #s9, #ten, #s10, #eleven, #s11, #twelve, #s12, #s14, #fourteen, #s15, #fifteen, #s16, #sixteen, #s17, #seventeen, #s18, #eighteen, #s19, #nineteen, #s20, #twenty, #s21, #twentyone, #s22, #twentytwo, #s23, #twentythree, #s24, #twentyfour, #s25, #twentyfive, #s26, #twentysix, #s27, #twentyseven, #s28, #twentyeight").removeClass("selected");
        }
        else if($("#request").text() == "Please select a person to view their details" && $("#sidebar1").css("display") == "none"){
            $("#sidebar1").animate({width: 'toggle'}, 300);
            $("#request").text("Please select a person to view their details");
            $("#s1, #one").addClass("selected");
            $("#cese, #cs, #cnse, #dmd, #ee, #se").hide();
            $("#maths").show();
            $("hr").show();
            $("[id^=contact]").hide();
            $("#s13, #s2, #thirteen, #two, #s3, #three, #four, #s4, #five, #s5, #six, #s6, #seven, #s7, #eight, #s8, #nine, #s9, #ten, #s10, #eleven, #s11, #twelve, #s12, #s14, #fourteen, #s15, #fifteen, #s16, #sixteen, #s17, #seventeen, #s18, #eighteen, #s19, #nineteen, #s20, #twenty, #s21, #twentyone, #s22, #twentytwo, #s23, #twentythree, #s24, #twentyfour, #s25, #twentyfive, #s26, #twentysix, #s27, #twentyseven, #s28, #twentyeight").removeClass("selected");
        }



    })

    $("#two").click(function(){
        $("#sidebar1, #sidebar3, #sidebar4, #sidebar5, #sidebar6, #sidebar7").hide();
        if($("#request").text() == "Please select a subject group"){
            $("#request").text("Please select a person to view their details");
            $("#sidebar2").animate({width: 'toggle'}, 300);
            $("#s2, #two").addClass("selected");
            $("#cs, #maths, #cnse, #dmd, #ee, #se").hide();
            $("#cese").show();
            $("hr").show();
            $("[id^=contact]").hide();
            $("#s13, #s1, #thirteen, #one, #s3, #three, #four, #s4, #five, #s5, #six, #s6, #seven, #s7, #eight, #s8, #nine, #s9, #ten, #s10, #eleven, #s11, #twelve, #s12, #s14, #fourteen, #s15, #fifteen, #s16, #sixteen, #s17, #seventeen, #s18, #eighteen, #s19, #nineteen, #s20, #twenty, #s21, #twentyone, #s22, #twentytwo, #s23, #twentythree, #s24, #twentyfour, #s25, #twentyfive, #s26, #twentysix, #s27, #twentyseven, #s28, #twentyeight").removeClass("selected");
        }
        else if($("#request").text() == "Please select a person to view their details" &&  $("#sidebar2").css("display") != "none"){
            $("#sidebar2").animate({width: 'toggle'}, 300);
            $("#request").text("Please select a subject group");
            $("#cese").show();
            $("hr").show();
            $("#s13, #s1, #thirteen, #one, #s3, #three, #four, #s4, #five, #s5, #six, #s6, #seven, #s7, #eight, #s8, #nine, #s9, #ten, #s10, #eleven, #s11, #twelve, #s12, #s14, #fourteen, #s15, #fifteen, #s16, #sixteen, #s17, #seventeen, #s18, #eighteen, #s19, #nineteen, #s20, #twenty, #s21, #twentyone, #s22, #twentytwo, #s23, #twentythree, #s24, #twentyfour, #s25, #twentyfive, #s26, #twentysix, #s27, #twentyseven, #s28, #twentyeight").removeClass("selected");
        }
        else if($("#request").text() == "Please select a person to view their details" && $("#sidebar2").css("display") == "none"){
            $("#sidebar2").animate({width: 'toggle'}, 300);
            $("#request").text("Please select a person to view their details");
            $("#s2, #two").addClass("selected");
            $("#cs, #maths, #cnse, #dmd, #ee, #se").hide();
            $("#cese").show();
            $("hr").show();
            $("[id^=contact]").hide();
            $("#s13, #s1, #thirteen, #one, #s3, #three, #four, #s4, #five, #s5, #six, #s6, #seven, #s7, #eight, #s8, #nine, #s9, #ten, #s10, #eleven, #s11, #twelve, #s12, #s14, #fourteen, #s15, #fifteen, #s16, #sixteen, #s17, #seventeen, #s18, #eighteen, #s19, #nineteen, #s20, #twenty, #s21, #twentyone, #s22, #twentytwo, #s23, #twentythree, #s24, #twentyfour, #s25, #twentyfive, #s26, #twentysix, #s27, #twentyseven, #s28, #twentyeight").removeClass("selected");
        }

    })

    $("#three").click(function(){
        $("#sidebar2, #sidebar1, #sidebar4, #sidebar5, #sidebar6, #sidebar7").hide();
        if($("#request").text() == "Please select a subject group"){
            $("#request").text("Please select a person to view their details");
            $("#sidebar3").animate({width: 'toggle'}, 300);
            $("#s3, #three").addClass("selected");
            $("#cese, #maths, #cs, #dmd, #ee, #se").hide();
            $("#cnse").show();
            $("hr").show();
            $("[id^=contact]").hide();
            $("#s13, #s1, #thirteen, #one, #s2, #two, #four, #s4, #five, #s5, #six, #s6, #seven, #s7, #eight, #s8, #nine, #s9, #ten, #s10, #eleven, #s11, #twelve, #s12, #s14, #fourteen, #s15, #fifteen, #s16, #sixteen, #s17, #seventeen, #s18, #eighteen, #s19, #nineteen, #s20, #twenty, #s21, #twentyone, #s22, #twentytwo, #s23, #twentythree, #s24, #twentyfour, #s25, #twentyfive, #s26, #twentysix, #s27, #twentyseven, #s28, #twentyeight").removeClass("selected");
        }
        else if($("#request").text() == "Please select a person to view their details" &&  $("#sidebar3").css("display") != "none"){
            $("#sidebar3").animate({width: 'toggle'}, 300);
            $("#request").text("Please select a subject group");
            $("#cnse").show();
            $("hr").show();
            $("#s13, #s1, #thirteen, #one, #s2, #two, #four, #s4, #five, #s5, #six, #s6, #seven, #s7, #eight, #s8, #nine, #s9, #ten, #s10, #eleven, #s11, #twelve, #s12, #s14, #fourteen, #s15, #fifteen, #s16, #sixteen, #s17, #seventeen, #s18, #eighteen, #s19, #nineteen, #s20, #twenty, #s21, #twentyone, #s22, #twentytwo, #s23, #twentythree, #s24, #twentyfour, #s25, #twentyfive, #s26, #twentysix, #s27, #twentyseven, #s28, #twentyeight").removeClass("selected");
        }
        else if($("#request").text() == "Please select a person to view their details" && $("#sidebar3").css("display") == "none"){
            $("#sidebar3").animate({width: 'toggle'}, 300);
            $("#request").text("Please select a person to view their details");
            $("#s3, #three").addClass("selected");
            $("#cese, #maths, #cs, #dmd, #ee, #se").hide();
            $("#cnse").show();
            $("hr").show();
            $("[id^=contact]").hide();
            $("#s13, #s1, #thirteen, #one, #s2, #two, #four, #s4, #five, #s5, #six, #s6, #seven, #s7, #eight, #s8, #nine, #s9, #ten, #s10, #eleven, #s11, #twelve, #s12, #s14, #fourteen, #s15, #fifteen, #s16, #sixteen, #s17, #seventeen, #s18, #eighteen, #s19, #nineteen, #s20, #twenty, #s21, #twentyone, #s22, #twentytwo, #s23, #twentythree, #s24, #twentyfour, #s25, #twentyfive, #s26, #twentysix, #s27, #twentyseven, #s28, #twentyeight").removeClass("selected");
        }

    })

    $("#thirteen").click(function(){
        $("#sidebar2, #sidebar1, #sidebar3, #sidebar5, #sidebar6, #sidebar7").hide();
        if($("#request").text() == "Please select a subject group"){
            $("#request").text("Please select a person to view their details");
            $("#sidebar4").animate({width: 'toggle'}, 300);
            $("#s13, #thirteen").addClass("selected");
            $("#cese, #maths, #cnse, #dmd, #ee, #se").hide();
            $("#cs").show();
            $("hr").show();
            $("[id^=contact]").hide();
            $("#s1, #s2, #one, #two, #s3, #three, #four, #s4, #five, #s5, #six, #s6, #seven, #s7, #eight, #s8, #nine, #s9, #ten, #s10, #eleven, #s11, #twelve, #s12, #s14, #fourteen, #s15, #fifteen, #s16, #sixteen, #s17, #seventeen, #s18, #eighteen, #s19, #nineteen, #s20, #twenty, #s21, #twentyone, #s22, #twentytwo, #s23, #twentythree, #s24, #twentyfour, #s25, #twentyfive, #s26, #twentysix, #s27, #twentyseven, #s28, #twentyeight").removeClass("selected");
        }
        else if($("#request").text() == "Please select a person to view their details" &&  $("#sidebar4").css("display") != "none"){
            $("#sidebar4").animate({width: 'toggle'}, 300);
            $("#request").text("Please select a subject group");
            $("#cs").show();
            $("hr").show();
            $("#s1, #s2, #one, #two, #s3, #three, #four, #s4, #five, #s5, #six, #s6, #seven, #s7, #eight, #s8, #nine, #s9, #ten, #s10, #eleven, #s11, #twelve, #s12, #s14, #fourteen, #s15, #fifteen, #s16, #sixteen, #s17, #seventeen, #s18, #eighteen, #s19, #nineteen, #s20, #twenty, #s21, #twentyone, #s22, #twentytwo, #s23, #twentythree, #s24, #twentyfour, #s25, #twentyfive, #s26, #twentysix, #s27, #twentyseven, #s28, #twentyeight").removeClass("selected");
        }
        else if($("#request").text() == "Please select a person to view their details" && $("#sidebar4").css("display") == "none"){
            $("#sidebar4").animate({width: 'toggle'}, 300);
            $("#request").text("Please select a person to view their details");
            $("#s13, #thirteen").addClass("selected");
            $("#cese, #maths, #cnse, #dmd, #ee, #se").hide();
            $("#cs").show();
            $("hr").show();
            $("[id^=contact]").hide();
            $("#s1, #s2, #one, #two, #s3, #three, #four, #s4, #five, #s5, #six, #s6, #seven, #s7, #eight, #s8, #nine, #s9, #ten, #s10, #eleven, #s11, #twelve, #s12, #s14, #fourteen, #s15, #fifteen, #s16, #sixteen, #s17, #seventeen, #s18, #eighteen, #s19, #nineteen, #s20, #twenty, #s21, #twentyone, #s22, #twentytwo, #s23, #twentythree, #s24, #twentyfour, #s25, #twentyfive, #s26, #twentysix, #s27, #twentyseven, #s28, #twentyeight").removeClass("selected");
        }
    })

        $("#fourteen").click(function(){
            $("#sidebar2, #sidebar1, #sidebar3, #sidebar4, #sidebar6, #sidebar7").hide();
            if($("#request").text() == "Please select a subject group"){
                $("#request").text("Please select a person to view their details");
                $("#sidebar5").animate({width: 'toggle'}, 300);
                $("#s14, #fourteen").addClass("selected");
                $("#cese, #maths, #cnse, #cs, #ee, #se").hide();
                $("#dmd").show();
                $("hr").show();
                $("[id^=contact]").hide();
                $("#s1, #s2, #one, #two, #s3, #three, #four, #s4, #five, #s5, #six, #s6, #seven, #s7, #eight, #s8, #nine, #s9, #ten, #s10, #eleven, #s11, #twelve, #s12, #s13, #thirteen, #s15, #fifteen, #s16, #sixteen, #s17, #seventeen, #s18, #eighteen, #s19, #nineteen, #s20, #twenty, #s21, #twentyone, #s22, #twentytwo, #s23, #twentythree, #s24, #twentyfour, #s25, #twentyfive, #s26, #twentysix, #s27, #twentyseven, #s28, #twentyeight").removeClass("selected");
            }
            else if($("#request").text() == "Please select a person to view their details" &&  $("#sidebar5").css("display") != "none"){
                $("#sidebar5").animate({width: 'toggle'}, 300);
                $("#request").text("Please select a subject group");
                $("#dmd").show();
                $("hr").show();
                $("#s1, #s2, #one, #two, #s3, #three, #four, #s4, #five, #s5, #six, #s6, #seven, #s7, #eight, #s8, #nine, #s9, #ten, #s10, #eleven, #s11, #twelve, #s12, #s13, #thirteen, #s15, #fifteen, #s16, #sixteen, #s17, #seventeen, #s18, #eighteen, #s19, #nineteen, #s20, #twenty, #s21, #twentyone, #s22, #twentytwo, #s23, #twentythree, #s24, #twentyfour, #s25, #twentyfive, #s26, #twentysix, #s27, #twentyseven, #s28, #twentyeight").removeClass("selected");
            }
            else if($("#request").text() == "Please select a person to view their details" && $("#sidebar5").css("display") == "none"){
                $("#sidebar5").animate({width: 'toggle'}, 300);
                $("#request").text("Please select a person to view their details");
                $("#s14, #fourteen").addClass("selected");
                $("#cese, #maths, #cnse, #cs, #ee, #se").hide();
                $("#dmd").show();
                $("hr").show();
                $("[id^=contact]").hide();
                $("#s1, #s2, #one, #two, #s3, #three, #four, #s4, #five, #s5, #six, #s6, #seven, #s7, #eight, #s8, #nine, #s9, #ten, #s10, #eleven, #s11, #twelve, #s12, #s13, #thirteen, #s15, #fifteen, #s16, #sixteen, #s17, #seventeen, #s18, #eighteen, #s19, #nineteen, #s20, #twenty, #s21, #twentyone, #s22, #twentytwo, #s23, #twentythree, #s24, #twentyfour, #s25, #twentyfive, #s26, #twentysix, #s27, #twentyseven, #s28, #twentyeight").removeClass("selected");
            }
        })


            $("#fifteen").click(function(){
                $("#sidebar2, #sidebar1, #sidebar3, #sidebar5, #sidebar4, #sidebar7").hide();
                if($("#request").text() == "Please select a subject group"){
                    $("#request").text("Please select a person to view their details");
                    $("#sidebar6").animate({width: 'toggle'}, 300);
                    $("#s15, #fifteen").addClass("selected");
                    $("#cese, #maths, #cnse, #dmd, #cs, #se").hide();
                    $("#ee").show();
                    $("hr").show();
                    $("[id^=contact]").hide();
                    $("#s1, #s2, #one, #two, #s3, #three, #four, #s4, #five, #s5, #six, #s6, #seven, #s7, #eight, #s8, #nine, #s9, #ten, #s10, #eleven, #s11, #twelve, #s12, #s14, #fourteen, #s13, #thirteen, #s16, #sixteen, #s17, #seventeen, #s18, #eighteen, #s19, #nineteen, #s20, #twenty, #s21, #twentyone, #s22, #twentytwo, #s23, #twentythree, #s24, #twentyfour, #s25, #twentyfive, #s26, #twentysix, #s27, #twentyseven, #s28, #twentyeight").removeClass("selected");
                }
                else if($("#request").text() == "Please select a person to view their details" &&  $("#sidebar6").css("display") != "none"){
                    $("#sidebar6").animate({width: 'toggle'}, 300);
                    $("#request").text("Please select a subject group");
                    $("#ee").show();
                    $("hr").show();
                    $("#s1, #s2, #one, #two, #s3, #three, #four, #s4, #five, #s5, #six, #s6, #seven, #s7, #eight, #s8, #nine, #s9, #ten, #s10, #eleven, #s11, #twelve, #s12, #s14, #fourteen, #s13, #thirteen, #s16, #sixteen, #s17, #seventeen, #s18, #eighteen, #s19, #nineteen, #s20, #twenty, #s21, #twentyone, #s22, #twentytwo, #s23, #twentythree, #s24, #twentyfour, #s25, #twentyfive, #s26, #twentysix, #s27, #twentyseven, #s28, #twentyeight").removeClass("selected");
                }
                else if($("#request").text() == "Please select a person to view their details" && $("#sidebar6").css("display") == "none"){
                    $("#sidebar6").animate({width: 'toggle'}, 300);
                    $("#request").text("Please select a person to view their details");
                    $("#s15, #fifteen").addClass("selected");
                    $("#cese, #maths, #cnse, #dmd, #cs, #se").hide();
                    $("#ee").show();
                    $("hr").show();
                    $("[id^=contact]").hide();
                    $("#s1, #s2, #one, #two, #s3, #three, #four, #s4, #five, #s5, #six, #s6, #seven, #s7, #eight, #s8, #nine, #s9, #ten, #s10, #eleven, #s11, #twelve, #s12, #s14, #fourteen, #s13, #thirteen, #s16, #sixteen, #s17, #seventeen, #s18, #eighteen, #s19, #nineteen, #s20, #twenty, #s21, #twentyone, #s22, #twentytwo, #s23, #twentythree, #s24, #twentyfour, #s25, #twentyfive, #s26, #twentysix, #s27, #twentyseven, #s28, #twentyeight").removeClass("selected");
                }
            })


                $("#sixteen").click(function(){
                    $("#sidebar2, #sidebar1, #sidebar3, #sidebar5, #sidebar6, #sidebar4").hide();
                    if($("#request").text() == "Please select a subject group"){
                        $("#request").text("Please select a person to view their details");
                        $("#sidebar7").animate({width: 'toggle'}, 300);
                        $("#s16, #sixteen").addClass("selected");
                        $("#cese, #maths, #cnse, #dmd, #ee, #cs").hide();
                        $("#se").show();
                        $("hr").show();
                        $("[id^=contact]").hide();
                        $("#s1, #s2, #one, #two, #s3, #three, #four, #s4, #five, #s5, #six, #s6, #seven, #s7, #eight, #s8, #nine, #s9, #ten, #s10, #eleven, #s11, #twelve, #s12, #s14, #fourteen, #s15, #fifteen, #s13, #thirteen, #s17, #seventeen, #s18, #eighteen, #s19, #nineteen, #s20, #twenty, #s21, #twentyone, #s22, #twentytwo, #s23, #twentythree, #s24, #twentyfour, #s25, #twentyfive, #s26, #twentysix, #s27, #twentyseven, #s28, #twentyeight").removeClass("selected");
                    }
                    else if($("#request").text() == "Please select a person to view their details" &&  $("#sidebar7").css("display") != "none"){
                        $("#sidebar7").animate({width: 'toggle'}, 300);
                        $("#request").text("Please select a subject group");
                        $("#se").show();
                        $("hr").show();
                        $("#s1, #s2, #one, #two, #s3, #three, #four, #s4, #five, #s5, #six, #s6, #seven, #s7, #eight, #s8, #nine, #s9, #ten, #s10, #eleven, #s11, #twelve, #s12, #s14, #fourteen, #s15, #fifteen, #s13, #thirteen, #s17, #seventeen, #s18, #eighteen, #s19, #nineteen, #s20, #twenty, #s21, #twentyone, #s22, #twentytwo, #s23, #twentythree, #s24, #twentyfour, #s25, #twentyfive, #s26, #twentysix, #s27, #twentyseven, #s28, #twentyeight").removeClass("selected");
                    }
                    else if($("#request").text() == "Please select a person to view their details" && $("#sidebar7").css("display") == "none"){
                        $("#sidebar7").animate({width: 'toggle'}, 300);
                        $("#request").text("Please select a person to view their details");
                        $("#s16, #sixteen").addClass("selected");
                        $("#cese, #maths, #cnse, #dmd, #ee, #cs").hide();
                        $("#se").show();
                        $("hr").show();
                        $("[id^=contact]").hide();
                        $("#s1, #s2, #one, #two, #s3, #three, #four, #s4, #five, #s5, #six, #s6, #seven, #s7, #eight, #s8, #nine, #s9, #ten, #s10, #eleven, #s11, #twelve, #s12, #s14, #fourteen, #s15, #fifteen, #s13, #thirteen, #s17, #seventeen, #s18, #eighteen, #s19, #nineteen, #s20, #twenty, #s21, #twentyone, #s22, #twentytwo, #s23, #twentythree, #s24, #twentyfour, #s25, #twentyfive, #s26, #twentysix, #s27, #twentyseven, #s28, #twentyeight").removeClass("selected");
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

    $("#seventeen").click(function(){
        $("#seventeen, #s17").addClass("selected")
        $("#eighteen, #s18, #nineteen, #s19").removeClass("selected");
        $("[id^=contact]").hide();
        $("#contact10").show();
    });

    $("#eighteen").click(function(){
        $("#eighteen, #s18").addClass("selected")
        $("#seventeen, #s17, #nineteen, #s19").removeClass("selected");
        $("[id^=contact]").hide();
        $("#contact11").show();
    });

    $("#nineteen").click(function(){
        $("#nineteen, #s19").addClass("selected")
        $("#eighteen, #s18, #seventeen, #s17").removeClass("selected");
        $("[id^=contact]").hide();
        $("#contact12").show();
    });

    $("#twenty").click(function(){
        $("#twenty, #s20").addClass("selected")
        $("#twentyone, #s21, #twentytwo, #s22").removeClass("selected");
        $("[id^=contact]").hide();
        $("#contact13").show();
    });

    $("#twentyone").click(function(){
        $("#twentyone, #s21").addClass("selected")
        $("#twenty, #s20, #twentytwo, #s22").removeClass("selected");
        $("[id^=contact]").hide();
        $("#contact14").show();
    });

    $("#twentytwo").click(function(){
        $("#twentytwo, #s22").addClass("selected")
        $("#twenty, #s20, #twentyone, #s21").removeClass("selected");
        $("[id^=contact]").hide();
        $("#contact15").show();
    });

    $("#twentythree").click(function(){
        $("#twentythree, #s23").addClass("selected")
        $("#twentyfour, #s24, #twentyfive, #s25").removeClass("selected");
        $("[id^=contact]").hide();
        $("#contact16").show();
    });

    $("#twentyfour").click(function(){
        $("#twentyfour, #s24").addClass("selected")
        $("#twentythree, #s23, #twentyfive, #s25").removeClass("selected");
        $("[id^=contact]").hide();
        $("#contact17").show();
    });

    $("#twentyfive").click(function(){
        $("#twentyfive, #s25").addClass("selected")
        $("#twentyfour, #s24, #twentythree, #s23").removeClass("selected");
        $("[id^=contact]").hide();
        $("#contact18").show();
    });

    $("#twentysix").click(function(){
        $("#twentysix, #s26").addClass("selected")
        $("#twentyseven, #s27, #twentyeight, #s28").removeClass("selected");
        $("[id^=contact]").hide();
        $("#contact19").show();
    });

    $("#twentyseven").click(function(){
        $("#twentyseven, #s27").addClass("selected")
        $("#twentysix, #s26, #twentyeight, #s28").removeClass("selected");
        $("[id^=contact]").hide();
        $("#contact20").show();
    });

    $("#twentyeight").click(function(){
        $("#twentyeight, #s28").addClass("selected")
        $("#twentysix, #s26, #twentyseven, #s27").removeClass("selected");
        $("[id^=contact]").hide();
        $("#contact21").show();
    });

});