const flame = document.querySelector('#flame')
const bomb = document.querySelector('#bomb')
const body = document.querySelector('body')
const container = document.querySelector('.container')
const bombAudio = new Audio ('./som.mp3')
const buttonSetBomb = document.querySelector('.set-bomb')

function setBomb() {
    const timeoutExplodir = setTimeout(explodir, 10000);
    buttonSetBomb.style.visibility = "hidden"
    flame.style.visibility = "visible"
    container.style.cursor = 'pointer'

    /* EXPLODIR A BOMBA */
    function explodir() {
        body.style.backgroundImage = `url(Bomb-Explode.png)`
        container.style.visibility = `hidden`
        flame.style.visibility = "hidden"
        bombAudio.play()
    }

    /* PARAR A BOMBA */
    function apagarPavio() {
        clearTimeout(timeoutExplodir)
        flame.style.visibility = "hidden"
        buttonSetBomb.style.visibility = "visible"
        container.style.cursor = 'auto'
    }
    bomb.addEventListener('click', apagarPavio)
}
buttonSetBomb.addEventListener ('click', setBomb)


