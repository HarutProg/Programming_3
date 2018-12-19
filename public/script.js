var matrix = [];
var n = 10;
var m = 10;
var side = 10
var socket = io()
{
framerate(0)
socket.on('getNewMatrix',function(mtx){
    matrix=mtx
    console.log(matrix)
    createCanvas(matrix[0].length * side, matrix.length * length)
    socket.on("redraw",function(mtx){
        matrix=mtx
        redraw()
    })
})
noLoop()
}

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
                matrix[y][x];
                matrix[y][x].eat();
                
            }
        }
    } 
}



// function setup() {
//     for (var y = 0; y<n;y++){
//         matrix[y]= [];
//         for(var x = 0; x <m;x++){
// matrix[y][x] = random([0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,2,2,2,2])
//         }
//     }
// }



// function draw( ){
//     for(var y = 0;y < matrix.length;y++){
//         for(var x = 0;x < matrix[y].length;x++){
//             if(matrix[y][x] == 1) {
//                 fill("green")
//                 rect(x * side,y * side,side,side)
//             }
//             else if(matrix[y][x] == 0) {
//                 fill('#acacac')
//                 rect(x * side,y * side,side,side)
//             }
//             else if(matrix[y][x] == 2) {
//                 fill('yellow')
//                 rect(x * side,y * side,side,side)
//             }
//         }
//     }
// }



// var side = 62.3
// var n = 8

// function setup() {
//     createCanvas(500,500);
//     background('#acacac');
// }

// function draw(){
//     for(var y = 0;y < n;y++){
//         for(var x = 0;x < n;x++){
//             if(x + y <= 7) {
//                 fill("yellow")
//                 rect(x * side,y * side,side,side)
//             }
//             else {
//                 fill('#acacac')
//                 rect(x * side,y * side,side,side)
//             }
//         }
//     }
// }



// var side = 50
// var n = 10

// function setup() {
//     createCanvas(500,500);
//     background('#acacac');
// }

// function draw(){
//                    for(var y = 0;y < n;y++){
//         for(var x = 0;x < n;x++){
//                 if (x + y) {
//                 fill('#acacac')
//                 rect(x * side,y * side,side,side)    
//             }
//         }
//     }
// }









// NEW MAS


// var matrix = [];
// var n = m = 80;
// var side = 10;



// function setup() {

//     for (var y = 0; y < n; y++) {
//         matrix[y] = [];
//         for (var x = 0; x < m; x++) {
//             matrix[y][x] = random([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,4,5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])

//         }
//     }

    // matrix = [
    //     [0, 0, 1, 0, 0],
    //     [1, 0, 0, 0, 0],
    //     [0, 1, 0, 2, 0],
    //     [0, 0, 1, 0, 0],
    //     [1, 1, 0, 2, 0],
    //     [1, 1, 0, 0, 0],
    //     [1, 1, 0, 0, 2]
    // ];
//     frameRate(20);
//     createCanvas(matrix[0].length * side, matrix.length * side);
//     background('#acacac');

//     for (var y = 0; y < matrix.length; y++) {
//         for (var x = 0; x < matrix[y].length; x++) {
//             if (matrix[y][x] == 1) {
//                 matrix[y][x] = new Grass(x, y, 1);
//             }
//             if (matrix[y][x] == 2) {
//                 matrix[y][x] = new GrassEater(x, y, 2);
//             }
//             if (matrix[y][x] == 3) {
//                 matrix[y][x] = new Killer(x, y, 3);
//             }
//             if (matrix[y][x] == 4) {
//                 matrix[y][x] = new spawner(x, y, 4);
//             }
//             if (matrix[y][x] == 5) {
//                 matrix[y][x] = new Navak(x, y, 5);
//             }
//         }
//     }
//     console.log(matrix);
// }
// function draw() {

//     for (var y = 0; y < matrix.length; y++) {
//         for (var x = 0; x < matrix[y].length; x++) {
//             if (matrix[y][x].index == 1) {
//                 matrix[y][x].mul();
//             }
//             if (matrix[y][x].index == 2) {
//                 matrix[y][x].eat();
//             }
//             if (matrix[y][x].index == 3) {
//                 matrix[y][x].eat();
//             }
//             if (matrix[y][x].index == 4) {
//                 matrix[y][x].spawnGrass();
//             }
//             if (matrix[y][x].index == 5) {
//                 console.log(matrix[y][x]);
//                 matrix[y][x].eat();
                
//             }
//         }
//     }




//     for (var y = 0; y < matrix.length; y++) {
//         for (var x = 0; x < matrix[y].length; x++) {
//             if (matrix[y][x].index == 1) {
//                 fill("green");
//                 rect(x * side, y * side, side, side);
//             }
//             else if (matrix[y][x].index == 2) {
//                 fill("yellow");
//                 rect(x * side, y * side, side, side);
//                 matrix[y][x].acted = false;
//             }
//             else if (matrix[y][x].index == 3) {
//                 fill("red");
//                 rect(x * side, y * side, side, side);
//                 matrix[y][x].acted = false;
//             }
//             else if (matrix[y][x] == 0) {
//                 fill("#acacac");
//                 rect(x * side, y * side, side, side);
//             }
//             else if (matrix[y][x].index == 4) {
//                 fill("#4A235A");
//                 rect(x * side, y * side, side, side);
//             }
//             else if (matrix[y][x].index == 5) {
//                 fill("blue");
//                 rect(x * side, y * side, side, side);
//             }
//         }
//     }
// }