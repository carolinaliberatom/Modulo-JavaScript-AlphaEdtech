const array = []

function primeNumbers() {
    for (let number = 0; number <= 100000; number++) {
        let Prime = true;
        for (let i = 2; i <= number; i++) {
            if (number%i===0 && i!==number) {
            Prime = false;
            }
        }
        if (Prime === true && number >= 2) {
            array.push(number);
        }
    }
}

primeNumbers()
console.log(array)