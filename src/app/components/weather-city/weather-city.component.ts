import { City } from './../../weather';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'weather-city',
	templateUrl: './weather-city.component.html',
	styleUrls: ['./weather-city.component.scss']
})
export class WeatherCityComponent {
	@Input() city: City = {} as City;
	@Output() loadForecast = new EventEmitter<string>();
}
