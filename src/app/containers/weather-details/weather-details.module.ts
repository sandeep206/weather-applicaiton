import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherDetailsComponent } from './weather-details.component';
import { WeatherDetailsRoutingModule } from './weather-details-routing.module';
import { WeatherComponentsModule } from '../../components/weather-components.module';

@NgModule({
	declarations: [WeatherDetailsComponent],
	imports: [
		CommonModule,
		WeatherDetailsRoutingModule,
		WeatherComponentsModule
	],
	exports: [WeatherDetailsComponent]
})
export class WeatherDetailsModule {}
