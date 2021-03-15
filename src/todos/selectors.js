import { createSelector } from "reselect";

export const getTodos = (state) => {
	return state.todos.data;
};

export const getTodosLoading = (state) => state.todos.isloading;

// Some notes about selectors and reselect:
// 1. These are higher order selecters, and they rely on the lower level ones. They have no idea what the underlying state looks like. 
// 		In the long run, we would only have to change the state retrevial logic in one spot instad of calling "state.todos.etc" everywhere
// 2. getSelectors methods use memoization (will return previous result if inputs a pure function) - This prevents re-renders unless
// 		the actual underlying inputs change.
export const getCompleteTodos = createSelector(getTodos, (todos) => {
	return todos.filter((todo) => todo.isCompleted);
});

export const getIncompleteTodos = createSelector(getTodos, (todos) => { 
	return todos.filter((todo) => !todo.isCompleted);
});
