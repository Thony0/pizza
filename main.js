menuListArray = ["Pizza Vegetariana", "pizza de frango", "pizza de calabresa", "pizza de queijo", "pizza de peperoni"];

function getMenu(){
var htmldata="";
menuListArray.sort();
for(var i=0; menuListArray.length; i++){
    htmldata=htmldata+ menuListArray[i]+"<br>";
}
document.getElementById("displayMenu").innerHTML=htmldata;
}

function addItem(){
var htmldata;
var img="<img id='im1' src='images/pizzaImg.png'>"
var item=document.getElementById("addItem").value;
menuListArray.sort();
htmldata="";
for(var i=0; menuListArray.length; i++){
    htmldata=htmldata+ img+ menuListArray[i]+"<br>";
}
document.getElementById("displayAddedMenu").innerHTML=htmldata;

}

function sugestao(){
var item=document.getElementById("addItem").value;
menuListArray.push(item);
addItem();
}