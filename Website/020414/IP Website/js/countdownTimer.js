$(document).ready(function(){
    var sec = $('#holderBox span').text()

    var timer = setInterval(function() {
        $('#holderBox span').text(--sec);
        if (sec == 0) {
            window.location.href = "Index.html";
        }
    }, 1000)
});
