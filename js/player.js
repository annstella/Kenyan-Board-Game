class Player {
    constructor() {
        this.spot = 0;
    };

    question() {
        var userPrompt=prompt("Name one President of Kenya: ");
        var pres=["Mwai Kibaki","Jomo Kenyatta","Uhuru Kenyatta","Daniel Moi"];
        var presFound = false;
        for(var x=0; x<pres.length; x++){
            //console.log(pres[x]);
                if(pres[x]===userPrompt){
                    presFound = true;
                    player.roll();
                }
            }
                if(!presFound){
                    alert('invalid answer');
    }


     if (player.roll()) {
        var userPrompt1=prompt("Name any official language in Kenya: ");
        var lang=["English","Kiswahili"];
        var langFound = false;
        for(var x=0; x<lang.length; x++){
            //console.log(pres[x]);
                if(lang[x]===userPrompt1){
                    langFound = true;
                    player.roll();
                }
            }
                if(!langFound){
                    alert('invalid answer');
    }
     }

    }


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
