"use strict";

// Задание 1.
// Дан массив пользователей:
// const users = [
//   { name: 'Alex', age: 24, isAdmin: false },
//   { name: 'Bob', age: 13, isAdmin: false },
//   { name: 'John', age: 31, isAdmin: true },
//   { name: 'Jane', age: 20, isAdmin: false },
//]
// Добавьте в конец массива двух пользователей:
// { name: 'Ann', age: 19, isAdmin: false },
// { name: 'Jack', age: 43, isAdmin: true }

console.log("Задача 1.");

const users = [
	{ name: "Alex", age: 24, isAdmin: false },
	{ name: "Bob", age: 13, isAdmin: false },
	{ name: "John", age: 31, isAdmin: true },
	{ name: "Jane", age: 20, isAdmin: false },
];

users.push(
	{ name: "Ann", age: 19, isAdmin: false },
	{ name: "Jack", age: 43, isAdmin: true },
);

console.log(users);

console.log("");

// ========================================================================

// Задание 2.
// Используя массив пользователей users из предыдущего задания, напишите функцию getUserAverageAge(users), которая возвращает средний возраст пользователей.

console.log("Задача 2.");

function getUserAverageAge(users) {
	let sumAges = 0;

	users.forEach(user => {
		sumAges += user.age;
	});

	const averageAge = sumAges / users.length;
	return averageAge;
}

console.log(getUserAverageAge(users));

console.log("");

// ========================================================================

// Задание 3.
// Используя массив пользователей users из предыдущего задания, напишите функцию getAllAdmins(users), которая возвращает массив всех администраторов.

console.log("Задача 3.");

function getAllAdmins(users) {
	const admins = [];

	users.forEach(user => {
		if (user.isAdmin) {
			admins.push(user);
		}
	});

	return admins;
}

console.log(getAllAdmins(users));

console.log("");

// ========================================================================

// Задание 4.
// Напишите функцию first(arr, n), которая возвращает первые n элементов массива. Если n == 0, возвращается пустой массив [], если n == undefined, то возвращается массив с первым элементом.

console.log("Задача 4.");

function first(arr, n) {
	const newArr = [];

	if (n > arr.length) {
		console.error(
			`Параметр "n = ${n}" НЕ должен быть больше длины массива - ${arr.length}`,
		);
		return;
	}

	if (n == 0) {
		return newArr;
	} else if (n == undefined) {
		newArr.push(arr[0]);

		return newArr;
	} else {
		arr.forEach((arrItem, i) => {
			if (i < n) {
				newArr.push(arrItem);
			}
		});

		return newArr;
	}
}

console.log(first(users, 3));
console.log(first(users, 0));
console.log(first(users));
console.log(first(users, 8));
