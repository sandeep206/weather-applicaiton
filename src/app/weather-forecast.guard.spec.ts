import { TestBed } from '@angular/core/testing';

import { WeatherForecastGuard } from './weather-forecast.guard';

describe('WeatherForecastGuardService', () => {
	let service: WeatherForecastGuard;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(WeatherForecastGuard);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
