import React, { useEffect } from "react";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";
import { loadTodos, removeTodoRequst, completeTodoRequest } from "./thunks"; // can call thunks, thunks can call other thunks or actions
import { connect } from "react-redux";
import "./TodoListItem.css";

const TodoList = ({
	todos = [],
	onRemovePressed,
	onCompletePressed,
	isLoading,
	startLoadingTodos,
}) => {
	useEffect(() => {
		startLoadingTodos();
	}, []);

	const loadingMessage = <div>Loading todos...</div>;
	
	return (
		<div className="list-wrapper">
			<NewTodoForm />
			<br/>
			{isLoading
				? loadingMessage
				: todos.map((todo, idx) => (
						<TodoListItem
							todo={todo}
							onRemovePressed={onRemovePressed}
							onCompletePressed={onCompletePressed}
							key={idx}
						/>
				  ))}
		</div>
	);
};

const mapStateToProps = (state) => ({
	todos: state.todos,
	isLoading: state.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
	onRemovePressed: (id) => dispatch(removeTodoRequst(id)),
	onCompletePressed: (id) => dispatch(completeTodoRequest(id)),
	startLoadingTodos: () => dispatch(loadTodos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList); // pass null if mapStateToProps is not needed
