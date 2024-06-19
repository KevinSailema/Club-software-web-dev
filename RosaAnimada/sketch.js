let width = 800
let heigth = 800

function setup() {
  createCanvas(width, heigth);
}

let centrox=400
let centroy=400
let radio=200
let d=radio*2
let state=0

function draw() {
  state= state+2;
  if (state>=1080){
    state=0
  }
  background(220);
  noFill();
  let externalCircleFinal= state
  if (externalCircleFinal>=360) {
    externalCircleFinal=360
  }
  
  arc(centrox,centroy,2*radio,2*radio, radians(0),radians(externalCircleFinal));
  for(let arco=0; arco < 6; arco+=1){
    let g=60*arco
    let arcController= state - externalCircleFinal - (120*arco)
    if (state<=360+arco*120) {
    break
    } 
    let angle = radians(g)
    let x=centrox+radio*cos(angle);
    let y=centroy+radio*sin(angle);
    let start=g+120
    if (arcController>=120) {
    arcController=120
    }
      arc(x,y,radio*2,radio*2,radians(start),radians(arcController+start));
  }


}