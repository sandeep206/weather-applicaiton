import { City, Forecast } from './../../../weather';
import { createAction, props } from '@ngrx/store';

export const loadCityWeather = createAction(
	'[App Component] Load City Weathers',
	props<{ cityId: string }>()
);

export const loadCityWeatherSuccess = createAction(
	'[Weather Effects] Load City Weather Success',
	props<{ city: City }>()
);

export const loadCityWeatherFailure = createAction(
	'[Weather Effects] Load City Weathers Failure',
	props<{ errorMessage: string }>()
);

export const loadWeatherDetails = createAction(
	'[City Weather] Load Weather Details',
	props<{ cityId: string }>()
);

export const loadWeatherDetailsSuccess = createAction(
	'[Weather Effects] Load Weather Details Success',
	props<{ cityForecast: Forecast }>()
);

export const loadWeatherDetailsFailure = createAction(
	'[Weather Effects] Load Weather Details Failure',
	props<{ errorMessage: string }>()
);
