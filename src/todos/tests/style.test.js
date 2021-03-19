import { expect } from "chai";
import { getBorderStyleForDate } from "../TodoListItem";

describe("Get border style for date", () => {
	it("returns none when the date is less than 5 days", () => {
		const today = Date.now();
    const createdDate = new Date(Date.now() - 86400000 * 3); // 3 days ago
    
    const expected = "none";
		const actual = getBorderStyleForDate(createdDate, today);

		expect(actual).to.deep.equal(expected);
	});

	it("returns red border when the date is more than 5 days", () => {
    const today = Date.now();
    const createdDate = new Date(Date.now() - 86400000 * 7); // 7 days ago

		const expected = "2px solid red";
		const actual = getBorderStyleForDate(createdDate, today);

		expect(actual).to.deep.equal(expected);
	});
});
