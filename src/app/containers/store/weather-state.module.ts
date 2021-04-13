import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { WeatherEffects } from './effects/weather.effects';
import { weatherFeatureKey, reducer } from './reducer/weather.reducer';

@NgModule({
	imports: [
		CommonModule,
		StoreModule.forFeature(weatherFeatureKey, reducer),
		EffectsModule.forFeature([WeatherEffects])
	]
})
export class WeatherStateModule {}
