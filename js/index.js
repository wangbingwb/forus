$(function(){
    if(!IsPC()){
        var node = document.getElementsByClassName("pc");
        if(node.length == 1){
            node[0].className = "mo";
        }
    }

    $(".mo #header .nav").on("click",function(){
        $(this).find("ul").toggle("show");
    })

    $(".mo #header .nav ul li").on("click",function(){
        console.log($(this).find("a").text())
        return true;
    })
})