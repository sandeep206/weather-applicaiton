/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import {
	CityWeatherState,
	initialState,
	selectIsForecastLoaded
} from './containers/store';
import { WeatherForecastGuard } from './weather-forecast.guard';

describe('WeatherForecastGuardService', () => {
	let guard: WeatherForecastGuard;
	let store: MockStore<CityWeatherState>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				WeatherForecastGuard,
				provideMockStore({ initialState })
			]
		});
		guard = TestBed.inject(WeatherForecastGuard);
		store = TestBed.inject(MockStore);
	});

	it('should be created', () => {
		expect(guard).toBeTruthy();
	});

	it('should return false if the data is not loaded', fakeAsync(() => {
		store.overrideSelector(selectIsForecastLoaded, false);
		guard.canActivate().subscribe((data) => {
			expect(data).toBe(false);
		});
		tick();
	}));

	it('should return true if the data is not loaded', fakeAsync(() => {
		store.overrideSelector(selectIsForecastLoaded, true);
		guard.canActivate().subscribe((data) => {
			expect(data).toBe(true);
		});
		tick();
	}));
});
