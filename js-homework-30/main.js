// Задача 1.
// Напишите функцию calculateFinalPrice, которая принимает базовую цену товара, процент скидки и налоговую ставку. Функция должна вычислять скидку, затем прибавлять налог и возвращать итоговую цену.

// Пример работы:
// console.log(calculateFinalPrice(100, 10, 0.2)); // 108
// console.log(calculateFinalPrice(100, 10, 0)); // 90

console.log("Задача 1.");

const calculateFinalPrice = (basePrice, discountPercent, taxRate) => {
	const priceWithDiscount = basePrice - (basePrice * discountPercent) / 100;
	const taxValue = priceWithDiscount * taxRate;
	return priceWithDiscount + taxValue;
};

console.log(calculateFinalPrice(100, 10, 0.2));
console.log(calculateFinalPrice(100, 10, 0));
console.log("");

// ============================================================================

// Задача 2.
// Напишите функцию checkAccess, которая принимает имя пользователя и пароль. Если имя пользователя равно "admin" и пароль равен "123456", функция должна возвращать строку "Доступ разрешен", иначе — "Доступ запрещен".

console.log("Задача 2.");

const checkAccess = (username, password) => {
	if (username === "admin" && password === "123456") {
		console.log("Доступ разрешен!");
	} else {
		console.log("Доступ запрещен!");
	}
	return;
};

checkAccess("admin", "123456");
console.log("");

// ============================================================================

// Задача 3.
// Напишите функцию getTimeOfDay, которая принимает текущее время (число от 0 до 23) и возвращает строку:
// "Ночь" (с 0 до 5 часов),
// "Утро" (с 6 до 11 часов),
// "День" (с 12 до 17 часов),
// "Вечер" (с 18 до 23 часов).
// Если введённое значение не попадает в этот диапазон, возвращайте `"Некорректное время"`.

console.log("Задача 3.");

const getTimeOfDay = currentTime => {
	let TimeOfDay = "";
	switch (true) {
		case currentTime <= 5:
			TimeOfDay = "Ночь";
			break;
		case currentTime <= 11:
			TimeOfDay = "Утро";
			break;
		case currentTime <= 17:
			TimeOfDay = "День";
			break;
		case currentTime <= 23:
			TimeOfDay = "Вечер";
			break;

		default:
			TimeOfDay = "Некорректное время";
			break;
	}
	return TimeOfDay;
};

console.log(getTimeOfDay(17));
console.log("");

// ============================================================================

// Задача 4.
// Напишите функцию findFirstEven, которая принимает два числа start и end и находит первое чётное число в указанном диапазоне.
// Если чётного числа в этом диапазоне нет, функция должна вернуть "Чётных чисел нет".

// Пример работы:
// console.log(findFirstEven(1, 10)); // 2
// console.log(findFirstEven(9, 9)); // "Чётных чисел нет"

console.log("Задача 4.");

const findFirstEven = (start, end) => {
	let firstEven = 0;
	for (let i = start; i < end; i++) {
		if (i % 2 === 0) {
			firstEven = i;
			return firstEven;
		}
	}
	return "Четных чисел нет";
};

console.log(findFirstEven(1, 10));
console.log(findFirstEven(9, 9));
