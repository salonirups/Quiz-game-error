var canvas;
var gameState, contestantCount, database, quiz, question, contestant;
var quiz=new Quiz();

function setup(){
  canvas = createCanvas(850,400);
  quiz.getGameState();
  quiz.start()
  database=firebase.database()
}


function draw(){
  background("pink");

  
}
