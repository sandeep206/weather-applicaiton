import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'weather-cities',
	templateUrl: './weather-cities.component.html',
	styleUrls: ['./weather-cities.component.scss']
})
export class WeatherCitiesComponent implements OnInit {
	ngOnInit(): void {
		console.log('WeatherCitiesComponent');
	}
}
