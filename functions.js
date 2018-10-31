function getBrowserDetails(){
try{
var txt = "";
var space = "\n";
console.log("Your Current Browser Details are: ");
txt += "Browser CodeName: " + navigator.appCodeName + ".";
txt += space+"Browser Name: " + navigator.appName + ".";
txt += space+"Browser Version: " + navigator.appVersion + ".";
txt += space+"Cookies Enabled: " + navigator.cookieEnabled + ".";
txt += space+"Browser Language: " + navigator.language + ".";
txt += space+"Browser Online: " + navigator.onLine + ".";
txt += space+"Platform: " + navigator.platform + ".";
txt += space+"User-agent header: " + navigator.userAgent + ".";
console.log(txt);
}
catch(erro){
  console.log(erro);
}}
function TimeNDate(){
try{
  var day = new Date();
  return day;
}
catch(erro){
  console.log(erro);
}}
function toTheDateIs(){
try{
  var getD = TimeNDate();
  var makeDate = getD.getDay()+"/"+getD.getDate()+"/"+getD.getMonth()+"/"+getD.getFullYear();
  console.log(getD);
  console.log("Custom Made Date is: "+makeDate+".");
}
catch(erro){
  console.log(erro);
}}
function changeWeb(){
try{
  var greeting = "What's Up.";
  document.getElementById("demo").innerHTML = greeting;
  console.log(greeting);
}
catch(erro){
  console.log(erro);
}}
function Day(){
try{
  document.getElementById("picx").src = "images/300215.jpg";
}
catch(erro){
  console.log(erro);
}}
function Night(){
try{
  document.getElementById("picx").src = "images/300216.jpg";
}
catch(erro){
  console.log(erro);
}}
function changeColor(){
try{
  document.getElementById("demo").style.color = "red";
}
catch(erro){
  console.log(erro);
}}
function letsHide(){
try{
  document.getElementById("picx").style.display= "none";
}
catch(erro){
  console.log(erro);
}}
function Fahrenheit_to_Celsius(temp){
try{
var getTemp = temp;
var statementText = "Weather Calculate";
var Fahrenheit_to_Celsius = (((getTemp-32)*5)/9);
var result = getTemp+" Fahrenheit into Celsius = "+Fahrenheit_to_Celsius+" Celsius.";
console.log(result);
document.getElementById("tempe").innerHTML = result;
}
catch(erro){
  console.log(erro);
}}
function Celsius_to_Fahrenheit(temp){
try{
var getTemp = temp;
var statementText = "Weather Calculate";
var Celsius_to_Fahrenheit = (((getTemp*9)/5)+32);
var result = getTemp+" Celsius into Fahrenheit = "+Celsius_to_Fahrenheit+" Fahrenheit.";
console.log(result);
document.getElementById("tempe").innerHTML = result;
}
catch(erro){
  console.log(erro);
}}
function appliedDriving(ageLimit = 0){
try{
  let getAgeLimit = (ageLimit), stat = undefined;
  if(getAgeLimit > 18 && getAgeLimit < 60){
    stat = ("You are eligible to DRIVE!, your age is: "+(getAgeLimit)+" yrs.");
  }
  else if(getAgeLimit > 60 && getAgeLimit < 90){
    stat = ("You are eligible to DRIVE!, your age is: "+(getAgeLimit)+" yrs, but Drive Carefully.");
  }
  else{
    stat = ("You are not eligible to DRIVE!, your age is: "+(getAgeLimit)+" yrs.");
  }
  console.log(stat);
}
catch(erro){
  console.log(erro);
}}
function helloWorld(){
try{
  var day = new Date().getDay();
  switch(day){
    case 0:
    case 6:{
      console.log("Happy Saturday.");
      break;
    }
    case 1:{
      console.log("Boring Monday.");
      break;
    }
    case 2:{
      console.log("Nice Tuesday.");
      break;
    }
    case 3:{
      console.log("Nice Wednesday.");
      break;
    }
    case 4:{
      console.log("Good Thursday.");
      break;
    }
    case 5:{
      console.log("Friday Mubarak.");
      break;
    }
    default:{
      console.log("Invalid Day.");
      break;
    }
  }
}
catch(erro){
  console.log(erro);
}}
function ifLoopCheck(name=navigator.appName){
try{
  var getName = name;
  var counter;
  for(counter = 0; counter < getName.length; counter++){
    console.log("Hello "+(getName)+".");
  }
}
catch(erro){
  console.log(erro);
}}
function specifyUserDetails(){
try{
  var user = {
    name: "Nasir",
    age: 52,
    designation: "Electricition"
  };var loop = 0; var printing = "";
  var con = user.lenght;
  for(loop in user){
    printing += user[loop];
    console.log(user[loop]);
  }
  console.log(printing);
}
catch(erro){
  console.log(erro);
}}
function whileLoopCheck(name=navigator.appName){
try{
  var getName = name;
  var counter = 0;
  while (counter < getName.length){
    console.log("Hello "+(getName)+".");
    counter++;
  }
}
catch(erro){
  console.log(erro);
}}
function doWhileLoopCheck(name=navigator.appName){
try{
  var getName = name;
  var counter = 0;
  do{
    console.log("Hello "+(getName)+".");
    counter++;
  }
  while(counter < getName.length);
}
catch(erro){
  console.log(erro);
}}
function makeFooter(company="hello"){
try{
 var footerText = "&#169; Copyright "+((TimeNDate().getFullYear()*1).toString())+" \""+company+"\"";
 document.getElementById("footerText").innerHTML = (footerText);
}
catch(erro){
  console.log(erro);
}}
function car(name = 'Suzuki', modelYear = 1989, engineSize = 786){
try{
  var carIs = {
    Name: name,
    model: modelYear,
    engine: engineSize,
    disp : function(){
      return ("The car name is " + this.Name + ", model year " + this.model + " and engine size " + this.engine+".");    }
  };
 console.log(carIs.disp());
}
catch(erro){
  console.log(erro);
}
}
function checkAgeForDriving(enterAGE = 15){
  try{
    let age = enterAGE;
    if(age < 19 && age > 65){
      throw ("It is better not to DRIVE!");
    }
    else{
      console.log("You can DRIVE!");
    }
  }
  catch(err){
    console.log(err);
  }
}
function checkInput(){
  try{
    let getName = document.getElementById("chkValu").value;
    if(getName != "" && getName != null && getName != undefined){
      throw ("Great "+(getName)+".");
    }
    else{
      throw "Enter some string first!";
    }
  }
  catch(erro){
    console.log("Error Occur: "+erro+".");
    document.getElementById("chkValu").value = erro;
  }
  finally
  {
//   console.clear();
  }
}

