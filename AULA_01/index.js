var buttonPrint = document.querySelector('button'); /* querySelector - Retorna o primeiro elemento do documento com a classe button*/

buttonPrint.addEventListener('click', printConsole); /* Espera um evento, no caso click, para o elemento buttonPrint e dá start ao listener que é o printConsole */

function printConsole() { /* declararei a função printConsole */
    console.log ('Olá Console')
}