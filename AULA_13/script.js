const cells = document.querySelectorAll(".elemento");
var numJogada = 0;
const re = [1, 2, 3, 4, 5, 6, 7, 8, 9] // não podem estar iguais
const arr = Array.prototype.slice.call(cells);
const text = document.querySelector("#text");
const div = document.querySelector(".game");


arr.forEach((cell) => {
    cell.addEventListener("click", function (e) {
        preencher(e);
    })
});

function preencher(e) {
    numJogada += 1;
    console.log(`num jogada = ${numJogada}`);
    console.log(`array jogada = ${re}`);
    if (numJogada % 2 === 1) {
        e.target.style.backgroundImage = "url('public/x.png')";
        e.target.style.pointerEvents = 'none';
        const i = e.target.dataset.cell; // pega a posição de onde foi a jogada
        re.splice(i,1,"X"); // adiciona o X na posição indicada e deleta um item
        text.innerHTML = `Vez do O`;
        logicaResulado();
    } else {
        e.target.style.backgroundImage = "url('public/bola.webp')";
        e.target.style.pointerEvents = 'none';
        const i = e.target.dataset.cell;
        re.splice(i,1,"O");
        text.innerHTML = `Vez do X`;
        logicaResulado();
    }
}

function logicaResulado (){
////// linhas
console.log(re, re[0] == re[1])
    if( re[0] === re[1] && re[1] === re[2] ){
        text.innerHTML = `O ganhador foi ${re[0]}`;
        div.style.pointerEvents = 'none';
    }
    if( re[3] === re[4] && re[4] === re[5] ){
        text.innerHTML = `O ganhador foi ${re[3]}`;
        div.style.pointerEvents = 'none';
    }
    if(re[6] == re[7] && re[7] === re[8] ){
        text.innerHTML = `O ganhador foi ${re[6]}`;
        div.style.pointerEvents = 'none';
    }
/////// colunas
    if( re[0] === re[3] && re[3] === re[6] ){
        text.innerHTML = `O ganhador foi ${re[0]}`;
        div.style.pointerEvents = 'none';
    }
    if( re[1] === re[4] && re[4] === re[7] ){
        text.innerHTML = `O ganhador foi ${re[1]}`;
        div.style.pointerEvents = 'none';
    }
    if(re[2] == re[5] && re[5] === re[8] ){
        text.innerHTML = `O ganhador foi ${re[2]}`;
        div.style.pointerEvents = 'none';
    }
/////diagonal
    if(re[0] == re[4] && re[4] === re[8]){
        text.innerHTML = `O ganhador foi ${re[0]}`;
        div.style.pointerEvents = 'none';
    }
    if(re[2] == re[4] && re[4] === re[6]){
        text.innerHTML = `O ganhador foi ${re[2]}`;
        div.style.pointerEvents = 'none';
    }
    if (numJogada == 9) {
        text.innerHTML = `Houve um empate!`;
    }
}

function reset() {
    window.location.reload()
}