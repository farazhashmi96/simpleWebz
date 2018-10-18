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
function Fahrenheit_to_Celsius(temp){
var getTemp = temp;
var statementText = "Weather Calculate";
var Fahrenheit_to_Celsius = (((getTemp-32)*5)/9);
var result = getTemp+" Fahrenheit into Celsius = "+Fahrenheit_to_Celsius+" Celsius.";
console.log(result);
document.getElementById("tempe").innerHTML = result;
}
function Celsius_to_Fahrenheit(temp){
var getTemp = temp;
var statementText = "Weather Calculate";
var Celsius_to_Fahrenheit = (((getTemp*9)/5)+32);
var result = getTemp+" Celsius into Fahrenheit = "+Celsius_to_Fahrenheit+" Fahrenheit.";
console.log(result);
document.getElementById("tempe").innerHTML = result;
}

