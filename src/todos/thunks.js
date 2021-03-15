import {
	loadTodosInProgress,
	loadTodosSuccess,
	loadTodosFailure,
	createTodo,
	removeTodo,
	completeTodo,
} from "./actions";

export const loadTodos = () => async (dispatch, getState) => {
	// dispatch allows us to dispatch other actions
	// getState allows us access to the current state of the Redux store.

	try {
		dispatch(loadTodosInProgress());
		const response = await fetch("http://localhost:8080/todos");
		const todos = await response.json();

		console.log(todos);
		dispatch(loadTodosSuccess(todos));
	} catch (error) {
		dispatch(loadTodosFailure());
		dispatch(displayAlert(error));
	}
};

export const addTodoRequest = (text) => async (dispatch) => {
	if(!text) {
		alert('Must enter some text for your TODO!');
		return;
	}

	try {
		const body = JSON.stringify({ text });
		const response = await fetch("http://localhost:8080/todos", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body,
		});

		const todo = await response.json();
		dispatch(createTodo(todo));
	} catch (error) {
		dispatch(displayAlert(error));
	}
};

export const removeTodoRequst = (id) => async (dispatch) => {
	try {
		const response = await fetch(`http://localhost:8080/todos/${id}`, {
			method: "DELETE",
		});

		const removedTodo = await response.json();

		dispatch(removeTodo(removedTodo));
	} catch (error) {
		dispatch(displayAlert(error));
	}
};

export const completeTodoRequest = (id) => async (dispatch) => {
	try {
		const response = await fetch(
			`http://localhost:8080/todos/${id}/completed`,
			{ method: "POST" }
		);

		const updatedTodo = await response.json();

		dispatch(completeTodo(updatedTodo));
	} catch (e) {}
};

export const displayAlert = (text) => () => {
	alert(text);
};
