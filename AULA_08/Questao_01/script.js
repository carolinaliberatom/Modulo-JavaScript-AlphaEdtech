const button = document.getElementById('button');
const textError = document.getElementById('error')
const select = document.getElementById('gender')
const textName = document.getElementById('show-name')
const textDate = document.getElementById('show-date')
const textWeight = document.getElementById('show-weight')
const textHeight = document.getElementById('show-height')
const textGender = document.getElementById('show-gender')


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

    try {
        // ERROR IN NAME
        if (name == '') throw `Field “name” is invalid!`
        if (name.length < 5) throw `Field “name” is invalid!`
        else {
            textError.innerHTML = ``
            textName.innerHTML = `Nome: ${JSON.stringify(user.name)}`
        }

        // ERROR IN DATEBIRTH
        if (day > 31 || day < 0) throw `Field “birthDate” is invalid!`
        if (day == '') throw `Field “birthDate” is invalid!`
        if (month > 12 || month < 0) throw `Field “birthDate” is invalid!`
        if (month == '') throw `Field “birthDate” is invalid!`
        if (year > 2022 || year < 1900) throw `Field “birthDate” is invalid!`
        if (year == '') throw `Field “birthDate” is invalid!`
        if (isNaN(day) || isNaN(month) || isNaN(year)) throw `Field “birthDate” is invalid!`
        else {
            textError.innerHTML = ``
            textDate.innerHTML = `Data de nascimento: ${JSON.stringify(user.birthDate.toLocaleDateString('pt-BR'))}`
        }

        // ERROR IN WEIGHT
        if (isNaN(weight)) throw `Field "weight" is invalid!`
        if (weight > 400) throw `Field "weight" is invalid!`
        else {
            textError.innerHTML = ``
            textWeight.innerHTML = `Peso: ${JSON.stringify(user.weight)}`
        }

        // ERROR IN HEIGHT
        if (isNaN(height)) throw `Field "height" is invalid!`
        if (height > 250) throw `Field "height" is invalid!`
        else {
            textError.innerHTML = ``
            textHeight.innerHTML = `Altura: ${JSON.stringify(user.height)}`
        }

        // ERROR IN GENDER
        if (select.value == "selec") throw `Field "gender” is invalid!`
        else {
            textError.innerHTML = ``
            textGender.innerHTML = `Gênero: ${JSON.stringify(user.gender)}`
        }

    } catch (error) {
        textError.innerHTML = `Erro: ${error}`
    }

    console.log(user)

}