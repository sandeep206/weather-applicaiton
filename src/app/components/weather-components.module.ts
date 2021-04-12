import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherCityComponent } from './weather-city/weather-city.component';
import { WeatherTodayComponent } from './weather-today/weather-today.component';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';

@NgModule({
	imports: [CommonModule],
	exports: [
		WeatherCityComponent,
		WeatherTodayComponent,
		WeatherForecastComponent
	],
	declarations: [
		WeatherCityComponent,
		WeatherTodayComponent,
		WeatherForecastComponent
	],
	providers: []
})
export class WeatherComponentsModule {}
