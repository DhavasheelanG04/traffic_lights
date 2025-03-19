var red1=document.getElementById("rd");
var yellow1=document.getElementById("ylo");
var green1=document.getElementById("grn");

function restlight(){
    red1.classList.remove("rd1");
    yellow1.classList.remove("ylo1");
    green1.classList.remove("grn1");
}




function red_light(){
    restlight();
    red1.classList.add("rd1");
}
function yellow_light(){
    restlight();
    yellow1.classList.add("ylo1");
}
function green_light(){
    restlight();
    green1.classList.add("grn1");
}