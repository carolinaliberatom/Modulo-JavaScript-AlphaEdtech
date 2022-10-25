const button = document.getElementById('button');
const erro = document.querySelector('.erro');
const body = document.getElementsByTagName('body');

function verify() {
    const number = document.getElementById('number').value;

    switch (number) {
        case '0':
            document.getElementById('result').value += `Zero`;
            break;
        case '1':
            document.getElementById('result').value += `Um`;
            break;
        case '2':
            document.getElementById('result').value += `Dois`;
            break;
        case '3':
            document.getElementById('result').value += `Três`;
            break;
        case '4':
            document.getElementById('result').value += `Quatro`;
            break;
        case '5':
            document.getElementById('result').value += `Cinco`;
            break;
        case '6':
            document.getElementById('result').value += `Seis`;
            break;
        case '7':
            document.getElementById('result').value += `Sete`;
            break;
        case '8':
            document.getElementById('result').value += `Oito`;
            break;
        case '9':
            document.getElementById('result').value += `Nove`;
            break;
        case '10':
            document.getElementById('result').value += `Dez`;
            break;
        default:
            erro.innerHTML = `ERRO: Por favor, coloque somente números de 0 a 10!`
    }
}

button.addEventListener('click', verify);

// REFRESH

const buttonReset = document.querySelector('.reset')

function refresh() {
    window.location.reload()
}

buttonReset.addEventListener ('click', refresh)