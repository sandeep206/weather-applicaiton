import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { CityWeatherState, selectIsForecastLoaded } from './containers/store';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class WeatherForecastGuard implements CanActivate {
	constructor(public store: Store<CityWeatherState>) {}

	canActivate(): Observable<boolean> {
		return this.store.pipe(select(selectIsForecastLoaded));
	}
}
