class Tile {
    constructor(x,y,wh,index,next) {
        this.x = x;
        this.y = y;
        this.wh = wh;
        this.index = index;
        this.next = next;
        if (this.index % 2 == 0){
<<<<<<< HEAD:public/js/tile.js
            this.color =150; //change color of grid
        } else if (this.index % 5 == 0) {
            this.color = 120;
        } else if (this.index % 3 == 0) {
            this.color = 60;
=======
            this.color = 200; //change color of grid
        } else if (this.index % 5 == 0) {
            this.color = 100;
        }
         else {
            this.color =100;
>>>>>>> development:js/tile.js
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
<<<<<<< HEAD:public/js/tile.js
        fill(220);
=======
        fill(255);
>>>>>>> development:js/tile.js
        textSize(25);
        text( this.next,this.x,this.y + this.wh)
    }
 }
