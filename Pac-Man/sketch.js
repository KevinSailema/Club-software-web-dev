class Pacman {
    drawPacman(){
        arc(200,200,this.size,this.size,radians(60),radians(300))
        this.grades +=2

    }
    constructor(size){
       this.size = size
       this.grades = 0
    }
}

let pacman1 = new Pacman(25)

function setup() {
	createCanvas(400, 400);
}

function draw() {
    background(220);
    pacman1.drawPacman()
}

// Subir 



