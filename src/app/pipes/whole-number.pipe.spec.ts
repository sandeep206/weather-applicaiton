/* eslint-disable @typescript-eslint/no-unsafe-call */
import { WholeNumberPipe } from './whole-number.pipe';

describe('WholeNumberPipe', () => {
	let pipe: WholeNumberPipe;

	beforeEach(() => {
		pipe = new WholeNumberPipe();
	});

	it('create an instance', () => {
		expect(pipe).toBeTruthy();
	});

	it('should return a whole number', () => {
		const output: number = pipe.transform('55.5');
		expect(output).toBe(55);
	});
});
