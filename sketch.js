function setup(){
    createCanvas(400,400)
}

function draw(){
    background(color(255, 200, 200))
    for (var i = 0; i < 200; i += 10) {
        ellipse(i, i, i, i);
        fill(i, i+100, i+200,i)
    }
    line(0,0,200,200)

}