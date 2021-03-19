import { expect } from "chai";
import { getCompleteTodos } from "../selectors";

describe("The getCompletedTodos selector", () => {
	it("Returns only completed todos", () => {
		const fakeTodos = [
			{
				text: "say hello",
				isCompleted: true,
			},
			{
				text: "say goodbye",
				isCompleted: false,
			},
			{
				text: "Climb Mount Everest",
				isCompleted: false,
			},
		];

		const expected = [
			{
				text: "say hello",
				isCompleted: true,
			},
		];

		const actual = getCompleteTodos.resultFunc(fakeTodos);

		expect(actual).to.deep.equal(expected);
	});
});
