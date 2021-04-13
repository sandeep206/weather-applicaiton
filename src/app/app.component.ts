import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CityKeyMap } from './weather';
import { CityWeatherState } from './containers/store';
import * as fromWeatherActions from './containers/store/action/weather.actions';

@Component({
	selector: 'weather-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	private cityMap: CityKeyMap[] = [
		{ city: 'Amsterdam', cityId: '2759794' },
		{ city: 'Berlin', cityId: '2950159' },
		{ city: 'Brussels', cityId: '2800866' },
		{ city: 'Paris', cityId: '2988507' },
		{ city: 'Madrid', cityId: '3117735' }
	];

	constructor(public store: Store<CityWeatherState>) {}

	public ngOnInit(): void {
		this.getWeather();
	}

	public getWeather(): void {
		this.cityMap.map(({ cityId }: CityKeyMap) => {
			this.store.dispatch(fromWeatherActions.loadCityWeather({ cityId }));
		});
	}
}
