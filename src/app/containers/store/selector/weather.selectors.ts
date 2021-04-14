import { createFeatureSelector, createSelector } from '@ngrx/store';
import { City, Hourly, Forecast } from './../../../weather';
import * as fromWeatherReducer from '../reducer/weather.reducer';

export const selectWeatherAppState = createFeatureSelector<fromWeatherReducer.CityWeatherState>(
	fromWeatherReducer.weatherFeatureKey
);

export const selectCitiesWeather = createSelector(
	selectWeatherAppState,
	(state: fromWeatherReducer.CityWeatherState) => state.citiesWeather
);

export const selectSelectedCity = createSelector(
	selectWeatherAppState,
	(state: fromWeatherReducer.CityWeatherState): string => state.selectedCity
);

export const selectIsForecastLoaded = createSelector(
	selectWeatherAppState,
	(state: fromWeatherReducer.CityWeatherState) => !state.isLoading
);

const currentDate = () => {
	const now = new Date();
	return `${now.getFullYear()}-0${now.getMonth() + 1}-${now.getDate()}`;
};

const getHourlyForecast = createSelector(
	selectWeatherAppState,
	(state: fromWeatherReducer.CityWeatherState): Hourly[] =>
		state.cityForecast.list
);

const getTodayForecast = createSelector(
	getHourlyForecast,
	(hourly: Hourly[]): Hourly[] => {
		return (
			hourly &&
			hourly.filter((hour: Hourly) => {
				return hour.dt_txt.includes(currentDate());
			})
		);
	}
);

const getFutureForecast = createSelector(
	getHourlyForecast,
	(hourly: Hourly[]): Hourly[] => {
		return (
			hourly &&
			hourly.filter((hour: Hourly) => {
				return !hour.dt_txt.includes(currentDate());
			})
		);
	}
);

const getCity = createSelector(
	selectCitiesWeather,
	selectSelectedCity,
	(weathers: City[], cityId: string): City | undefined =>
		weathers.find((city) => city.id === cityId)
);

export const getWeatherForecast = createSelector(
	getCity,
	getTodayForecast,
	getFutureForecast,
	(city: City | undefined, today: Hourly[], future: Hourly[]): Forecast => {
		return { city, today, future } as Forecast;
	}
);
