import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { City } from '../../weather';
import { select, Store } from '@ngrx/store';
import { CityWeatherState, selectCitiesWeather } from './../store';
import * as fromWeatherActions from '../store/action/weather.actions';
@Component({
	selector: 'weather-cities',
	templateUrl: './weather-cities.component.html',
	styleUrls: ['./weather-cities.component.scss']
})
export class WeatherCitiesComponent implements OnInit {
	public cities$!: Observable<City[] | null>;

	constructor(public router: Router, public store: Store<CityWeatherState>) {}

	ngOnInit(): void {
		this.cities$ = this.store.pipe(select(selectCitiesWeather));
	}

	onClick(cityId: string): void {
		this.store.dispatch(fromWeatherActions.loadWeatherDetails({ cityId }));
	}
}
