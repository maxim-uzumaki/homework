// Задание №1
function helloUser(userName) {
    return `Hello ${userName}!`
}

console.log(helloUser('Alex'))

// Задание №2
const numbers = [7, 8, 9, 10, 11, 12, 13]

function checkNumber(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 10) {
            console.log(`${array[i]} больше 10`)
        } 
    }
}

checkNumber(numbers)


// Задание №3

function calculateNumbers(firstNumber, secondNumber, sign) {
    if(sign === 'plus') {
        return firstNumber + secondNumber
    } else if(sign === 'minus') {
        return firstNumber - secondNumber
    } else if(sign === 'multiply') {
        return firstNumber * secondNumber
    }
    else if(sign === 'divide') {
        return firstNumber / secondNumber
    }
}

console.log(calculateNumbers(2, 3, 'multiply'))