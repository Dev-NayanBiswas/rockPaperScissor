const myModal = document.querySelector('.modal');

function playGame() {
    const arrayOfChances = ['rock', 'paper', 'scissor'];
    const permission = confirm("Let's Play Rock, Paper, Scissor");
    let AI = "https://media.lordicon.com/icons/wired/lineal/2511-artificial-intelligence-ai.json";
    let trophy = "https://media.lordicon.com/icons/wired/lineal/433-cup-prize.json";
    let draw = "https://media.lordicon.com/icons/wired/lineal/456-handshake-deal.json";

    !permission ? 
    (()=>{alert("Alright May be next Time"); deactivateModal(myModal)})() : !(playerInput = prompt('Please enter Rock, Paper or Scissor')) ? 
    (()=>{alert("you selected nothing"); deactivateModal(myModal)})() : (arrayOfChances.indexOf(playerInput.trim().toLowerCase())=== -1)?
    (()=>{alert(`Please enter \nRock \nPaper \nScissor only`); deactivateModal(myModal); reload()})() : (()=>{
        let randomChoice = Math.floor(Math.random()*arrayOfChances.length);
            let computer = arrayOfChances[randomChoice];
            let player = playerInput.trim().toLowerCase();
            computer === player?
            modalArticles(draw, 'Match Draw', `You:${player} \tAI:${computer}`)
            : (computer === 'rock' && player === 'paper') || (computer === 'scissor' && player === 'rock') || (computer === 'paper' && player === 'scissor')?
            modalArticles(trophy, 'You Win', `You:${player} \tAI:${computer}`) 
            :
            modalArticles(AI, 'AI Wins', `You:${player} \tAI:${computer}`)
            
    })()

}








//TryAgain ...
document.querySelector('#tryAgain').addEventListener('click', function () {
    deactivateModal(myModal)
    reload();
})


function reload(){
    location.reload()
}

// Quit Game...
document.querySelector('#quitGame').addEventListener('click', function () {
    deactivateModal(myModal)
    alert('Thanks for Playing')
})




// Set Modal Articles 
function modalArticles(setIcon, whoWins, hints) {
    
    document.getElementsByTagName('lord-icon')[0].setAttribute('src', setIcon)
    document.querySelector('.whoWins').textContent=whoWins;
    document.querySelector('.hints').textContent=hints;
    activeModal(myModal)
}

//to Open Modals
function activeModal(modal) {
    document.querySelector('.overlay').removeAttribute("hidden", false)
    modal.classList.remove('hide')
}


// to show Modals
function deactivateModal(modal) {
    document.querySelector('.overlay').setAttribute("hidden", true)
    modal.classList.add('hide')
}


playGame();