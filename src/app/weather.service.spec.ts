/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { fakeAsync, tick } from '@angular/core/testing';
import { defer, Observable } from 'rxjs';
import { City, Forecast, Hourly } from './weather';

import { WeatherService } from './weather.service';

export function asyncData<T>(data: T): Observable<T> {
	return defer(() => Promise.resolve(data));
}

export function asyncError<T>(error: unknown): Observable<T> {
	return defer(() => Promise.reject(error));
}

describe('WeatherService', () => {
	let httpClientSpy: jasmine.SpyObj<HttpClient>;
	let weatherService: WeatherService;

	const mockCity: RecursivePartial<City> = {
		id: '111',
		name: 'Netherlands'
	};

	const hourly: RecursivePartial<Hourly[]> = [
		{
			dt_txt: '3pm'
		}
	];

	const mockForecast: RecursivePartial<Forecast> = {
		list: hourly as Hourly[],
		city: mockCity as City
	};

	beforeEach(() => {
		httpClientSpy = jasmine.createSpyObj<HttpClient>('HttpClient', ['get']);
		weatherService = new WeatherService(httpClientSpy);
	});

	it('should get the weather report for the city id', fakeAsync(() => {
		httpClientSpy.get.and.returnValue(asyncData(mockCity));

		weatherService.getCurrentWeather('111').subscribe((response) => {
			expect(response).toEqual(
				mockCity as City,
				'expected weather response'
			);
		});
		tick();
	}));

	it('should get the weather forecast for the city id', fakeAsync(() => {
		httpClientSpy.get.and.returnValue(asyncData(mockForecast));

		weatherService.getWeatherForecast('111').subscribe((response) => {
			expect(response).toEqual(
				mockForecast as Forecast,
				'expected forecast response'
			);
		});
		tick();
	}));

	it('should return error when server is not reachable', fakeAsync(() => {
		const response = new HttpErrorResponse({
			error: 'not found',
			status: 404,
			statusText: 'Not Found'
		});

		httpClientSpy.get.and.returnValue(asyncError(response));

		weatherService.getCurrentWeather('1111').subscribe(
			() => null,
			(error: HttpErrorResponse) => expect(error.status).toEqual(404)
		);

		weatherService.getWeatherForecast('1111').subscribe(
			() => null,
			(error: HttpErrorResponse) => expect(error.status).toEqual(404)
		);
		tick();
	}));
});
