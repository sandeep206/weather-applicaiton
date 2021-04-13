import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';
import { WeatherService } from '../../weather.service';
import { City } from '../../weather';
interface CityKeyMap {
	city: string;
	cityId: string;
}
@Component({
	selector: 'weather-cities',
	templateUrl: './weather-cities.component.html',
	styleUrls: ['./weather-cities.component.scss']
})
export class WeatherCitiesComponent implements OnInit {
	public cities$!: Observable<City[]>;

	private cityMap: CityKeyMap[] = [
		{ city: 'netherlands', cityId: '2759794' },
		{ city: 'germany', cityId: '2921044' },
		{ city: 'belgium', cityId: '2802361' },
		{ city: 'britain', cityId: '2643741' }
	];

	constructor(public weatherService: WeatherService, public router: Router) {}

	ngOnInit(): void {
		this.getWeather();
	}

	public getWeather(): void {
		this.cities$ = forkJoin(
			this.cityMap
				.map(({ cityId }: CityKeyMap) => cityId)
				.map((cityId) => this.weatherService.getCurrentWeather(cityId))
		);
	}
}
