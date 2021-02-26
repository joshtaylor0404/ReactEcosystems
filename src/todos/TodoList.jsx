import React, { useEffect } from "react";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";
import { loadTodos, removeTodoRequst } from "./thunks"; // can call thunks, thunks can call other thunks or actions
import { connect } from "react-redux";
import { completeTodo } from "./actions"; // actions take a type and payload so reducer can make state changes
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
	onCompletePressed: (text) => dispatch(completeTodo(text)),
	startLoadingTodos: () => dispatch(loadTodos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList); // pass null if mapStateToProps is not needed
