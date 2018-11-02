let Game = {
   deck: null,
   players: {},
   playersTurn: null,
   topCard: null
}

function makeNewCards(){
   const cards = [
       'red_0',
       'red_1', 'red_2', 'red_3', 'red_4', 'red_5', 'red_6', 'red_7', 'red_8', 'red_9',
       'red_1', 'red_2', 'red_3', 'red_4', 'red_5', 'red_6', 'red_7', 'red_8', 'red_9',
       'red_skip', 'red_reverse', 'red_draw_two',
       'red_skip', 'red_reverse', 'red_draw_two',

       'green_0',
       'green_1', 'green_2', 'green_3', 'green_4', 'green_5', 'green_6', 'green_7', 'green_8', 'green_9',
       'green_1', 'green_2', 'green_3', 'green_4', 'green_5', 'green_6', 'green_7', 'green_8', 'green_9',
       'green_skip', 'green_reverse', 'green_draw_two',
       'green_skip', 'green_reverse', 'green_draw_two',

       'blue_0',
       'blue_1', 'blue_2', 'blue_3', 'blue_4', 'blue_5', 'blue_6', 'blue_7', 'blue_8', 'blue_9',
       'blue_1', 'blue_2', 'blue_3', 'blue_4', 'blue_5', 'blue_6', 'blue_7', 'blue_8', 'blue_9',
       'blue_skip', 'blue_reverse', 'blue_draw_two',
       'blue_skip', 'blue_reverse', 'blue_draw_two',

       'yellow_0',
       'yellow_1', 'yellow_2', 'yellow_3', 'yellow_4', 'yellow_5', 'yellow_6', 'yellow_7', 'yellow_8', 'yellow_9',
       'yellow_1', 'yellow_2', 'yellow_3', 'yellow_4', 'yellow_5', 'yellow_6', 'yellow_7', 'yellow_8', 'yellow_9',
       'yellow_skip', 'yellow_reverse', 'yellow_draw_two',
       'yellow_skip', 'yellow_reverse', 'yellow_draw_two',

       'draw_four_wild','draw_four_wild', 'wild', 'wild',
       'draw_four_wild','draw_four_wild', 'wild', 'wild',
   ]

   return cards
}

// create a function that takes an array of cards
// and returns a new array of shuffled cards
function shuffle( cards ){
   // create an array to hold the shuffled cards
   const deck = [ ]
   // algorithm to shuffle a deck of cards
   // as long as there are cards in the cards array
   while (cards.length > 0) {
       // pick a random number between 0 and the length of the cards array
       let randomNumber = Math.floor(Math.random() * cards.length)
       // then use that number to pick a card
       let card = cards[randomNumber]
       // console.log('card is '+card)
       // push that card onto the new deck
       deck.push(card)
       // remove the card from the original deck
       cards.splice(randomNumber, 1)
   }
   return deck
}

function dealCard(deck){
   return deck.shift()
}

function startNewGame(){
   let cards = makeNewCards()

   let deck = shuffle(cards)

   Game.deck = deck
   showGameObject()

   const playerNames = ['Ish', 'Jeremy', 'Devin', 'Misa']
   const ALPHABET = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
   for (let i = 0; i < playerNames.length; i++){
       let name = playerNames[i]
       let id = ALPHABET[i]
       let player = createNewPlayer(name, id)
       Game.players[id] = player
   }
   let discard = dealCard(Game.deck)
   let topCard = document.querySelector('#deck')
   topCard.setAttribute('src', 'images/' +discard+ '.png')

   showGameObject()
}

function createNewPlayer(playerName, id){
   let player = {
       id: id,
       name: playerName,
       cards: [ ],
       points: 0
   }
   for(let i = 0; i < 7; i++){
       let card =dealCard(Game.deck)
       player.cards.push(card)
   }
   return player
}
function showGameObject(){
   var codeSection = document.querySelector('#game-object')
   codeSection.innerHTML = JSON.stringify(Game, null, 2)
}

function changePlayerTurn(){
   const ALPHABET = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
}
function getColorOfCard(cardName){

}
function changePlayerTurn(){}
function getColorOfCard(){}
function getNumberOfCard(){}
function playCard(){}
function playerDrawCard(){}
function skipTurn(){}
function playerDrawTwo(){}
function playerDrawFour(){}
function reverseTurn(){}