count = 0;
count1 = 0;
$(document).ready(function(){

    function stopVideo() {
        $(".video").attr("src","");
    }

    $(".leftB").click(function(){
        count++;
        if(count <= 0){
        $(".images").animate({left: "+=550px"}, 1000);
            count1--;
            $(".rightB").attr("disabled", false);
            $(".rightB").css("cursor", "pointer");
            $(".rightB").show();
        }

        if(count >= 0){
        $(".leftB").attr("disabled", "disabled");
        $(".leftB").css("cursor", "default");
        $(".leftB").hide();
        $(".video").attr("src", "http://www.youtube.com/embed/p6j8fuvQICI?feature=player_detailpage?hd=1");
    }
    });


    $(".rightB").click(function(){
        count1++;
        if(count1 <= 2){
            $(".images").animate({left: "-=550px"}, 1000);
            count--;
            $(".leftB").attr("disabled", false);
            $(".leftB").css("cursor", "pointer");
            $(".leftB").show();
            setTimeout(stopVideo, 800);
        }

        if(count1 >= 2){
            $(".rightB").attr("disabled", "disabled");
            $(".rightB").css("cursor", "default");
            $(".rightB").hide();
        }

    });
});