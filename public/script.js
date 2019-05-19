//knchum enq socket.io ev haytarum en side canvasi hamar
var side = 20;
var socket = io();

 //setup
 function setup() {
    createCanvas(20 * side , 20 * side);
    background('blue');  
 }
 
 //nuyn draw functiony uxaki serveric ekac matrixi hashvin 
 function drawMatrix(matrix) {
    background('grey'); 

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 0) {
                fill("grey");
            }
            else if (matrix[y][x] == 1) {            
                fill("green");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                fill("black");
            }
            else if (matrix[y][x] == 4) {
                fill("violet");
            }
            else if (matrix[y][x] == 5) {
                fill("blue");
            }
            rect(x * side, y * side, side, side);
        }
    }
}
function drawWeather(w){
    var p = document.getElementById('seasons')
    var weather = w
    console.log(weather)



if (weather == "Summer"){
    p.innertext = "Summer";
}
else if(weather =="Winter"){
    p.innertext = "Winter"
}
else if(weather == "Autumn"){
    p.innertext = "Autumn"
}
else if(weather == "Spring"){
    p.innertext == "Spring"
}
}

//yndunuma serveric matrixy ev kanchuma drawMatrix
socket.on("matrix", drawMatrix);

socket.on("exanak",drawWeather)
//function event kisata grac serverum el code petqa grvi sa vorpes hushum
//  function mousePressed() {
//     var x = Math.floor(mouseX / side);
//     var y = Math.floor(mouseY / side);
//     arr = [x, y];
//     console.log(arr);
//     socket.emit("Sxmvec", arr)

// }

var weatherclient = "Summer"


var weatherclient = "Summer";

socket.on("exanak",function (w){
    weatherclient = w
});

