import React, { useState } from "react";
import "./NewTodoForm.css";

const NewTodoForm = () => {
	const [inputValue, setInputValue] = useState("");

	// jsx
	return (
		<div className="new-todo-form">
			<input
				type="text"
				className="new-todo-input"
				value={inputValue}
        placeholder="Type your new todo here!"
				onChange={(e) => {
					setInputValue(e.target.value);
				}}
			/>
			<button className="new-todo-button">Create Todo</button>
		</div>
	);
};

export default NewTodoForm;
