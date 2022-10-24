const btn = document.querySelector('.button');
const result = document.querySelector('.result');
const select = document.querySelector('.operator');
const opr = document.querySelector('.opr');

function sinal () {

    if (select.selectedIndex ==0) {
        return (opr.innerHTML = '+')
    }
    if (select.selectedIndex==1) {
        return ( opr.innerHTML = '-' )
    }
    if (select.selectedIndex==2) {
        return ( opr.innerHTML = 'x' )
    }
    if (select.selectedIndex==3) {
        return (opr.innerHTML = '/')
    }
}

select.addEventListener ("change", sinal)

function calculator() {
    const operando1 = parseFloat(document.querySelector('.number1').value);
    const operando2 = parseFloat(document.querySelector('.number2').value);
    const select = document.querySelector('.operator');
    
    if (select.selectedIndex === 0) {
        const soma = operando1 + operando2;
        return (result.innerHTML = `${operando1} somado a ${operando2} é igual a ${soma}!`, console.log("O resultado é:", soma) )
    }
    
    if (select.selectedIndex === 1) {
        const subtracao = operando1 - operando2;
        return (result.innerHTML = `${operando1} subtraido por ${operando2} é igual a ${subtracao}!`, console.log("O resultado é:", subtracao))
    }

    if (select.selectedIndex === 2) {
        const multiplicacao = operando1 * operando2;
        return (result.innerHTML = `${operando1} multiplicado por ${operando2} é igual a ${multiplicacao}!`, console.log("O resultado é:", multiplicacao))
    }

    else {
        if (operando1 % operando2 === 0) {
            const divisao = operando1 / operando2;
            return (result.innerHTML = `${operando1} dividido por ${operando2} é igual a ${divisao}!`, console.log("O resultado é:", divisao))
        }
        else {
            const divisao = operando1 / operando2;
            const resto = operando1 % operando2;
            return (result.innerHTML = `${operando1} dividido por ${operando2} é igual a ${divisao} e seu resto é ${resto} !`, console.log("O resultado é:", divisao, "e seu resto é", resto))
        }
    }
}

btn.addEventListener('click', calculator)