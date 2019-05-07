var imagenumber=1;
function showimg(n){
    var i;
    var images=document.getElementsByClassName("image");
    if(n>images.length)
    {
        imagenumber=1;
    }
    if(n<1)
    {
        imagenumber=images.length;
    }
    for(i=0;i<images.length;i++)
    {
        images[i].style.display="none";
    }
    images[imagenumber-1].style.display = "block"; 
}
showimg(imagenumber);
var nextimage = function(n){
    showimg(imagenumber += n);
}
 function showback(){
    var carousel = document.getElementsByClassName("image");
    for(var i=0;i<carousel.length;i++)
    {
        carousel[i].style.display="none";
    }
    var buttons=document.getElementsByClassName("prev")
    for(var i=0;i<buttons.length;i++)
    {
        buttons[i].style.display="none";
    }
    var buttons=document.getElementsByClassName("next")
    for(var i=0;i<buttons.length;i++)
    {
        buttons[i].style.display="none";
    }
    var buttons=document.getElementById("remove");
    buttons.style.display="none";
    var buttons=document.getElementById("display");
    buttons.style.display="inline-block";
}
function getback(){
    showimg(1);
    var buttons=document.getElementsByClassName("prev")
    for(var i=0;i<buttons.length;i++)
    {
        buttons[i].style.display="block";
    }
    var buttons=document.getElementsByClassName("next")
    for(var i=0;i<buttons.length;i++)
    {
        buttons[i].style.display="block";
    }
    var buttons=document.getElementById("remove");
    buttons.style.display="inline-block";
    var buttons=document.getElementById("display");
    buttons.style.display="none";
}