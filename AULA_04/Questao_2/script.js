const button = document.getElementById('button');
const sortText = document.querySelector('.sorteio-text');
const sortNumber = document.querySelector('.sorteio');
const erroText = document.querySelector('.error');

function sorteio() {

    const numMin = parseInt(document.getElementById('number-min').value, 10)
    const numMax = parseInt(document.getElementById('number-max').value, 10)

    // ERROR MESSAGE

    if (isNaN(numMax) || isNaN(numMin)) {
        return (
            erroText.innerHTML = `ERRO: Por favor insira somente números!`
        )
    }

    const number = Math.floor(Math.random() * (numMax - numMin + 1) + numMin);

    return (
        sortText.innerHTML = `Seu número sorteado é:`,
        sortNumber.innerHTML = number
    )

}

button.addEventListener ('click', sorteio)