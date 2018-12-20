module.exports = class Navak {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 8;
        this.index = index;
        this.acted = false;
    }
    getNewCoordinates() {
        this.directions = [
            [this.x + 1, this.y],
            [this.x - 1, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.y],
            [this.x, this.y + 1],
            [this.x, this.y - 1],
            [this.x, this.y + 2],
            [this.x, this.y - 2]
        ];
    }
    chooseCell(num,matrix) {
        this.getNewCoordinates();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == num) {
                    found.push([x, y]);
                }
                else if (matrix[y][x].index == num) {
                    found.push([x, y]);
                }
            }
        }
        return found;
    }
    move(matrix) {
        var newCell = random(this.chooseCell(0,matrix));
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
        var newCell = random(this.chooseCell(2,matrix));
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
            }
        }
        var newCell = random(this.chooseCell(3,matrix));
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
            }

        }
    }
    mul(matrix) {
        var newCell = random(this.chooseCell(0,matrix));

        if (newCell) {
            var newX = newCell[0]
            var newY = newCell[1]
            matrix[newY][newX] = new Navak(newX, newY, 5)
        }
    }
    die(matrix) {
        matrix[this.y][this.x] = 0
    }
}
function random(arr){

    var random = Math.floor(Math.random() * arr.length);
    return arr[random];
}