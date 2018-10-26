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

    new Promise(function(resolve, reject){
        var check = setTimeout(fadeLogo, 4000);
        resolve(check);
    }).then(function(val){
        
        backgrounds.style.display = "block";
    })
    

}

window.onload = function(){
    initialLogo();
}
