import { City } from './../../weather';
import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'weather-city',
	templateUrl: './weather-city.component.html',
	styleUrls: ['./weather-city.component.scss']
})
export class WeatherCityComponent implements OnInit {
	@Input() city: City = {} as City;
	ngOnInit(): void {
		console.log('WeatherCityComponent', this.city);
	}
}
