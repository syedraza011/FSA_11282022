Skip to content

NoelB33
@NoelB33/Cookies
Cookies
A HTML, CSS, JS repl by NoelB33
Open on Replit

Hide files
Open website


1

Run
278

//This gets all variables that save
function getStorage(name, deafult){
  if(localStorage.getItem(name)===null){
    return deafult;
  }
  else{
    return Number(localStorage.getItem(name));
  }
}
if (localStorage.getItem("clicksOnCookie") === null) {
  console.log("No data found for cookies!");
  var clicks;
  clicks = 0;
}

else {
  console.log("Data found for cookies!");
  var clicks = Number(localStorage.clicksOnCookie);
  document.getElementById("cookies").innerHTML = clicks;
  
}
if (localStorage.getItem("clicksPerClick") === null) {
  console.log("No data found for Clicks!");
  var perclick = 1;
}

else {
  console.log("Data found for Clicks!");
  var perclick = Number(localStorage.clicksPerClick);
  document.getElementById("cpcDisplay").innerHTML = "You are getting: " + perclick + " per click" ;
}
if (localStorage.getItem("clicksPerSecond") === null) {
  console.log("No data foune for Per Second!");
  var persecond= 0;
}

else {
  console.log("Data found for Per Second!");
  var persecond = Number(localStorage.clicksPerSecond);
  document.getElementById("cpsDisplay").innerHTML = "You are getting: " + persecond + " per second" ;
}
if (localStorage.getItem("clickerPrice") === null) {
  console.log("No data found for the clicker price");
  var clickerPrice = 50;
}

else {
  console.log("Data found for clickerPrice");
  var clickerPrice = Number(localStorage.clickerPrice);
  document.getElementById("ClickerBuy").innerHTML  = "1+ Cookies per second! "+clickerPrice + " cookies.";
}
if (localStorage.getItem("bigCPCprice") === null) {
  console.log("no data found for big cpc price");
Files

Cookies - Replit