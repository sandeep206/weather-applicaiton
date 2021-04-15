import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { City, Forecast } from './weather';

@Injectable({
	providedIn: 'root'
})
export class WeatherService {
	public apiURI = '/api';
	constructor(public httpClient: HttpClient) {}

	public getCurrentWeather(cityId: string): Observable<City> {
		const params = new HttpParams().append('cityId', cityId);
		return this.httpClient.get<City>(`${this.apiURI}/weather`, { params });
	}

	public getWeatherForecast(cityId: string): Observable<Forecast> {
		const params = new HttpParams().append('cityId', cityId);
		return this.httpClient.get<Forecast>(`${this.apiURI}/forecast`, {
			params
		});
	}
}
