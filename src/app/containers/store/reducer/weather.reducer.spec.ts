/* eslint-disable @typescript-eslint/no-unsafe-call */
import { reducer, initialState, CityWeatherState } from './weather.reducer';
import {
	loadCityWeather,
	loadCityWeatherSuccess,
	loadWeatherDetails,
	loadWeatherDetailsSuccess
} from '../action/weather.actions';
import { City } from 'src/app/weather';
import { forecastMock } from '../../../mocks';

describe('Weather Reducer', () => {
	describe('an unknown action', () => {
		it('should return the previous state', () => {
			const action = { type: 'unknown' };

			const newState = reducer(initialState, action);

			expect(newState).toEqual(initialState);
			expect(newState).toBe(initialState);
		});
	});

	it('should call loadCityWeather action', () => {
		const action = loadCityWeather({ cityId: '' });
		const expectedState: CityWeatherState = {
			...initialState,
			isLoading: true
		};
		const newState = reducer(initialState, action);
		expect(newState).toEqual(expectedState);
		expect(newState).not.toBe(expectedState);
	});

	it('should call loadCityWeatherSuccess action', () => {
		const newCity: City = {} as City;
		const action = loadCityWeatherSuccess({ city: newCity });
		const expectedState: CityWeatherState = {
			...initialState,
			isLoading: false,
			errorMessage: '',
			citiesWeather: [newCity]
		};
		const newState = reducer(initialState, action);
		expect(newState).toEqual(expectedState); // to check property values are same.
		expect(newState).not.toBe(expectedState); // to check references are not same.
	});

	it('should call loadWeatherDetails action', () => {
		const cityId = 'test';
		const action = loadWeatherDetails({ cityId });
		const newState = reducer(initialState, action);
		const expectedState: CityWeatherState = {
			...initialState,
			isLoading: true,
			selectedCity: cityId
		};
		expect(newState).toEqual(expectedState);
		expect(newState).not.toBe(expectedState);
	});

	it('should call loadWeatherDetailsSuccess action', () => {
		const expectedState: CityWeatherState = {
			...initialState,
			cityForecast: forecastMock
		};
		const action = loadWeatherDetailsSuccess({
			cityForecast: forecastMock
		});

		const newState = reducer(initialState, action);
		expect(newState).toEqual(expectedState);
		expect(newState).not.toBe(expectedState);
	});
});
