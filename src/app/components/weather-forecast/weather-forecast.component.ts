import { Component, Input } from '@angular/core';
import { Hourly } from './../../weather';

@Component({
	selector: 'weather-forecast',
	templateUrl: './weather-forecast.component.html',
	styleUrls: ['./weather-forecast.component.scss']
})
export class WeatherForecastComponent {
	@Input() future: Hourly[] = [];
}
