function generateComputerChoice(){
  let randomNumber=Math.random() * 3;
  if(randomNumber>0 && randomNumber<=1){
          return 'Bat';
        }
        if(randomNumber>1 && randomNumber<=2){
          return 'Ball';
        }
           else{
             return 'Stump';
        }
}
function getResult(userChoice , computerChoice){
  if(userChoice === 'Bat'){
    if(computerChoice === 'Bat'){ 
      score.tie++;
      return 'Match Tie';     
}
    else if(computerChoice === 'Ball'){
      score.wins++;
      return 'User Won';
      }
    else if(computerChoice === 'Stump'){
      score.loss++;
      return 'Computer Won';
    }
    }
   else if(userChoice  === 'Ball'){
      if(computerChoice === 'Bat'){
        score.loss++;
         return 'Computer Won';
        }
      else if(computerChoice === 'Ball'){
        score.tie++;
      return 'Match Tie';
      }
      else if(computerChoice === 'Stump'){
        score.wins++;
      return 'User Won';
      }
     }
   else if (userChoice === 'Stump'){
      if(computerChoice === 'Bat'){
        score.wins++;
         return 'User Won';
        }
      else if(computerChoice === 'Ball'){
      score.loss++;
        return 'Computer Won';
      }
      else if (userChoice === 'Stump'){
        score.tie++;
        return 'Match Tie';
      }
     }
}
let scoreStr = localStorage.getItem('score');
let score;
resetScore(scoreStr);
 function resetScore (scoreStr )  {
    score = scoreStr ? JSON.parse(scoreStr) :{
      wins:0,
      loss:0,
      tie:0,
  };
  score.displayScore = function(){
    return `Wins :${score.wins}  Loss : ${score.loss}  Tie : ${score.tie}`;
  };
    showResult();
 }
function showResult( userChoice,computerChoice,result){
  localStorage.setItem('score',JSON.stringify(score))
  document.querySelector('#user-move').innerText= userChoice ? `User choice - ${userChoice}`:'';
  document.querySelector('#computer-move').innerText=computerChoice ?`computer Choice -  ${computerChoice}`:'';
  document.querySelector('#result').innerText=result? result:'';
  document.querySelector('#score').innerText=score.displayScore();
  }

if(scoreStr !== undefined){
  score =  JSON.parse(scoreStr)
}
else{
  score= {
    wins:0,
    loss:0,
    tie:0,
};
}
