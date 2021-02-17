import {
	loadTodosInProgress,
	loadTodosSuccess,
	loadTodosFailure,
} from "./actions";

export const loadTodos = () => async (dispatch, getState) => {
	// dispatch allows us to dispatch other actions
	// getState allows us access to the current state of the Redux store.

	try {
		dispatch(loadTodosInProgress());
		const response = await fetch("http://localhost:8080/todos-delay");
		const todos = await response.json();

    console.log(todos);
		dispatch(loadTodosSuccess(todos));
	} catch (error) {
		dispatch(loadTodosFailure());
		dispatch(displayAlert(error));
	}
};

export const displayAlert = (text) => () => {
	alert(text);
};
