import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, map, switchMap, tap } from 'rxjs/operators';
import { City, Forecast } from 'src/app/weather';
import * as featureActions from '../action/weather.actions';

import { WeatherService } from './../../../weather.service';
@Injectable()
export class WeatherEffects {
	loadCityWeatherEffect$ = createEffect(() =>
		this.actions$.pipe(
			ofType(featureActions.loadCityWeather),
			concatMap(({ cityId }) => {
				return this.weatherService.getCurrentWeather(cityId).pipe(
					map((city: City) =>
						featureActions.loadCityWeatherSuccess({ city })
					),
					catchError((error: Error) =>
						of(
							featureActions.loadCityWeatherFailure({
								errorMessage: error.message
							})
						)
					)
				);
			})
		)
	);

	navigateToWeatherDetailsEffect$ = createEffect(() =>
		this.actions$.pipe(
			ofType(featureActions.loadWeatherDetails),
			switchMap(({ cityId }) => {
				return this.weatherService.getWeatherForecast(cityId).pipe(
					map((cityForecast: Forecast) =>
						featureActions.loadWeatherDetailsSuccess({
							cityForecast
						})
					),
					catchError((error: Error) => {
						return of(
							featureActions.loadCityWeatherFailure({
								errorMessage: error.message
							})
						);
					})
				);
			}),
			tap(() => void this.router.navigate(['/weather-details']))
		)
	);

	constructor(
		public router: Router,
		public actions$: Actions,
		public weatherService: WeatherService
	) {}
}
