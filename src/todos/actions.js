// NOTE: this syntax defines the action type
// and what is called an action creator.
// It's much more efficient to use this in code than
// explicitly coding each action throughout our app.

// action type
export const CREATE_TODO = "CREATE_TODO";
// action creator
export const createTodo = (todo) => ({
	type: CREATE_TODO,
	payload: { todo },
});

// action type
export const REMOVE_TODO = "REMOVE_TODO";
// action creator
export const removeTodo = (todo) => ({
	type: REMOVE_TODO,
	payload: { todo },
});

// action type
export const COMPLETE_TODO = "COMPLETE_TODO";
// action creator
export const completeTodo = (text) => ({
	type: COMPLETE_TODO,
	payload: { text },
});

export const LOAD_TODOS_IN_PROGRESS = "LOAD_TODOS_IN_PROGRESS";
export const loadTodosInProgress = () => ({
	type: LOAD_TODOS_IN_PROGRESS,
});

export const LOAD_TODOS_SUCCESS = "LOAD_TODOS_SUCCESS";
export const loadTodosSuccess = (todos) => ({
	type: LOAD_TODOS_SUCCESS,
	payload: { todos },
});

export const LOAD_TODOS_FAILURE = "LOAD_TODOS_FAILURE";
export const loadTodosFailure = () => ({
	type: LOAD_TODOS_FAILURE
});
