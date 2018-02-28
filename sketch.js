var speedmax = 3;
var n = 70;
var img;

class mol {
    constructor(x1, y1, sx1, sy1, col1, sizee1){
        this.x = x1;
        this.y = y1;
        this.sx = sx1;
        this.sy = sy1;
        this.col = col1;
        this.sizee = sizee1;
    }

    display(){
        this.x += this.sx;
        this.y += this.sy;

        if (mouseX < width & mouseX > 0 & mouseY < height & mouseY > 0){
            this.sx -= 0.25*(this.x - mouseX)/width
            this.sy -= 0.25*(this.y - mouseY)/height
        }
        
        if (this.x > width+this.sizee){
            this.x = 0-this.sizee;
            this.sx = random(-speedmax,speedmax);
            this.sy = random(-speedmax,speedmax);
        }
        if (this.x < 0-this.sizee){
            this.x = width+this.sizee;
            this.sx = random(-speedmax,speedmax);
            this.sy = random(-speedmax,speedmax);
        }
        if (this.y > height+this.sizee){
            this.y = 0-this.sizee;
            this.sx = random(-speedmax,speedmax);
            this.sy = random(-speedmax,speedmax);
        }
        if (this.y < 0-this.sizee){
            this.y = height+this.sizee;
            this.sx = random(-speedmax,speedmax);
            this.sy = random(-speedmax,speedmax);
        }        
        fill(this.col);
        noStroke();
        ellipse(this.x, this.y, this.sizee, this.sizee);
    }
}

var mols = new Array(n);

var table;
function preload(){
    table = loadTable("data.csv", "header")
}

var years = [];
var co2 = [];

function setup(){
    createCanvas(windowWidth-20,windowHeight-100)
    //img = loadImage("images/background.jpeg");
    for (var i = 0; i < n; i++){
        var m = new mol(random(width),random(height),random(-speedmax,speedmax),random(-speedmax,speedmax),color(random(200,255), random(200,255), random(200,255),random(20,100)),random(10,50));
        mols[i] = m;
    }
    frameRate(120);
    cursor("images/blackhole.png", 16,16);

    loadData();
}

function loadData(){
    years = table.getColumn(1);
    co2 = table.getColumn(0);
}

var clicks = -1;
var middletext = '';

function draw(){
    //createCanvas(windowWidth-20,windowHeight-100);
    background(255);
    //image(img, 0, 0, img.width, img.height);

    for (var i = 0; i < n; i++){
        mols[i].display();
    }

    textSize(32);
    textAlign(CENTER);
    fill(0,0,0)
    text(middletext, width/2, height/2);

}


function mousePressed() {
    clicks = clicks + 1;
    if (clicks < years.length){
        middletext = years[clicks];
        for (var i = 0; i < n; i++){
            var ratio = co2[clicks]/co2[co2.length-1];
            mols[i].sizee = random(0.75,1.25)*ratio*500;
            mols[i].col = color((1-ratio)*random(200,255), (1-ratio)*random(200,255), (1-ratio)*random(200,255), random(20,50));
        }
    } else {
        middletext = "This is a real problem."
    }
}
