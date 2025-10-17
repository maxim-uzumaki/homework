// Задание №1
const user = {
    name: 'Max',
    age: 22,
    isAdmin: true,
    sayHello(name) {
        console.log(`Hello ${name}`)
    }
}

user.sayHello(user.name)


// Задание №2

const users = [
    {
        name: 'max',
        age: 22,
        isAdmin: true,
    },
    {
        name: 'alex',
        age: 23,
        isAdmin: false
    },
    {
        name: 'john',
        age: 30,
        isAdmin: false
    },
    {
        name: 'ivan',
        age: 30,
        isAdmin: false
    }
]

let regularUserNumber = 0

for (let i = 0; i < users.length; i++) {
    if (users[i].isAdmin === false) {
        regularUserNumber++
    }
}

console.log(regularUserNumber)