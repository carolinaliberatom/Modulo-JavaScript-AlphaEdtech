const btnNumbers = document.getElementById("button");
const resultNumbers = document.getElementById("result-numbers");
/* Melhor prática utilizar const */

function valuesInputNumbers() { /* Após o click será lido o que está no input */
  const num1 = parseFloat(document.getElementById("number1").value, 10);
  const num2 = parseFloat(document.getElementById("number2").value, 10);

  if (num1 === num2) { /* Entre crases pode ser utilizado qualquer código dentro do ${} junto ao texto */
    return (resultNumbers.innerHTML = 'Os números são iguais!');
  }
  if (num1 > num2) {
    return (resultNumbers.innerHTML = ` O número ${num1} é maior que o número ${num2}!`)
  }
  return (resultNumbers.innerHTML = ` O número ${num2} é maior que o número ${num1}!`);
}

btnNumbers.addEventListener("click", valuesInputNumbers);

/* Função das strings */

const btnStrings = document.getElementById("button2");
const resultStrings = document.getElementById("result-strings");

function valuesInputStrings () {
    const stg1 = document.getElementById("text1").value;
    const stg2 = document.getElementById("text2").value;
    
    if (stg1.length === stg2.length) {
    return (resultStrings.innerHTML = 'As strings têm tamanhos iguais!');
    }
    if (stg1.length > stg2.length) {
        return (resultStrings.innerHTML = ` A string ${stg1} é maior que a string ${stg2}!`)
    }
    return (resultStrings.innerHTML = ` A string ${stg2} é maior que a string ${stg1}! `);
}

btnStrings.addEventListener("click", valuesInputStrings)