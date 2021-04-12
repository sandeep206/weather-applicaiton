import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'weather-city',
	templateUrl: './weather-city.component.html',
	styleUrls: ['./weather-city.component.scss']
})
export class WeatherCityComponent implements OnInit {
	ngOnInit(): void {
		console.log('WeatherCityComponent');
	}
}
