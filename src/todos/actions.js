// NOTE: this syntax defines the action type 
// and what is called an action creator.
// It's much more efficient to use this in code than
// explicitly coding each action throughout our app.

// action type
export const CREATE_TODO = "CREATE_TODO";
// action creator
export const createTodo = (text) => ({
	type: CREATE_TODO,
	payload: { text },
});

// action type
export const REMOVE_TODO = "REMOVE_TODO";
// action creator
export const removeTodo = (text) => ({
	type: REMOVE_TODO,
	payload: { text },
});

// action type
export const COMPLETE_TODO = "COMPLETE_TODO";
// action creator
export const completeTodo = (text) => ({
	type: COMPLETE_TODO,
	payload: { text }
});
