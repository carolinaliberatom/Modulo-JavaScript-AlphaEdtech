import GetUrl from "./customizeEvent.js"

function Doces() {
    // Reset the page
    document.querySelector(".buttons-container").innerHTML = "";
    document.querySelector("h1").innerHTML = "";

    // Chagging title
    document.querySelector("h1").innerText = "Doces"

    //Creating a p
    const textObj = document.createElement("p");
    document.querySelector(".text-container").appendChild(textObj) 
    textObj.innerText = "Aqui tem os doces mais gostosos que já existiram, compre todos! AGORA!"

    //Creating a button
    const backPrincipal = document.createElement("button");
    document.querySelector(".buttons-container").appendChild(backPrincipal);
    backPrincipal.innerText = "Homepage"
    backPrincipal.addEventListener('click', () => { root.dispatchEvent( GetUrl("/homepage") ) });
};

export default Doces;