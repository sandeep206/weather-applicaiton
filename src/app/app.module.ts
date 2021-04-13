import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherCitiesComponent } from './containers/weather-cities/weather-cities.component';
import { WeatherComponentsModule } from './components/weather-components.module';
@NgModule({
	declarations: [AppComponent, WeatherCitiesComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		WeatherComponentsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
