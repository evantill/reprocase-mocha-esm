import {assert} from "chai";
import {addition, divide} from "../src/calculator.js";

describe("Calculator Tests", () => {

	it("should return 5 when 2 is added to 3", () => {
		const result = addition(2, 3);
		assert.equal(result, 5);
	});

	it("should return 5 when 10 is divided by 2", () => {
		const result = divide(10,2);
		assert.equal(result.unwrapOr(undefined), 5);
	});


});
