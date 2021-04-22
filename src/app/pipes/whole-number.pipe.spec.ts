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

	it('should return a 56 number', () => {
		const output: number = pipe.transform('55.5');
		expect(output).toBe(56);
	});

	it('should return a 55 number', () => {
		const output: number = pipe.transform('55.3');
		expect(output).toBe(55);
	});

	it('should return a 7 number', () => {
		const output: number = pipe.transform('6.8');
		expect(output).toBe(7);
	});
});
