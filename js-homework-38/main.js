// Задача 1.
// Создайте объект person с несколькими свойствами, содержащими информацию о вас. Затем выведите значения этих свойств в консоль.

console.log("Задача 1.");

const person = {
	name: "Naruto",
	lastname: "Uzumaki",
	age: 17,
	isShinobi: true,
	village: "Konoha",
};

for (let personKey in person) {
	console.log(`${personKey}: ${person[personKey]}`);
}
console.log("");

// ========================================================================

// Задача 2.
// Создайте функцию isEmpty, которая проверяет является ли переданный объект пустым. Если объект пуст - верните true, в противном случае false.

console.log("Задача 2.");

const emptyObject = {};

function isEmpty(object) {
	for (let objectKey in object) {
		return false;
	}
	return true;
}

console.log(isEmpty(person));
console.log("");

// ========================================================================

// Задача 3.
// Создайте объект task с несколькими свойствами: title, description, isCompleted.
// Напишите функцию cloneAndModify(object, modifications), которая с помощью оператора spread создает копию объекта и применяет изменения из объекта modifications.
// Затем с помощью цикла for in выведите все свойства полученного объекта.

console.log("Задача 3.");

const task = {
	title: "Неправильные глаголы в английском языке",
	description: "Выучить вторую форму неправильных глаголов",
	isCompleted: false,
};

const cloneAndModify = (object, modifications) => {
	return { ...object, ...modifications };
};

const task2 = cloneAndModify(task, {
	description: "Выучить третью форму неправильных глаголов",
});

for (let taskKey in task2) {
	console.log(`${taskKey}: ${task2[taskKey]}`);
}

console.log("");

// ========================================================================

// Задача 4.
// Создайте функцию callAllMethods, которая принимает объект и вызывает все его методы.

// Пример использования:
// const myObject = {
//     method1() {
//         console.log('Метод 1 вызван');
//     },
//     method2() {
//         console.log('Метод 2 вызван');
//     },
//     property: 'Это не метод'
// };
// callAllMethods(myObject);

console.log("Задача 4.");

const myObject = {
	method1() {
		console.log("Метод 1 вызван");
	},
	method2() {
		console.log("Метод 2 вызван");
	},
	property: "Это не метод",
};

const callAllMethods = object => {
	for (const objectKey in object) {
		if (typeof object[objectKey] === "function") {
			object[objectKey]();
		}
	}
};

callAllMethods(myObject);
