import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { WeatherStateModule } from './containers/store/weather-state.module';
import { WeatherComponentsModule } from './components/weather-components.module';
import { WeatherCitiesComponent } from './containers/weather-cities/weather-cities.component';

@NgModule({
	declarations: [AppComponent, WeatherCitiesComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		WeatherComponentsModule,
		StoreModule.forRoot({}),
		EffectsModule.forRoot([]),
		!environment.production
			? StoreDevtoolsModule.instrument({ maxAge: 25 })
			: [],
		WeatherStateModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
