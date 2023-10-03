$(document).ready(function(){
    $(".so").on({
        mouseenter: function(){
            $(this).css("width", "80px", "height", "80px");
        },
        mouseleave: function(){
            $(this).css("width", "50px", "height", "50px");
        },
    });
})

function loadRepo(){
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            results = JSON.parse(this.responseText)
            ;
            document.getElementById("repo1")
            .innerHTML = results[0].name;
        }
    }
    xhttp.open("GET", "https://api.github.com/users/KristopherKing/repos", true);
    xhttp.send();
}
