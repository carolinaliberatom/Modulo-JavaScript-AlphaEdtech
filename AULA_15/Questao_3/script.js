const input = document.querySelector('input')
const buttonInsert = document.querySelector('.insert')
const buttonInit = document.querySelector('.init')
const minutesSelec = document.querySelector('.minutesSelec')
const secondsSelec = document.querySelector('.secondsSelec')
const timeDisplay = document.querySelector('p')
const h1 = document.querySelector('h1')
const alarmAudio = new Audio ('./som-de-alarme.mp3')
let time = 0
let intervalID = 0
let timeoutID = 0

let x = 0
while (x < 61) { // criação dos options dentro do select
    const tagOptionMin = document.createElement('option')
    minutesSelec.appendChild(tagOptionMin)
    
    if (x<10) {
        tagOptionMin.innerText = `0${x}`
        tagOptionMin.setAttribute('value', `0${x*60000}`)// já saindo em milissegundos
    }
    else {
        tagOptionMin.innerText = `${x}`
        tagOptionMin.setAttribute('value', `${x*60000}`) 
    }
    const tagOptionSec = document.createElement('option')
    secondsSelec.appendChild(tagOptionSec)
    if (x<10) {
        tagOptionSec.innerText = `0${x}`
        tagOptionSec.setAttribute('value', `0${x*1000}`)
    }
    else {
        tagOptionSec.innerText = `${x}`
        tagOptionSec.setAttribute('value', `${x*1000}`)
    }
    x++
}

/* INSERINDO O TEMPO DESEJADO */
buttonInsert.addEventListener('click', function() {
    time = parseInt(minutesSelec.value) + parseInt(secondsSelec.value) // pega os valores em milis e soma
    timeDisplay.innerText = millisToMinutesAndSeconds(time) // mostra o tempo setado nos selects
})


buttonInit.addEventListener('click', function() {
    const porcent = 0.05*time
    if(buttonInit.textContent == "Iniciar alarme") {
            setTimeout(() => {
            clearInterval(intervalID)
            intervalID = setInterval(() => { // Ao final da regressiva toca o alarme
                alarmAudio.play()
            }, 1000);
        }, time+1000);
    
        intervalID = setInterval(() => {
            time = time - 1000
            timeDisplay.innerText = millisToMinutesAndSeconds(time)
            if (time < porcent) { // menos que 5% troca o h1
                h1.innerText = "O tempo está acabando!"
            }
            console.log(porcent, time)
        }, 1000);
        buttonInit.innerText = "Desarmar!"
    }
    else {
        clearInterval(intervalID)
        buttonInit.innerText = "Iniciar alarme"
        time = 0
        timeDisplay.innerText = `00:00`
    }
})

/* CONVERTE MILISSEGUNDO EM MIN:SEC */
function millisToMinutesAndSeconds(millis) {  // 
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}