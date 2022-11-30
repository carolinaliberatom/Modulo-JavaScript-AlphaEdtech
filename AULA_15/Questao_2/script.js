const flame = document.querySelector('#flame')
const bomb = document.querySelector('#bomb')
const body = document.querySelector('body')
const container = document.querySelector('.container')
const bombAudio = new Audio ('./som.mp3')
const tickAudio = new Audio ('./tick.mp3')
const p = document.querySelector('p')
const buttonSetBomb = document.querySelector('.set-bomb')

let i = 59

function setBomb() {
    const timeoutExplodir = setTimeout(explodir, 60000);
    const intervalTime = setInterval(timeLeft, 1000);
    buttonSetBomb.style.visibility = "hidden"
    container.style.cursor = 'pointer'

    /* TIME */
    function timeLeft() {
        flame.style.visibility = "visible"
        p.innerText = `${i} segundos`
        tickAudio.play()
        i--
    }

    /* EXPLODIR A BOMBA */
    function explodir() {
        body.style.backgroundImage = `url(Bomb-Explode.png)`
        container.style.visibility = `hidden`
        flame.style.visibility = "hidden"
        bombAudio.play()
        clearInterval(intervalTime)
    }

    /* PARAR A BOMBA */
    function apagarPavio() {
        clearTimeout(timeoutExplodir)
        flame.style.visibility = "hidden"
        clearInterval(intervalTime)
        buttonSetBomb.style.visibility = "visible"
        p.innerText = `` //resetando
        i = 59
        container.style.cursor = 'auto'
    }
    bomb.addEventListener('click', apagarPavio)
}
buttonSetBomb.addEventListener ('click', setBomb)


