const suits = ["Copas", "Paus", "Ouro", "Espada"]
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"]
const deck = []
let arrayEquals = []
let card = {}
let oneCard = 0
let suitsHand = 0
let countSameSuits = 0
let valuesHand = 0
let countSameValues = 0
let countSequence = 0
let hand = []
const cardText = document.getElementById('cardText')
const primeiraCarta = document.getElementById("primeiraCarta")
const segundaCarta = document.getElementById("segundaCarta")
const terceiraCarta = document.getElementById("terceiraCarta")
const quartaCarta = document.getElementById("quartaCarta")
const quintaCarta = document.getElementById("quintaCarta")
const imgCard = [primeiraCarta, segundaCarta, terceiraCarta, quartaCarta, quintaCarta]
const textResult = document.getElementById("text")
let y = 0

function createDeck() {
  for (let suit in suits) { //cria um array com um objeto que contem naipe e valor
    for (let value in values) {
      deck.push(
        card = {
          suit: suit,
          value:value
        }
      )
    }
  }
  shurffleDeck()
  function shurffleDeck() { // embaralha o deck criado
    let deckLength = deck.length;  
    for (var i=0; i<deckLength; i++) {
      let randomNumber = Math.floor(Math.random() * deckLength);
      let tmp = deck[i];
      deck[i] = deck[randomNumber];
      deck[randomNumber] = tmp;
    }
  }
  console.log(deck)
  cardText.innerHTML = `Baralho criado e embaralhado!`
}

function showHand() {
  takeCards()
  function takeCards() {
    if (deck.length > 2) {
      let i = 0
    hand = []
    countSameSuits = 0
    countSameValues = 0
    while (hand.length < 5) {
      oneCard =  deck.pop() // método retira o ultimo item do array
      hand.push(oneCard)
      if (hand[i].suit == '0' ) { // Copas 
        imgCard[i].style.backgroundImage = `url('deck/${hand[i].value}H.svg')`
      }
      if (hand[i].suit == '1' ) { // Paus 
        imgCard[i].style.backgroundImage = `url('deck/${hand[i].value}C.svg')`
      }  
      if (hand[i].suit == '2' ) { // Ouro 
        imgCard[i].style.backgroundImage = `url('deck/${hand[i].value}D.svg')`
      }  
      if (hand[i].suit == '3' ) { // Espada 
        imgCard[i].style.backgroundImage = `url('deck/${hand[i].value}S.svg')`
      }   
      i++
    }
    cardText.innerHTML = `Faltam ${deck.length} cartas`
    getSuits() 
    function getSuits() { // criando um array somente dos naipes em ordem
      suitsHand = hand.map(item => item.suit).sort((a, b) => a - b)
      for (let x = 1; x < suitsHand.length + 1; x++) {
        if (suitsHand[x-1] == suitsHand[x]) {
          countSameSuits++
        }
      }
    }
    getValues() 
    function getValues() { // criando um array somente dos valores em ordem
      valuesHand = hand.map(item => item.value).sort((a, b) => a - b)
      arrayEquals = []
      for (let x = 1; x < valuesHand.length + 1; x++) {
        if (valuesHand[x-1] === valuesHand[x]) {
          countSameValues++
          arrayEquals.push(valuesHand[x-1])
        }
      }
      if (arrayEquals.length == 2) {
        if (arrayEquals[0] == arrayEquals[1]) { // trinca
          return y = 0
        }
        if (arrayEquals[0] !== arrayEquals[1]) { // 2 pares
          return y = 1
        }
      }
    }
    getSequencie()
    function getSequencie() {
      countSequence = 0 // número de sequencias
      for(var i = 1; i < 6; i++){ 
        if(valuesHand[i] - valuesHand[i-1] == 1) {
          countSequence++
        }
      }  
    }
    console.log("hand", hand) 
    console.log("values", valuesHand, countSameValues) 
    console.log("suits", suitsHand, countSameSuits)
    console.log("sequencie", valuesHand, countSequence)  
    checkResult()
    }
    if (deck.length <= 2) {
      cardText.innerHTML = `Somente ${deck.length} cartas, necessário criar mais um baralho ou resetar!`
      /* cardText.style.color = 'rgb(207, 197, 56)' */
      cardText.style.backgroundColor = 'white'
    }
  }
}

function checkResult() {
  // Royal Flush
  if (valuesHand[0] == "8" && valuesHand[1] == "9" && valuesHand[2] == "10" &&valuesHand[3] == "11" && valuesHand[4] == "12" && countSameSuits == 5) { 
    return textResult.innerHTML = `Royal Flush`
  } // Straight Flush
    else if (countSequence == 4 && countSameSuits == 5) {
    return textResult.innerHTML = `Você tem um <span> Straight Flush </span> !`
  } // Quadra
    else if (countSameValues == 3 && arrayEquals.every((item) => item == arrayEquals[0])) {
    return textResult.innerHTML = `Você tem uma <span> Quadra </span> !`
  } // Full House
    else if (countSameValues == 3 && arrayEquals.length == 3) {
    return textResult.innerHTML = `Você tem um <span> Full House </span> !`
  } // Flush
    else if (countSameSuits == 5) {
    return textResult.innerHTML = `Você tem um <span> Flush</span> !`
  } // Trinca
    else if (countSameValues == 2 && y == 0) {
    return textResult.innerHTML = `Você tem uma <span> Trinca </span> !`
  } // 2 Pairs
    else if (countSameValues == 2 && y == 1) {
    return textResult.innerHTML = `Você tem <span> 2  Pares </span> !`
  } // 1 Pair
    else if (countSameValues == 1) {
    return textResult.innerHTML = `Você tem um <span> Par </span> !`
  } // Lose
    else {
    return textResult.innerHTML = `Você perdeu, mais sorte na pŕoxima mão!!`
  }
}

function reset() {
  window.location.reload()
}