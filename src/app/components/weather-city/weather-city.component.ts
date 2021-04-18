import { City } from './../../weather';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
	selector: 'weather-city',
	templateUrl: './weather-city.component.html',
	styleUrls: ['./weather-city.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherCityComponent {
	@Input() city: City = {} as City;
}
