const button = document.getElementById('button');
const textError = document.getElementById('error')


/* CREATION OF A OBJECT "USER" */

button.onclick = function () {

    const name = document.getElementById('name').value;
    const day = document.getElementById('day').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseInt(document.getElementById('height').value);
    const gender = document.getElementById('gender').value;

    const dateBirth = new Date (year, month - 1, day)

    const user = {
        "name": name,
        "birthDate": dateBirth,
        "weight": weight,
        "height": height,
        "gender": gender
    }

    console.log (dateBirth, user )
}

/* FUNCTIONS TO LIMIT THE INPUT */

const inputDay = document.getElementById('day')

inputDay.oninput = function () {
    const replacedDay = inputDay.value.replace (/[^0-9]/g, "");
    inputDay.value = replacedDay;

    if (replacedDay > 31) {
        textError.innerHTML = "Erro no dia colocado! Está acima do permitido."
    }
    else {
        textError.innerHTML = ""
    }
}

const inputMonth = document.getElementById('month')

inputMonth.oninput = function () {
    const replacedMonth = inputMonth.value.replace (/[^0-9]/g, "");
    inputMonth.value = replacedMonth;

    if (replacedMonth > 12) {
        textError.innerHTML = "Erro no mês colocado! Está acima do permitido."
    }
    else {
        textError.innerHTML = ""
    }
}

const inputYear = document.getElementById('year')

inputYear.oninput = function () {
    const replacedYear = inputYear.value.replace (/[^0-9]/g, "");
    inputYear.value = replacedYear;

    if (replacedYear > 2022) {
        textError.innerHTML = "Erro no ano colocado! Está acima do permitido."
    }
    if (replacedYear < 1900) {
        textError.innerHTML = "Erro no ano colocado! Está abaixo do permitido."
    }
    else {
        textError.innerHTML = ""
    }
}

const inputWeight = document.getElementById('weight')

inputWeight.oninput = function () {
    const replacedWeight = inputWeight.value.replace (/[^0-9]/g, "");
    inputWeight.value = replacedWeight;

}

const inputHeight = document.getElementById('height')

inputHeight.oninput = function () {
    const replacedHeight = inputHeight.value.replace (/[^0-9]/g, "");
    inputHeight.value = replacedHeight;

}