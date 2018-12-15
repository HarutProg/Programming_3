
var Navak = require("./Modules/class.boat")
var Grass = require("./Modules/class.grass")
var GrassEater = require("./Modules/class.grasseater")
var Killer = require("./Modules/class.predator")
var spawner = require("./Modules/class.spawner")

var mygrassObject = new Grass (x,y,1)
var mygrasseaterObject = new GrassEater (x,y,2)
var myboatObject = new Navak (x,y,5)
var mypredatorObject = new Killer (x,y,3)
var myspawnerObject = new spawner (x,y,4)

function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x].index == 1) {
                matrix[y][x].mul();
            }
            if (matrix[y][x].index == 2) {
                matrix[y][x].eat();
            }
            if (matrix[y][x].index == 3) {
                matrix[y][x].eat();
            }
            if (matrix[y][x].index == 4) {
                matrix[y][x].spawnGrass();
            }
            if (matrix[y][x].index == 5) {
                console.log(matrix[y][x]);
                matrix[y][x].eat();
                
            }
        }
    }




    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x].index == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x].index == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
                matrix[y][x].acted = false;
            }
            else if (matrix[y][x].index == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
                matrix[y][x].acted = false;
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x].index == 4) {
                fill("#4A235A");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x].index == 5) {
                fill("blue");
                rect(x * side, y * side, side, side);
            }
        }
    }
}