$(document).ready(function(){
    $("[id^=info]").css("display", "none")
});


function ShowInfo(id){
    var info = document.getElementById(id);
    if(info.style.display != 'none'){
    info.style.display = 'none';
    }

    else{
        info.style.display = '';
    }
}

function change( el )
{
    if ( el.innerHTML === "Show" )
        el.innerHTML = "Hide";
    else
        el.innerHTML = "Show";
}
