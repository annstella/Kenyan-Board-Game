class Player {
    constructor() {
        this.spot = 0;
    };



    
    var dice = {
        sides: 6,
        roll: function () {
        var randomNumber = Math.floor(Math.random() * this.sides) + 1;
        return randomNumber;
  }
}
}
function printNumber(number) {
  var placeholder = document.getElementById('placeholder');
  placeholder.innerHTML = number;
}

var button = document.getElementById('button');

button.onclick = function() {
  var result = dice.roll();
  printNumber(result);
};
        // let placeholder = document.getElementById('placeholder');
        // // let status = document.getElementById('status');
        // let r = floor(random(1,7));
        // // let r =Math.floor(Math.random() * 6)
        // this.spot += r;
        // return placeholder.innerHTML = r;
        // status.innerHTML = "You rolled "+r+"";

    }

    show(tile) {
        let current = tiles[this.spot];
        fill(255);
        let center = current.getCenter();
        return ellipse(center[0], center[1],32);


}


}
