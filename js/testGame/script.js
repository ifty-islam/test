function rpsGame(yourCho) {
  var human1=yourCho;
  var bot1 =["rock","paper","scissor"][botC()];
  console.log("You Chose " + human1);
  console.log("Computer Chose " + bot1)
  var result=decideWinner(human1,bot1);
  var message=final(result,human1,bot1);
}
function botC() {
  return Math.floor(Math.random()*3);
}

function decideWinner(human,bot) {
  var db={
    "rock":{"scissor":1,"paper": 0, "rock":0.5},
    "paper":{"scissor":0,"paper":0.5,"rock":1},
    "scissor":{"scissor":0.5,"rock":0,"paper":1}
  };
  var huScore=db[human][bot];
  var boScore=db[bot][human];
  return [huScore,boScore];
}
  var botScore=0;
  var humanScore=0;
function final([human,bot],human1,bot1) {
  
  if(human==1)
    {
      console.log("You Won")
      humanScore++;
      document.getElementById("container-2").style.display="flex";
      document.getElementById("h").innerHTML=human1;
      document.getElementById("b").innerHTML=bot1;
      document.getElementById("hscore").innerHTML=humanScore;
      document.getElementById("res").innerHTML="You Won!";
    }
  else if(human==0)
    {
      console.log("You Lose")
      botScore++;
      document.getElementById("container-2").style.display="flex";
      document.getElementById("h").innerHTML=human1;
      document.getElementById("b").innerHTML=bot1;
      document.getElementById("bscore").innerHTML=botScore;
      document.getElementById("res").innerHTML="You Lose!";
    }
  else {
    console.log("Draw")
    document.getElementById("container-2").style.display="flex";
    document.getElementById("h").innerHTML=human1;
    document.getElementById("b").innerHTML=bot1;
    document.getElementById("res").innerHTML="Draw";
  }
}
function reset(){
  botScore=0;
  humanScore=0;
  document.getElementById("bscore").innerHTML=botScore;
  document.getElementById("hscore").innerHTML=humanScore;
  document.getElementById("container-2").style.display="none";
  document.getElementById("res").style.display="none";
}