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