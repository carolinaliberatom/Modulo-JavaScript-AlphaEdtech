const text = document.getElementById('text');
const textError = document.getElementById('error');

// ONLY NUMBERS INPUT 

function onlyNumbers() {
    const replacedInput = event.target.value.replace (/[^0-9]/g, "");
    
    if (event.target.id == "day"){
        document.getElementById('day').value = replacedInput
    }
    if (event.target.id == "month"){
        document.getElementById('month').value = replacedInput
    }
    if (event.target.id == "year"){
        document.getElementById('year').value = replacedInput
    }
}

function createObj() {
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);
    const gender = document.getElementById('gender').value;
    const dateBirth = new Date (year, month - 1, day)
        
    try {        
        if (day > 31 || day < 0) throw `Erro no dia inserido`
        if (day == '') throw `Erro no dia inserido`
        if (month > 12 || month < 0) throw `Erro no mês inserido`
        if (month == '') throw `Erro no mês inserido`
        if (year > 2022 || year < 1900) throw `Erro no ano inserido`
        if (year == '') throw `Erro no ano inserido`
        if (isNaN(day) || isNaN(month) || isNaN(year)) throw `Erro na data inserida!`
        if (gender == 'selec') throw `Erro no gênero indicado`
        else {
            textError.innerHTML = ``
        }
    } catch (error) {
        textError.innerHTML = error
    }

    const person = {
        "birthdate": dateBirth,
        "gender": gender,
        "daysToDeath": function() {
            const today = new Date()
            const ageYears = (today.getFullYear() - dateBirth.getFullYear())
            const ageMonth = (today.getMonth() - dateBirth.getMonth()) 
                if (ageMonth < 0 || (ageMonth === 0 && today.getDate() < dateBirth.getDate())) {
                        ageYears--;
                    }
            const daysLived = (ageYears*365) + (ageMonth*30) + dateBirth.getDate()

            const daysMasc = 26675
            const daysFem = 29230

            console.log(dateBirth.getDate())

            switch (gender) {
                case 'female':
                    text.innerHTML = `${daysFem - daysLived} dias`
                    break;
            
                case 'male':
                    text.innerHTML = `${daysMasc - daysLived} dias`
                    break;
            }
        }
    }

    person.daysToDeath()
}

