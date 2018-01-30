var speedmax = 5;
var n = 30;

class mol {
    constructor(x, y, sx, sy, col, sizee){
        this.x = random(width);
        this.y = random(height);
        this.sx = random(-speedmax,speedmax);
        this.sy = random(-speedmax,speedmax);
        this.col = color(random(255), random(255), random(255));
        this.sizee = random(10,50)
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
        if (mols[i].x > width+mols[i].sizee){
            mols[i].x = 0-mols[i].sizee;
            mols[i].sx = random(-speedmax,speedmax);
            mols[i].sy = random(-speedmax,speedmax);
        }
        if (mols[i].x < 0-mols[i].sizee){
            mols[i].x = width+mols[i].sizee;
            mols[i].sx = random(-speedmax,speedmax);
            mols[i].sy = random(-speedmax,speedmax);
        }
        if (mols[i].y > height+mols[i].sizee){
            mols[i].y = 0-mols[i].sizee;
            mols[i].sx = random(-speedmax,speedmax);
            mols[i].sy = random(-speedmax,speedmax);
        }
        if (mols[i].y < 0-mols[i].sizee){
            mols[i].y = height+mols[i].sizee;
            mols[i].sx = random(-speedmax,speedmax);
            mols[i].sy = random(-speedmax,speedmax);
        }
        ellipse(mols[i].x, mols[i].y, mols[i].sizee, mols[i].sizee);
        fill(mols[i].col);
    }

}