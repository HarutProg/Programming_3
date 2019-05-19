
var Navak = require("./class.boat")
var Grass = require("./class.grass")
var GrassEater = require("./class.grasseater")
var Killer = require("./class.predator")
var spawner = require("./class.spawner")
var matrix = []
var n = m = 80

    for (var y = 0; y < n; y++) {
        matrix[y] = []
        for (var x = 0; x < y; x++) {
            matrix[y][x] = randomItemFromArray([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])
        }
    }

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                matrix[y][x] = new Grass(x, y, 1);
            }
            if (matrix[y][x] == 2) {
                matrix[y][x] = new GrassEater(x, y, 2);
            }
            if (matrix[y][x] == 3) {
                matrix[y][x] = new Killer(x, y, 3);
            }
            if (matrix[y][x] == 4) {
                matrix[y][x] = new spawner(x, y, 4);
            }
            if (matrix[y][x] == 5) {
                matrix[y][x] = new Navak(x, y, 5);
            }
        }
    }
    function randomItemFromArray(arr){

        var random = Math.floor(Math.random() * arr.length);
        return arr[random];
    }
// module.exports = matrix