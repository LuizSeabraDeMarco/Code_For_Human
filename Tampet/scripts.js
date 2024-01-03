function clickMenu() {
    var filtro = document.getElementById("menu");
    var header = document.getElementById("header")
    if (filtro.style.display == "inline-block" || header.style.height == "31vh"){
        header.style.height = "7vh";
        filtro.style.display = "none";

    }else{
        header.style.height = "31vh";
        filtro.style.display = "inline-block"
    }
    }
