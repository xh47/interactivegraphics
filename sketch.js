var speedmax = 3;
var n = 30;
var sizee = 20;

class mol {
    constructor(x, y, sx, sy, col){
        this.x = random(width);
        this.y = random(height);
        this.sx = random(-speedmax,speedmax);
        this.sy = random(-speedmax,speedmax);
        this.col = color(random(255), random(255), random(255));
    }
}

var mols = new Array(n);

function setup(){
    createCanvas(600,600)
    for (var i = 0; i < n; i++){
        var m = new mol();
        mols[i] = m;
    }
}

function draw(){
    background(0)

    for (var i = 0; i < n; i++){
        mols[i].x += mols[i].sx;
        mols[i].y += mols[i].sy;
        if (mols[i].x > width+sizee){
            mols[i].x = 0-sizee;
        }
        if (mols[i].x < 0-sizee){
            mols[i].x = width+sizee;
        }
        if (mols[i].y > height+sizee){
            mols[i].y = 0-sizee;
        }
        if (mols[i].y < 0-sizee){
            mols[i].y = height+sizee;
        }
        ellipse(mols[i].x, mols[i].y, sizee, sizee);
        fill(mols[i].col);
    }

}