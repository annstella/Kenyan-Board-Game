class Tile {
    constructor(x,y,wh,index,next) {
        this.x = x;
        this.y = y;
        this.wh = wh;
        this.index = index;
        this.next = next;
        if (this.index % 2 == 0){
            this.color =150; //change color of grid
        } else if (this.index % 5 == 0) {
            this.color = 120;
        } else if (this.index % 3 == 0) {
            this.color = 60;
        }
         else {
            this.color =40; 
        }   
    }

    getCenter() {
        let cx = this.x + this.wh / 2;
        let cy = this.y + this.wh / 2;
        return [cx, cy];
    }

    show() {
        fill(this.color);
        rect(this.x, this.y, this.wh, this.wh);
        fill(220);
        textSize(25);
        text( this.next,this.x,this.y + this.wh)
    }
}
