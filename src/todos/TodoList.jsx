import React, { useEffect } from "react";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";
import {
	getTodosLoading,
	getCompleteTodos,
	getIncompleteTodos,
} from "./selectors";
import { loadTodos, removeTodoRequst, completeTodoRequest } from "./thunks"; // can call thunks, thunks can call other thunks or actions
import { connect } from "react-redux";
import "./TodoListItem.css";

const TodoList = ({
	completeTodos,
	incompleteTodos,
	onRemovePressed,
	onCompletePressed,
	isLoading,
	startLoadingTodos,
}) => {
	useEffect(() => {
		startLoadingTodos();
	}, []);

	const loadingMessage = <div>Loading todos...</div>;

	const content = (
		<div className="list-wrapper">
			<NewTodoForm />
			<br />
			<div>
				<h3>Incomplete Todos</h3>
				{incompleteTodos.map((todo, idx) => (
					<TodoListItem
						todo={todo}
						onRemovePressed={onRemovePressed}
						onCompletePressed={onCompletePressed}
						key={idx}
					/>
				))}
			</div>
			<div>
				<h3>Complete Todos</h3>
				{completeTodos.map((todo, idx) => (
					<TodoListItem
						todo={todo}
						onRemovePressed={onRemovePressed}
						onCompletePressed={onCompletePressed}
						key={idx}
					/>
				))}
			</div>
		</div>
	);

	return isLoading ? loadingMessage : content;
};

const mapStateToProps = (state) => ({
	completeTodos: getCompleteTodos(state),
	incompleteTodos: getIncompleteTodos(state),
	isLoading: getTodosLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
	onRemovePressed: (id) => dispatch(removeTodoRequst(id)),
	onCompletePressed: (id) => dispatch(completeTodoRequest(id)),
	startLoadingTodos: () => dispatch(loadTodos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList); // pass null if mapStateToProps is not needed
