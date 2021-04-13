import { createFeatureSelector, createSelector } from '@ngrx/store';
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

export const selectCityForecast = createSelector(
	selectWeatherAppState,
	(state: fromWeatherReducer.CityWeatherState) => state.cityForecast
);

export const selectIsForecastLoaded = createSelector(
	selectWeatherAppState,
	(state: fromWeatherReducer.CityWeatherState) => !state.isLoading
);
