var button=document.getElementById("getStarted");
    button.addEventListener("click", function () {
        window.location.href="signup.html"; }   );
    var menu=document.getElementById("hamburger");
    var submenu=document.getElementById("submenu");
    menu.addEventListener("click", function () {
        submenu.classList.toggle("display");
    } );
    window.addEventListener("resize", function(){
        var width = document.documentElement.clientWidth;
    // var height = document.documentElement.clientHeight;
    if(width>550&&submenu.classList.contains("display"))
    {
        document.getElementById("submenu").classList.remove("display");
    }        
    });

