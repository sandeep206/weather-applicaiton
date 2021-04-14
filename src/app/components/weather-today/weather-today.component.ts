import { Hourly } from './../../weather';
import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'weather-today',
	templateUrl: './weather-today.component.html',
	styleUrls: ['./weather-today.component.scss']
})
export class WeatherTodayComponent implements OnInit {
	@Input() today: Hourly[] = [];

	ngOnInit(): void {
		console.log('WeatherTodayComponent');
	}
}
