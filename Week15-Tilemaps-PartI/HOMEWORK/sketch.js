let tilemap = [];
let numDown = 10;
let numAcross = 10;
let tileSize = 50;
let textures = [];


let graphicMap = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]

function preload() {
    textures[0] = loadImage("grassy.png")
    textures[1] = loadImage("stone.png")
}

function setup() {
    createCanvas(500, 500);

    let tileID = 0;
    for (let across = 0; across < numAcross; across++) {
        tilemap[across] = [];
        for (let down = 0; down < numDown; down++) {
            let x = across * tileSize;
            let y = down * tileSize;
            tilemap[across][down] = new Tile(textures[graphicMap[down][across]], x, y, tileSize, tileID);

            tileID++;
        }
    }

    console.log(tilemap[4][6].tileID)
    console.log(tilemap[4][6].x / tileSize);
}

function draw() {
    background(0);
    
    for (let across = 0; across < numAcross; across++) {
        for (let down = 0; down < numDown; down++) {
            //tilemap[across][down].debug();
            tilemap[across][down].display();

        }
    }
}

class Tile {
    constructor(texture, x, y, tileSize, tileID) {
        this.texture = texture;
        this.x = x;
        this.y = y;
        this.tileSize = tileSize;
        this.tileID = tileID;
    }
    display() {
        noStroke();
        image(this.texture, this.x, this.y, this.tileSize, this.tileSize);
    }
    debug() {
        //TILE
        stroke(245);
        noFill();
        rect(this.x, this.y, this.tileSize, this.tileSize);

        //LABEL
        noStroke();
        fill(255);
        textAlign(LEFT, TOP);

        let twoDigitID;
        if (this.tileID < 10) { //if only one digit...
            twoDigitID = "0" + this.tileID; // adds a "0" to the front of single digit tileIDs to make it 2 digits
        } else {
            twoDigitID = this.tileID; // or just use the original ID.
        }
        
        text(twoDigitID, this.x, this.y);
    }
}