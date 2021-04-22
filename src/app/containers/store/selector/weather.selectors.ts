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

export const selectHourlyForecast = createSelector(
	selectWeatherAppState,
	(state: fromWeatherReducer.CityWeatherState): Hourly[] =>
		state.cityForecast.list
);

const selectTodayForecast = createSelector(
	selectHourlyForecast,
	(hourly: Hourly[]): Hourly[] => {
		return (
			hourly &&
			hourly.filter((hour: Hourly) => {
				return hour.dt_txt.includes(currentDate());
			})
		);
	}
);

const selectFutureForecast = createSelector(
	selectHourlyForecast,
	(hourly: Hourly[]): Hourly[] => {
		return (
			hourly &&
			hourly.filter((hour: Hourly) => {
				return !hour.dt_txt.includes(currentDate());
			})
		);
	}
);

const selectCity = createSelector(
	selectCitiesWeather,
	selectSelectedCity,
	(weathers: City[], cityId: string): City | undefined =>
		weathers.find((city) => city.id === cityId)
);

export const selectWeatherForecast = createSelector(
	selectCity,
	selectTodayForecast,
	selectFutureForecast,
	selectHourlyForecast,
	(
		city: City | undefined,
		today: Hourly[],
		future: Hourly[],
		list: Hourly[]
	): Forecast | undefined => {
		if (typeof city == undefined) return;
		return { city, today, future, list } as Forecast;
	}
);
