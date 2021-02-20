class Contestant {
    constructor(){
      this.index=null;
      this.distance=0;
      this.name=null;
    }
  
    getCount(){
      var contestantCountRef = database.ref('contestantCount');
      contestantCountRef.on("value",function(data){
        contestantCount = data.val();
      })
    }

    updateCount(count){
      database.ref('/').update({
        contestantCount: count
      });
    }
    
    update(){
      var contestantIndex = "players/player" + this.index;
      database.ref(contestantIndex).set({
        name:this.name,
        distance:this.distance
      });
  
    }
  
  static getContestantInfo(){
    var contestantInfoRef=database.ref("contestant")
    contestantInfoRef.on("value",(data)=>{
      allContestants=data.val()
    })
  }  

  play(){
    question.hidden();
    textSize(30)
    text("GAME IS STARTING",120,100)
    Quiz.getPlayerInfo();
    if(allPlayers!== undefined){
  var display_position=130
  for(var plr in allPlayers){
    if(plr==="player"+player.index){
      fill("red")
    }
    else{
      fill("black");
    }
    display_position+=20;
    textSize(15)
    text(allPlayers[plr].name+ ":"+ allPlayers[plr].distance,120,display_position)
  }      
    }
  }
  }
  