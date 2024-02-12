let sprite;
let coin1;
let coin2;

let ourIntegers = {
    firstInt: 10,
    secondInt: 13,
    thirdInt: 12
}

function preload() {
    sprite = loadImage("coin.gif");
}

function setup() {
    createCanvas(500, 500);
    coin1 = new Coin(sprite, 150, 200, 50, 100);
    coin2 = new Coin(sprite, 400, 330, 50, 100);
    
    console.log(coin1.addDimensions());
}

function draw() {
    background(245);
    coin1.display();
    coin2.display();
}


class Coin{
    constructor(sprite, x, y , size, points){
        this.sprite = sprite;
        this.x = x;
        this.y = y;
        this.size = size;
        this.points = points;
        this.added;
    }

    addDimensions(){
        return this.added = this.x + this.y
    }

    display(){
        imageMode(CENTER);
        image(this.sprite, this.x, this.y, this.size);
    }

}