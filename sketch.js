var speedmax = 3;
var n = 50;
var img;

class mol {
    constructor(x, y, sx, sy, col, sizee){
        this.x = random(width);
        this.y = random(height);
        this.sx = random(-speedmax,speedmax);
        this.sy = random(-speedmax,speedmax);
        this.col = color(random(255), random(255), random(255),random(20,100));
        this.sizee = random(10,50)
    }
}

var mols = new Array(n);

function setup(){
    createCanvas(windowWidth-20,windowHeight-100)
    //img = loadImage("images/background.jpeg");
    for (var i = 0; i < n; i++){
        var m = new mol();
        mols[i] = m;
    }
    frameRate(120);
    cursor("images/blackhole.png", 16,16);
}


function draw(){
    //createCanvas(windowWidth-20,windowHeight-100);
    background(255);
    //image(img, 0, 0, img.width, img.height);

    for (var i = 0; i < n; i++){
        mols[i].x += mols[i].sx;
        mols[i].y += mols[i].sy;

        if (mouseX < width & mouseX > 0 & mouseY < height & mouseY > 0){
            mols[i].sx -= 0.25*(mols[i].x - mouseX)/width
            mols[i].sy -= 0.25*(mols[i].y - mouseY)/height
        }
        
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
        noStroke();
    }

}