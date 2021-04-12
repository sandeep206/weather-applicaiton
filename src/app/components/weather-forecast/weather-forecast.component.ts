import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'weather-forecast',
	templateUrl: './weather-forecast.component.html',
	styleUrls: ['./weather-forecast.component.scss']
})
export class WeatherForecastComponent implements OnInit {
	ngOnInit(): void {
		console.log('WeatherForecastComponent');
	}
}
