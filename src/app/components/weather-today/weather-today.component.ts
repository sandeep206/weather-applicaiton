import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'weather-today',
	templateUrl: './weather-today.component.html',
	styleUrls: ['./weather-today.component.scss']
})
export class WeatherTodayComponent implements OnInit {
	ngOnInit(): void {
		console.log('WeatherTodayComponent');
	}
}
