import {Maybe} from "true-myth";

const tm = await import("true-myth")

export function addition(a: number, b: number): number {
	return a + b;
}

export function divide(a: number, b: number): Maybe<number> {
	try {
		return Maybe.of(a / b);
	} catch (e) {
		return Maybe.nothing()
	}
}