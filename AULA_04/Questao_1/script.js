const button = document.querySelector('.button');
const resultIMC = document.querySelector('.result-imc');
const resultClass = document.querySelector('.result-class');
const error = document.querySelector('.error')

function imcCalc() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    
    // MESSAGE ERROR 

    if (isNaN(weight)) {
        return (error.innerHTML = 'ERRO: Por favor insira seu peso em kilogramas somente em números!');
    }
    if (isNaN(height)) {
        return (error.innerHTML = 'ERRO: Por favor insira sua altura em metros, utilizando números e ponto!');
    }

    // IMC AND CLASSIFICATION LOGIC

    const imcFloat = weight / Math.pow(height, 2);

    const imc = imcFloat.toFixed(1)

    if (imc < 18.5) {
        classIMC = 'Abaixo do Peso'
    }
    if ( imc >= 18.6 && imc <= 24.9 ) {
        classIMC = 'Peso Normal'
    }
    if (imc >= 25 && imc <= 29.9 ) {
        classIMC = 'Sobrepeso'
    }
    if (imc > 30) {
        (classIMC = 'Obesidade')
    }

    resultIMC.innerHTML = `Seu IMC é ${imc}`

    resultClass.innerHTML = `Sua classificação é ${classIMC}`
}

button.addEventListener ('click', imcCalc);

// BUTTON RESET 

const buttonReset = document.querySelector('.reset')

function refresh() {
    window.location.reload()
}

buttonReset.addEventListener ('click', refresh)