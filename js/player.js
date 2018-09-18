class Player {
    constructor() {
        this.spot = 0;
    };
    
   
    roll() {
        let die1 = document.getElementById('die1');
        let status = document.getElementById('status'); 
        let r = floor(random(1,7));
        // let r =Math.floor(Math.random() * 6)
        this.spot += r;
        return die1.innerHTML = r;
        // status.innerHTML = "You rolled "+r+"";

    }
    
    show(tile) {
        let current = tiles[this.spot];
        fill(255);
        let center = current.getCenter();
        return ellipse(center[0], center[1],32);


}
    
    
}
 