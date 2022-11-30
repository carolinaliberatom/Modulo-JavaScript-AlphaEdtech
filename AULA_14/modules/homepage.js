import GetUrl from "./customizeEvent.js"

Principal()

export default function Principal() {
    const root = document.querySelector("#root")
    // Reset the page
    document.querySelector("#root").innerHTML = "";

    //Creating div.text-container
    const textContainer = document.createElement("div");
    document.querySelector("#root").appendChild(textContainer);
    textContainer.className = "text-container";
    
    //Creating h1
    const textH1 = document.createElement("h1");
    document.querySelector(".text-container").appendChild(textH1) 
    textH1.innerText = "Homepage"

    //Creating div.buttons-container
    const buttonsContainer = document.createElement("div");
    document.querySelector("#root").appendChild(buttonsContainer);
    buttonsContainer.className = "buttons-container";

    // Brigadeiros
    const buttonBrig = document.createElement("button");
    document.querySelector(".buttons-container").appendChild(buttonBrig);
    buttonBrig.innerText = "Brigadeiros"
    buttonBrig.addEventListener('click', function() {
        root.dispatchEvent( GetUrl("/brigadeiros") ); // o evento é disparado aqui, é criado um custom event no customizeEvent.js passando a url desejada como detail do evento através do parametro, escutada no index.js e verificada qual função é pra ser chamada no router.js, chamando a função que cria a página brigadeiros de acordo com o url
    });

    // Cupcakes
    const buttonCup = document.createElement("button");
    document.querySelector(".buttons-container").appendChild(buttonCup);
    buttonCup.innerText = "Cupcakes"
    buttonCup.addEventListener('click', function() {
        root.dispatchEvent( GetUrl("/cupcakes") );
    });

    // Doces
    const buttonDoces = document.createElement("button");
    document.querySelector(".buttons-container").appendChild(buttonDoces);
    buttonDoces.innerText = "Doces"
    buttonDoces.addEventListener('click', function() {
        root.dispatchEvent( GetUrl("/doces") );
    });

    
}

