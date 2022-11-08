const butSoma = document.getElementById('butSoma')
const text = document.getElementById('text')

function calc (num1, num2) { 
    num1 =  parseFloat(document.getElementById('number1').value);
    num2 =  parseFloat(document.getElementById('number2').value);

    try {
        if (num1 == '') throw "Primeiro input vazio!"
        if (num2 == '') throw "Segundo input vazio!"
        else {
            switch (event.target.value) {
                case 'Somar':
                    return text.innerHTML = `Resultado: ${num1 + num2}`
                    break
                case 'Subtrair':
                    return text.innerHTML = `Resultado: ${num1 - num2}`
                    break
                case 'Potencializar':
                    return text.innerHTML = `Resultado: ${Math.pow(num1, num2)}`
                    break
                case 'Multiplicar':
                    return text.innerHTML = `Resultado: ${num1 * num2}`
                    break
                case 'Dividir':
                    return text.innerHTML = `Resultado: ${num1 / num2}`
                    break
            }
        }
    } catch (error) {
        text.innerHTML = `Erro: ${error}`
    }

    
}