const button = document.getElementById('button');
const result = document.getElementById('result')

button.addEventListener('click', function() {
    const text = document.getElementById('text').value
    try {
        if (JSON.parse(text)) {
            result.innerHTML = `Parsable JSON string!`
            console.log(JSON.parse(text))
        }
    } catch (error) {
        result.innerHTML = error
    }

    
});