import { Hourly } from './../../weather';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
	selector: 'weather-today',
	templateUrl: './weather-today.component.html',
	styleUrls: ['./weather-today.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherTodayComponent {
	@Input() today: Hourly[] = [];
}
