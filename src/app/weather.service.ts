import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { City, Forecast, Hourly, Weather } from './weather';
import { map } from 'rxjs/operators';

function constructImgURI(weatherList: Weather[]): Weather[] {
	return weatherList.map((weather) => {
		return {
			...weather,
			icon: `https://openweathermap.org/img/wn/${weather.icon}@4x.png`
		};
	});
}

@Injectable({
	providedIn: 'root'
})
export class WeatherService {
	public apiURI = '/api';
	constructor(public httpClient: HttpClient) {}

	public getCurrentWeather(cityId: string = 'London'): Observable<City> {
		return this.httpClient
			.post<City>(`${this.apiURI}/weather`, { cityId })
			.pipe(
				map((city: City) => {
					return {
						...city,
						weather: constructImgURI(city.weather)
					};
				})
			);
	}

	public getWeatherForecast(cityId: string): Observable<Forecast> {
		return this.httpClient
			.post<Forecast>(`${this.apiURI}/forecast`, { cityId })
			.pipe(
				map((forecast) => {
					return {
						...forecast,
						list: forecast.list.map((hourly: Hourly) => {
							return {
								...hourly,
								weather: constructImgURI(hourly.weather)
							};
						})
					};
				})
			);
	}
}
