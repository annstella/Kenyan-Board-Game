var game_on = true;
var q_count = 0;
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

    question() {
        var questions = [
            {
                prompt: "1. What are the two official languages of Kenya?\n(a) english and kiswahili\n(b) kikuyu and Luo\n(c)French and German\n\n",
                answer: "a"
            },
            {
                prompt: "2. Which is the staple food of Kenya?\n(a)ugali na sukuma wiki\n(b)pilau\n(c)chapo madondo\n\n", 
                answer: "a"
            },
            {
                prompt:"3. What is the most popular religion practised in Kenya?\n(a) christianity\n(b)islam\n(c)hindu\n\n",
                answer: "a"
            },
            {
                prompt:"4. Mount Kenya is Kenya's highest mountain. Is it a dormant, extinct or active volcano?\n(a)dormant\n(b)extinct\n(c)active volcano\n\n",
                answer: "a"
            },
            {
                prompt:"5. In which year did Kenya win independence?\n(a)1962\n(b)1963\n(c)1964\n\n",
                answer: "a"
            },
            {
                prompt:"6. Cement is an export of Kenya. True or False?\n(a)True\n(b)False\n(c) i dont know\n\n",
                answer: "a"
            },
            {
                prompt:"7. Which lake is shared by Kenya, Uganda and Tanzania?\n(a) Turkana\n(b) Victoria\n(c) Albert\n\n",
                answer: "a"
            },
            {
                prompt:"8. When were the Portuguese expelled from Kenya?\n(a) 1526\n(b) 1648\n(c) 1729\n\n",
                answer: "a"
            },
            {
                prompt:"9. About when did various African people begIn settling in Kenya?\n(a)About 200 B.C\n(b)About 2000 B.C.\n(c)About 20000 B.C \n\n",
                answer: "a"
            },
            {
                prompt:"10. What was the name of the movie based on a true story of 'the man eaters of Tsavo' starring Michael Douglas?\n(a) The man eaters of Tsavo\n(b) The Ghost and the Darkness\n(c)The Lion who ate people\n\n",
                answer: "a"
            },
        ]

        
       
        while (game_on) {
            for(var i = 0; i< 11; i++){

                // console.log(i);
                
                var response = window.prompt(questions[floor(random(1,11))].prompt)
        
                    
            if(response != questions[i].answer){
                alert("WRONG!!");
               
                // 
            }  else {
                alert("Correct!!");
               return player.roll();
            }
        }
        
           }
        // alert("You got" + r + "/" + questions.length);
        
    //    var userPrompt=prompt("Name one President of Kenya: ");
    //    var pres=["Mwai Kibaki","Jomo Kenyatta","Uhuru Kenyatta","Daniel Moi"];
    //     var presFound = false;
    //     for(var x=0; x<pres.length; x++){
    //         console.log(pres[x]);
    //             if(pres[x]===userPrompt){
    //                presFound = true;
    //                player.roll();
    //             }
    //         }
    //             if(!presFound){
    //                alert('invalid answer');
    // }
    

    }
    
    
    show(tile) {
        let current = tiles[this.spot];
        fill(0);
        let center = current.getCenter();
        return ellipse(center[0], center[1],32);


}
    
    
}
 