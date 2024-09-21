// if choose cancel -> alright May be next Time...
// if entered but null input-> player Enter blank Box -> you Selected Nothing...
// if entered wrong input -> please Enter Rock Paper or scissor...
// if Player entry exists in array then calculate... 


const arrayOfChances = ['rock', 'paper', 'scissor'];

const playGame = confirm("Let's Play Rock, Paper, Scissor");
// let value;

if(playGame){
    const playerInput = prompt('Please enter Rock, Paper or Scissor');

    if(playerInput ?? null){
        if(arrayOfChances.indexOf(playerInput.trim().toLowerCase())=== -1){
            alert(`Please enter \nRock \nPaper \nScissor only`)
        }else{
            let randomChoice = Math.floor(Math.random()*arrayOfChances.length);
            let computer = arrayOfChances[randomChoice];
            let player = playerInput.trim().toLowerCase();
            if(computer===player){
                alert(`You: ${player}\n Computer: ${computer}\n Match Draw 🤝`)
                
            }else if(computer==='rock'&& player === 'paper'){
                alert(`You: ${player}\n Computer: ${computer}\n Congratulations You Win 🏆`)
                
            }else if(computer==='scissor' && player === 'rock'){
                alert(`You: ${player}\n Computer: ${computer}\n Congratulations You Win 🏆`)
                
            }else if(computer === 'paper' && player === 'scissor'){
                alert(`You: ${player}\n Computer: ${computer}\n Congratulations You Win 🏆`)
                
            }else{
                alert(`You: ${player}\n Computer: ${computer}\n Bad luck AI Wins 🤖`)
                
            }


            const playAgain = confirm('Wish to Play Another Round?');
            if(playAgain){
                location.reload();
            }else{
                alert('Thanks for Playing')
            }
        }
    }else{
        alert("You Selected nothing")
    }
    
}else{
    alert("Alright May be next time ☺️")
}

