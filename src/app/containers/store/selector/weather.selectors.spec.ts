/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-empty-function */
import {
	selectCitiesWeather,
	selectSelectedCity,
	selectHourlyForecast
} from './weather.selectors';
import { CityWeatherState, initialState } from './../reducer/weather.reducer';
import { cityMock, forecastMock } from '../../../mocks';
import { City, Hourly } from 'src/app/weather';

describe('Weather Selectors', () => {
	it('should select the list of cities', () => {
		const cityWeatherState: CityWeatherState = {
			...initialState,
			citiesWeather: [cityMock]
		};

		const expectedCities: City[] = selectCitiesWeather.projector(
			cityWeatherState
		);

		expect(expectedCities).toEqual([cityMock]);
	});

	it('should return the selected city', () => {
		const state: CityWeatherState = {
			...initialState,
			selectedCity: 'test'
		};
		const expectedCityId = selectSelectedCity.projector(state);
		expect(expectedCityId).toBe('test');
	});

	it('should return the forecast details for selected city', () => {
		const state: CityWeatherState = {
			...initialState,
			selectedCity: '2759794',
			citiesWeather: [cityMock],
			cityForecast: forecastMock
		};

		const expectedHourly: Hourly[] = forecastMock.list;

		const newHourly: Hourly[] = selectHourlyForecast.projector(state);

		expect(newHourly).toEqual(expectedHourly);
	});
});
