import { todoKeys, errTodoIsNotFound } from "./constants.js";

const getNewTodoId = todos =>
	todos.reduce((newId, todo) => Math.max(newId, todo[todoKeys.id]), 0) + 1;

export const createTodo = (todos, text) => {
	const newTodo = {
		[todoKeys.id]: getNewTodoId(todos),
		[todoKeys.text]: text,
		[todoKeys.is_completed]: false,
	};
	todos.push(newTodo);
	return newTodo;
};

export const completeTodoById = (todos, todoId) => {
	const todo = todos.find(todo => todo[todoKeys.id] === todoId);

	if (!todo) {
		console.error(errTodoIsNotFound(todoId));
		return null;
	}

	todo[todoKeys.is_completed] = !todo[todoKeys.is_completed];
	return todo;
};

export const deleteTodoById = (todos, todoId) => {
	const todoIndex = todos.findIndex(todo => todo[todoKeys.id] === todoId);

	if (todoIndex === -1) {
		console.error(errTodoIsNotFound(todoId));
		return null;
	}

	todos.splice(todoIndex, 1);
	return todos;
};
