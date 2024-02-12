//Enemies
let player;
let enemies = [];
let enemySize = 48;
let numEnemies = 100;
let enemySpeed = 5;
let enemyHP = 100;

//sprite variables
let enemySprite;
let playerSprite;

function preload() {
    enemySprite = loadImage("enemy.png");
    playerSprite = loadImage("player.png");
}

function setup() {
    createCanvas(500, 500);
    
    player = new Player(playerSprite, 250, 250, 50, 5, 100);

    //FOR LOOP TO CREATE GOOMBAS - Store Goombas in array
    for (let enemyCount = 0; enemyCount < numEnemies; enemyCount++) {
        enemies[enemyCount] = new Enemy(enemySprite,
                                        random(0, width),
                                        random(0, height),
                                        enemySize,
                                        enemySpeed,
                                        enemyHP)
    }
}

function draw() {
    background(245);

    player.display();

    //FOR LOOP TO DISPLAY GOOMBAS - Access instances of goombas from array created in setup()
    for (let enemyCount = 0; enemyCount < numEnemies; enemyCount++) {
        enemies[enemyCount].display();
    
    }
    for (let enemyCount = 0; enemyCount < numEnemies; enemyCount++) {
        enemies[enemyCount].move();
    
    }
}   

class Enemy {
    constructor(sprite, x, y, size, speed, hp) {
        this.sprite = sprite;
        this.x = x;
        this.y = y;
        this.size = size;
        this.speed = speed;
        this.hp = hp;
    }

    display() {
        image(this.sprite, this.x, this.y, this.size);
    }

    move() {
        this.x += this.speed;
    }
}

class Player{
    constructor(sprite, x, y, size, speed, hp){
        this.sprite = sprite;
        this.x = x;
        this.y = y;
        this.size = size;
        this.speed = speed;
        this.hp = hp;
    }

    display() {
        image(this.sprite, this.x, this.y, this.size);
    }
}