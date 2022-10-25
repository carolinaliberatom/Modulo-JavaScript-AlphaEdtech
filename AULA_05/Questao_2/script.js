const button = document.querySelector('.button');

function verify() {

    const date = document.querySelector('.date').valueAsDate;

    // Ajusta o fuso horário:

    const timezone = date.getTimezoneOffset();
    date.setMinutes(date.getMinutes() + timezone);
    const timezoneMilis = 10800000; 

    document.querySelector('.day').value =  date.getDate();

    document.querySelector('.month').value =  date.getMonth() + 1;

    document.querySelector('.year').value =  date.getFullYear();

    document.querySelector('.day-week').value = date.toLocaleString('default', { weekday: 'long' });

    document.querySelector('.month-name').value = date.toLocaleString('default', { month: 'long' });

    document.querySelector('.timestamp').value =  date.getTime() - timezoneMilis;

    console.log(date);
    
}

button.addEventListener('click', verify);
