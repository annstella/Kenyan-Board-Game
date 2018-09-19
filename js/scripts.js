let tiles = [];
let player;
 function setup() {
    createCanvas(600,600);
    createCanvas(700,700);
     let resolution = 60;
    let resolution = 70;
    let cols = width / resolution;
    let rows = height / resolution;
    let x = 0;
    let y = (rows-1) * resolution;
    let dir = 1;
    for (let i=0; i<cols*rows ; i++) {
        let tile = new Tile(x, y, resolution,i, i+1);
        tiles.push(tile);
        x = x + (resolution * dir);
        if (x >= width || x <= -resolution) {
           dir *= -1;
           x += resolution * dir;
           y -= resolution;
        }       
    }

    player = new Player();
}

function draw() {
    background(51);

    for (let tile of tiles) {
        tile.show();
    }
    
    // player.roll();
    
    if (player.spot >= tiles.length-1) {
     player.spot = tiles.length-1;
     console.log('game over'); 
     noLoop(); 
    }
 

    player.show(tiles);    
}

