import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'weather-details',
	templateUrl: './weather-details.component.html',
	styleUrls: ['./weather-details.component.scss']
})
export class WeatherDetailsComponent implements OnInit {
	ngOnInit(): void {
		console.log('WeatherDetailsComponent');
	}
}
