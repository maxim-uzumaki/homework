export const todoKeys = {
	id: "id",
	text: "text",
	is_completed: "is_completed",
};

export const errTodoIsNotFound = todoId =>
	`Todo with id ${todoId} is not found`;
