class Tile {
    constructor(x,y,wh,index,next) {
        this.x = x;
        this.y = y;
        this.wh = wh;
        this.index = index;
        this.next = next;
        this.color =random(255);
    }

    show() {
        fill(this.color);
        rect(this.x, this.y, this.wh, this.wh);
        fill(255);
        textSize(32);
        text(this.index + '-->' + this.next,this.x,this.y + this.wh)
    }
}