//getting Elements By Id
var div2 = document.getElementById("images-div-2");
var viewmore = document.getElementById("viewmorelink");
var viewless = document.getElementById("viewlesslink");

//function to show city options onclick of view more button
viewmore.onclick = function(){
  div2.style.display = "flex";
  viewmore.style.display = "none";
  viewless.style.display = "inline";
}
//function to hide city options onclick of view less button
viewless.onclick = function(){
  div2.style.display = "none";
  viewmore.style.display = "inline";
  viewless.style.display = "none";
}
