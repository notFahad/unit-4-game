$(document).ready(function(){
    var randomN=Math.floor(Math.random()*101+19)
    $('#randomnumber').text(randomN);
    var n1= Math.floor(Math.random()*12+1)
    var n2= Math.floor(Math.random()*12)
    var n3= Math.floor(Math.random()*12)
    var n4= Math.floor(Math.random()*12)
    var userTotal= 0; 
    var wins= 0;
    var losses = 0;
  $('#numberWins').text(wins);
  $('#numberLosses').text(losses);
  function reset(){
        randomN=Math.floor(Math.random()*101+19);
        console.log(randomN)
        $('#randomnumber').text(randomN);
        n1= Math.floor(Math.random()*11+1);
        n2= Math.floor(Math.random()*11+1);
        n3= Math.floor(Math.random()*11+1);
        n4= Math.floor(Math.random()*11+1);
        userTotal= 0;
        $('#finalTotal').text(userTotal);
        } 
  function winnerGame(){
  alert("You win!");
    wins++; 
    $('#numberWins').text(wins);
    reset();
  }
  function loserGame(){
  alert ("You lose!");
    losses++;
    $('#numberLosses').text(losses);
    reset()
  }
    $('#one').on('click', function(){
      userTotal = userTotal + n1;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
          if (userTotal == randomN){
            winnerGame();
          }
          else if ( userTotal > randomN){
            loserGame();
          }   
    })  
    $('#two').on('click', function(){
      userTotal = userTotal + n2;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
          if (userTotal == randomN){
            winnerGame();
          }
          else if ( userTotal > randomN){
            loserGame();
          } 
    })  
    $('#three').on('click', function(){
      userTotal = userTotal + n3;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal);
            if (userTotal == randomN){
            winnerGame();
          }
          else if ( userTotal > randomN){
            loserGame();
          } 
    })  
    $('#four').on('click', function(){
      userTotal = userTotal + n4;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
            if (userTotal == randomN){
            winnerGame();
          }
          else if ( userTotal > randomN){
            loserGame();
          }
    });   
  }); 