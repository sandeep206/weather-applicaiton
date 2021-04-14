import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { City, Forecast, Hourly, HourlyMap } from './weather';
import { map, tap } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class WeatherService {
	public apiURI = '/api';
	constructor(public httpClient: HttpClient) {}

	public getCurrentWeather(cityId: string = 'London'): Observable<City> {
		return this.httpClient.post<City>(`${this.apiURI}/weather`, { cityId });
	}

	public getWeatherForecast(cityId: string): Observable<Forecast> {
		return this.httpClient.post<Forecast>(`${this.apiURI}/forecast`, {
			cityId
		});
	}
}
