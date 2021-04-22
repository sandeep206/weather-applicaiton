/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { WeatherService } from './../../../weather.service';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Observable } from 'rxjs';
import { WeatherEffects } from './weather.effects';
import { initialState, CityWeatherState } from './../reducer/weather.reducer';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { TestScheduler } from 'rxjs/testing';
import {
	loadCityWeather,
	loadCityWeatherSuccess,
	loadWeatherDetails,
	loadWeatherDetailsSuccess
} from '../action/weather.actions';
import { cityMock, forecastMock } from 'src/app/mocks';
import { RouterTestingModule } from '@angular/router/testing';

describe('Weather Effects', () => {
	const weatherService = jasmine.createSpyObj('weatherService', [
		'getCurrentWeather',
		'getWeatherForecast'
	]);

	let effects: WeatherEffects;
	let actions$: Observable<unknown>;
	let store: MockStore<CityWeatherState>;
	let testScheduler: TestScheduler;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				WeatherEffects,
				provideMockStore({ initialState }),
				provideMockActions(() => actions$),
				{ provide: WeatherService, useValue: weatherService }
			],
			imports: [RouterTestingModule]
		});

		effects = TestBed.inject(WeatherEffects);
		store = TestBed.inject(MockStore);
		store.setState(initialState);

		testScheduler = new TestScheduler((actual, expected) => {
			expect(actual).toEqual(expected);
		});
	});

	it('should have created', () => {
		expect(effects).toBeTruthy();
	});

	describe('loadCityWeatherEffect', () => {
		it('should handle the loadCityWeather action and return the loadCityWeatherSuccess action', () => {
			const cityId = '2759794';

			const action = loadCityWeather({ cityId });
			const expected = loadCityWeatherSuccess({ city: cityMock });

			testScheduler.run(({ hot, cold, expectObservable }) => {
				actions$ = hot('a', { a: action });
				const response = cold('b|', { b: cityMock });
				weatherService.getCurrentWeather.and.returnValue(response);

				expectObservable(effects.loadCityWeatherEffect$).toBe('b', {
					b: expected
				});
			});
		});
	});

	describe('navigateToWeatherDetailsEffect', () => {
		it('should handle loadWeatherDetails action and return the loadWeatherDetailsSuccess', () => {
			const cityId = '2759794';

			const action = loadWeatherDetails({ cityId });
			const expected = loadWeatherDetailsSuccess({
				cityForecast: forecastMock
			});

			testScheduler.run(({ hot, cold, expectObservable }) => {
				actions$ = hot('a', { a: action });
				const response = cold('b', { b: forecastMock });
				weatherService.getWeatherForecast.and.returnValue(response);

				expectObservable(
					effects.navigateToWeatherDetailsEffect$
				).toBe('b', { b: expected });
			});
		});
	});
});
