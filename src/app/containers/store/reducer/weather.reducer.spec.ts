/* eslint-disable @typescript-eslint/no-unsafe-call */
import { reducer, initialState } from './weather.reducer';

describe('Weather Reducer', () => {
	describe('an unknown action', () => {
		it('should return the previous state', () => {
			const action = {} as never;

			const result = reducer(initialState, action);

			expect(result).toBe(initialState);
		});
	});
});
