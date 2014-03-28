function ShowAns(id){
    var answer = document.getElementById(id);
    if(answer.style.display == 'table-row'){
        answer.style.display = 'none';
    }

    else{
        answer.style.display = 'table-row';
    }
}
