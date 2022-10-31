const inputCEP = document.getElementById('cep');

function verifyInput(event) {
    const replacedInput = inputCEP.value.replace (/[^0-9]/g, "");

    let cursor = event.target.selectionStart; // Initial position of the cursor
    
    inputCEP.value = replacedInput;

    console.log (cursor)

    // placing the -

    if (replacedInput.length > 5) {

        inputCEP.value = `${replacedInput.slice(0,5)}-${replacedInput.slice(5,8)}`

        if (cursor === 6) {
        cursor++;
        }
    }
    
    event.target.selectionEnd = cursor;
    
}

inputCEP.addEventListener ("input", verifyInput);