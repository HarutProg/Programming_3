var LivingCreature = require("./class.LivingCreature")

module.exports = class GrassEater extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index)
        this.energy = 8;
        this.acted = false;
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(num,matrix) {
        this.getNewCoordinates(matrix);
        return super.chooseCell(num,matrix);
    }
    move(matrix) {
        var newCell = random(this.chooseCell(0, matrix));
        if (this.acted == false) {
            if (newCell) {
                var newX = newCell[0];
                var newY = newCell[1];
                matrix[newY][newX] = matrix[this.y][this.x]
                matrix[this.y][this.x] = 0
                this.x = newX
                this.y = newY
                this.acted = true;
            }
            this.energy--;
            if (this.energy <= 0) {
                this.die(matrix)
            }
        }
    }
    die(matrix) {
        matrix[this.y][this.x] = 0
    }

    eat(matrix) {
        var newCell = random(this.chooseCell(1,matrix));
        if (this.acted == false) {
            if (newCell) {
                var newX = newCell[0];
                var newY = newCell[1];
                matrix[newY][newX] = matrix[this.y][this.x]
                matrix[this.y][this.x] = 0
                this.x = newX
                this.y = newY
                this.energy++
                this.acted = true;

                if (this.energy >= 9) {
                    this.mul(matrix)
                    this.energy = 4
                }
            } else {
                this.move(matrix)
            }
        }


    }
    mul(matrix) {
        var newCell = random(this.chooseCell(0,matrix));

        if (newCell) {
            var newX = newCell[0]
            var newY = newCell[1]
            matrix[newY][newX] = new GrassEater(newX, newY, 2)
        }
    }
}

function random(arr){

    var random = Math.floor(Math.random() * arr.length);
    return arr[random];
}