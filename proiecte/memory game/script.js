const game = document.getElementById('container')
const selectedCards = document.getElementsByClassName('active')
const foundCards = document.getElementsByClassName('found')

const emoji = ['🥚','🥚','🍧','🍧','🍩','🍩','🌴','🌴','🎟','🎟']
let score = 0;
let scoreDisplay = document.getElementById('score')
scoreDisplay.textContent = 'Score:' + score
function newGame() {
    shuffle()
    createCards()
}

function shuffle(){
    let listLenght = emoji.length
    let randomIndex;
    let temp;
    for(let i = 0; i<listLenght; i++){
        randomIndex = Math.floor(Math.random() * listLenght)
        temp = emoji[i];
        emoji[i] = emoji[randomIndex]
        emoji[randomIndex] = temp
    }
}

function createCards(){
    game.innerHTML = '';
    for( let i = 0; i<emoji.length; i++){
        const card = document.createElement('div');
        const text = document.createElement('p');

        text.textContent = emoji[i];
        card.append(text);
        card.classList.add('card');
        card.setAttribute('onclick' , 'match(this)')

        game.append(card)
    }
}

function match(card){
    if(card.classList.contains('found') || selectedCards.length >= 2){
        return;
    }

    card.classList.add('active')
    if(selectedCards.length == 2){
        setTimeout(function(){
            if(selectedCards[0].textContent == selectedCards[1].textContent){
                selectedCards[0].classList.add('found')
                selectedCards[1].classList.add('found')
            }
            selectedCards[1].classList.remove('active')
            selectedCards[0].classList.remove('active')

            if(foundCards.length == emoji.length){
                newGame()
                score++;
                scoreDisplay.textContent = 'Score:' + score
            }
        }, 500)
    }

}
newGame()