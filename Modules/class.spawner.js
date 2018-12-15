module.exports = class spawner {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 8;
        this.index = index;
        this.acted = false;
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 2, this.y - 2],
            [this.x - 1, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y - 1],
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x + 2, this.y - 1],
            [this.x - 2, this.y],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.y + 1],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x + 2, this.y + 1],
            [this.x - 2, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x + 2, this.y + 2]
        ];
    }
    chooseCell(num) {
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
    spawnKiller() {
        if (this.energy == 70) {
            var newCell = random(this.chooseCell(0));

            if (newCell) {
                var newX = newCell[0]
                var newY = newCell[1]
                matrix[newY][newX] = new Killer(newX, newY, 3);
                this.energy = 0;

            }
        }
    }
    spawnGrassEater() {
        if (this.energy == 55) {
            var newCell = random(this.chooseCell(0));

            if (newCell) {
                var newX = newCell[0]
                var newY = newCell[1]
                matrix[newY][newX] = new GrassEater(newX, newY, 2);
            }
        }
        this.spawnKiller()
    }
    spawnGrass() {
        this.energy++;
        if (this.energy == 50) {
            var newCell = random(this.chooseCell(0));

            if (newCell) {
                var newX = newCell[0]
                var newY = newCell[1]
                matrix[newY][newX] = new Grass(newX, newY, 1);
            }
        }
        this.spawnGrassEater()
    }
}
