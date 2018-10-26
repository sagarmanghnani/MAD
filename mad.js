function initialLogo()
{
    var backgrounds = document.getElementById("moveBackground");
    backgrounds.style.display = 'none';
    function fadeLogo()
    {
        var logo = document.getElementById("initialLogo");
        logo.style.display = 'none';
        console.log(logo);
    }   
    
    function getBackground()
    {
        backgrounds.style.display = "grid";
    }
    var check = setTimeout(fadeLogo, 4000);
    var check2 = setTimeout(getBackground, 4001);

    

   

}

window.onload = function(){
    initialLogo();
}
