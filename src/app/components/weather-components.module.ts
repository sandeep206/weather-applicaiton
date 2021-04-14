import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageSizePipe } from '../pipes/image-size.pipe';
import { WholeNumberPipe } from './../pipes/whole-number.pipe';
import { WeatherCityComponent } from './weather-city/weather-city.component';
import { WeatherTodayComponent } from './weather-today/weather-today.component';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';

@NgModule({
	imports: [CommonModule],
	exports: [
		ImageSizePipe,
		WholeNumberPipe,
		WeatherCityComponent,
		WeatherTodayComponent,
		WeatherForecastComponent
	],
	declarations: [
		ImageSizePipe,
		WholeNumberPipe,
		WeatherCityComponent,
		WeatherTodayComponent,
		WeatherForecastComponent
	],
	providers: []
})
export class WeatherComponentsModule {}
