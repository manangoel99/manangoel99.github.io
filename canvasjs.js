var x;
var ha = document.getElementById("ha");
var small = function()  {
  x = "strokesmall";
};
var medium = function(){
  x = "strokesmed";
};
var Large = function() {
  x = "strokeslarge";
};
var erase = function()  {
  x = "eraser";
};
  var abc = function(e){
    var stroke = document.createElement("div");
    stroke.className=x;
    document.body.appendChild(stroke);
    stroke.style.top = e.clientY + "px";
    stroke.style.left = e.clientX + "px";
  };
ha.addEventListener("mousemove",abc);