import GetUrl from "./customizeEvent.js"

export default function Brigadeiros () {
    // Reset the page
    document.querySelector(".buttons-container").innerHTML = "";
    document.querySelector("h1").innerHTML = "";

    // Chagging title
    document.querySelector("h1").innerText = "Brigadeiros"

    // Creating a p
    const textObj = document.createElement("p");
    document.querySelector(".text-container").appendChild(textObj) 
    textObj.innerText = "Vários tipos de brigadeiros para você!"

    // Creating a button
    const backPrincipal = document.createElement("button");
    document.querySelector(".buttons-container").appendChild(backPrincipal);
    backPrincipal.innerText = "Homepage"
    backPrincipal.addEventListener('click', function() {
        root.dispatchEvent ( GetUrl ("/homepage") ) 
        
    });
};