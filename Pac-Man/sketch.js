let x = 20
class Pacman {
    drawPacman(){
        arc(this.x,this.y,this.size,this.size,radians(60-this.angle),radians(300+this.angle))
        if (this.open) {
            this.angle -= 2
            if (this.angle <= 0) {
                this.open = false
            }
        } else {
            this.angle += 2
            if (this.angle >= 60) {
                this.open = true
            }
        }    
    }

    constructor(size, x, y, start){
       this.size = size
       this.x = x
       this.y = y
       this.angle = start
       this.open = true
    }
}
let pacman1 = new Pacman(25,x,200,0,0)
let pacman2 = new Pacman(25,100,100,60,60)
function setup() {
	createCanvas(400, 400);
}

function draw() {
    x +=2
    // pacman1.x += 2  "Activar para mover en linea recta"
    background(220);
    pacman1.drawPacman()
    pacman2.drawPacman()
}





