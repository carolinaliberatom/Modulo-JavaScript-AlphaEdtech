const button = document.getElementById('button')
const error = document.querySelector('.error');
const result = document.querySelector('.result');

function verify() {
    const number = parseFloat(document.getElementById('number').value)

    // MESSAGE ERROR

    if (isNaN(number)) {
        return (
            error.innerHTML = 'ERRO: Por favor, insira somente números não inteiros!'
        )
    }

    return (
        result.innerHTML = ` O maior número é ${ Math.ceil(number) } e o menor número é ${ Math.floor(number) } `
    )

}

button.addEventListener('click', verify)
