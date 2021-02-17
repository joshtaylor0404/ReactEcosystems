import React from "react";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";
import { connect } from "react-redux";
import { removeTodo, completeTodo } from "./actions";
import "./TodoListItem.css";

const TodoList = ({ todos = [], onRemovePressed, onCompletePressed }) => (
	<div className="list-wrapper">
		<NewTodoForm />
		{todos.map((todo, idx) => (
			<TodoListItem todo={todo} onRemovePressed={onRemovePressed} onCompletePressed={onCompletePressed} key={idx}/>
		))}
	</div>
);

const mapStateToProps = (state) => ({
	todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
	onRemovePressed: (text) => dispatch(removeTodo(text)),
	onCompletePressed: (text) => dispatch(completeTodo(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList); // pass null if mapStateToProps is not needed
