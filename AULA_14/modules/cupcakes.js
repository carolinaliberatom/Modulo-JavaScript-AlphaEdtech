import GetUrl from "./customizeEvent.js"

export default function Cupcakes() {
    // Reset the page
    document.querySelector(".buttons-container").innerHTML = "";
    document.querySelector("h1").innerHTML = "";

    // Chagging title
    document.querySelector("h1").innerText = "Cupcakes"

    //Creating a p
    const textObj = document.createElement("p");
    document.querySelector(".text-container").appendChild(textObj) 
    textObj.innerText = "Cupcakes de todos os sabores disponíveis!"

    //Creating a button
    const backPrincipal = document.createElement("button");
    document.querySelector(".buttons-container").appendChild(backPrincipal);
    backPrincipal.innerText = "Homepage"
    backPrincipal.addEventListener('click', function() {
        root.dispatchEvent( GetUrl("/homepage") )
    });
};