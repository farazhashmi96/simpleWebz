function changeWeb(){
  var greeting = "What's Up.";
  document.getElementById("demo").innerHTML = greeting;
  console.log(greeting);
}
function Day(){
  document.getElementById("picx").src = "images/300215.jpg";
}
function Night(){
  document.getElementById("picx").src = "images/300216.jpg";
}
function changeColor(){
  document.getElementById("demo").style.color = "red";
}
function letsHide(){
  document.getElementById("picx").style.display= "none";
}
