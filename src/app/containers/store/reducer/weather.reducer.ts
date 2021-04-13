import { City, Forecast } from './../../../weather';
import { Action, createReducer, on } from '@ngrx/store';
import * as fromWeatherActions from '../action/weather.actions';

export const weatherFeatureKey = 'weather';

export interface CityWeatherState {
	isLoading: boolean;
	errorMessage: string;
	selectedCity: string;
	citiesWeather: City[];
	cityForecast: Forecast | null;
}

export const initialState: CityWeatherState = {
	isLoading: false,
	errorMessage: '',
	selectedCity: '',
	citiesWeather: [],
	cityForecast: null
};

export const cityWeatherReducer = createReducer(
	initialState,
	on(fromWeatherActions.loadCityWeather, (state: CityWeatherState) => ({
		...state,
		isLoading: true,
		errorMessage: ''
	})),
	on(
		fromWeatherActions.loadCityWeatherSuccess,
		(state: CityWeatherState, { city }) => ({
			...state,
			isLoading: false,
			errorMessage: '',
			citiesWeather: [...state.citiesWeather, city]
		})
	),
	on(
		fromWeatherActions.loadCityWeatherFailure,
		fromWeatherActions.loadWeatherDetailsFailure,
		(state: CityWeatherState, { errorMessage }) => ({
			...state,
			errorMessage,
			isLoading: false
		})
	),
	on(
		fromWeatherActions.loadWeatherDetails,
		(state: CityWeatherState, { cityId }) => ({
			...state,
			selectedCity: cityId,
			isLoading: true
		})
	),
	on(
		fromWeatherActions.loadWeatherDetailsSuccess,
		(state: CityWeatherState, { cityForecast }) => ({
			...state,
			isLoading: false,
			errorMessage: '',
			cityForecast
		})
	)
);

export function reducer(
	state: CityWeatherState | undefined,
	action: Action
): CityWeatherState {
	return cityWeatherReducer(state, action);
}
