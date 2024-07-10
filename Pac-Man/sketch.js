let x = 20;

class Pacman {
    constructor(size, x, y, start, color) {
        this.size = size;
        this.x = x;
        this.y = y;
        this.angle = start;
        this.open = true;
        this.color = color;
    }

    drawPacman() {
        fill(this.color);
        arc(this.x, this.y, this.size, this.size, radians(60 - this.angle), radians(300 + this.angle));
        if (this.open) {
            this.angle -= 2;
            if (this.angle <= 0) {
                this.open = false;
            }
        } else {
            this.angle += 2;
            if (this.angle >= 60) {
                this.open = true;
            }
        }
    }
}

let pacman1;
let pacman2;
let lastKeyPressed = "";

function setup() {
    createCanvas(400, 400);
    pacman1 = new Pacman(25, x, 200, 0, color(255, 255, 0));
    pacman2 = new Pacman(25, 100, 100, 60, color(0, 0, 255));
}

function draw() {
    background(220);

    if (keyIsPressed) {
        if (keyCode == LEFT_ARROW) {
            pacman1.x -= 1;
        } else if (keyCode == RIGHT_ARROW) {
            pacman1.x += 1;
        }
        if (keyCode == UP_ARROW) {
            pacman1.y -= 1;
        } else if (keyCode == DOWN_ARROW) {
            pacman1.y += 1;
        }
    }



    pacman1.drawPacman();
    pacman2.drawPacman();
    drawInfoKeyboard();
}


function drawInfoKeyboard() {
    fill(0);
    textSize(13);
    textAlign(LEFT, TOP);
    text("Última tecla presionada: " + lastKeyPressed, 10, 10);
}

function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        lastKeyPressed = "←";
    } else if (keyCode === RIGHT_ARROW) {
        lastKeyPressed = "→";
    } else if (keyCode === UP_ARROW) {
        lastKeyPressed = "↑";
    } else if (keyCode === DOWN_ARROW) {
        lastKeyPressed = "↓";
    } else {
        lastKeyPressed = key;
    }
}