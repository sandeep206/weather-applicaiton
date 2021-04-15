import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { CityWeatherState, selectWeatherForecast } from '../store';
import { Forecast } from './../../weather';

@Component({
	selector: 'weather-details',
	templateUrl: './weather-details.component.html',
	styleUrls: ['./weather-details.component.scss']
})
export class WeatherDetailsComponent implements OnInit {
	public forecast$!: Observable<Forecast>;

	constructor(public store: Store<CityWeatherState>, public router: Router) {}

	ngOnInit(): void {
		this.forecast$ = this.store.pipe(select(selectWeatherForecast));
	}

	back(): void {
		void this.router.navigate(['/weather-cities']);
	}
}
