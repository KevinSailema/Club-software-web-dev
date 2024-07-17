let x = 20;

class Pacman {
    constructor(size, x, y, start, color) {
        this.udirection=Pacman.direction.derecha;
        this.size = size;
        this.x = x;
        this.y = y;
        this.angle = start;
        this.open = true;
        this.color = color;

    }
     static direction={arriba:"Arriba",abajo:"Abajo",izquierda:"Izquierda",derecha:"Derecha"};
     move(dir){
        this.udirection=dir
        if (dir===Pacman.direction.izquierda) { // A
            this.x -= 1;
            
        } else if (dir===Pacman.direction.derecha) { // D
            this.x += 1;
            
        } else if (dir===Pacman.direction.arriba) { // W
            this.y -= 1;
            
      } else if (dir===Pacman.direction.abajo) { // S
            this.y += 1;
            
        }

     }
    drawPacman() {
        fill(this.color);
        let offset=0
        if (this.udirection==Pacman.direction.arriba){
            offset=270

        }
        else if(this.udirection==Pacman.direction.izquierda){
            offset=180
        }
        else if(this.udirection==Pacman.direction.abajo){
            offset=90
        }
        else if(this.udirection==Pacman.direction.derecha){
            offset=0
        }
        arc(this.x, this.y, this.size, this.size, radians(60 + offset - this.angle), radians(300 + offset+ this.angle));
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
        let direction
        if (keyCode == 37) { // Variación de "KeyCode (LEFT_ARROW)"
            direction = Pacman.direction.izquierda;
        } else if (keyCode == RIGHT_ARROW) { 
            direction = Pacman.direction.derecha; 
        }
        if (keyCode == UP_ARROW) {
            direction = Pacman.direction.arriba;
        } else if (keyCode == DOWN_ARROW) {
            direction = Pacman.direction.abajo;
        }
        pacman1.move(direction)
    }


    if (keyIsPressed) {
        if (keyCode == 65) { // A
            pacman2.x -= 1;
            lastKeyPressed = "A";
        } else if (keyCode == 68) { // D
            pacman2.x += 1;
            lastKeyPressed = "D";
        } else if (keyCode == 87) { // W
            pacman2.y -= 1;
            lastKeyPressed = "W";
        } else if (keyCode == 83) { // S
            pacman2.y += 1;
            lastKeyPressed = "S";
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