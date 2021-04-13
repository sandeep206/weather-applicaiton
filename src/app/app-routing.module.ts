import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherCitiesComponent } from './containers/weather-cities/weather-cities.component';

const routes: Routes = [
	{ path: '', redirectTo: 'weather-cities', pathMatch: 'full' },
	{
		path: 'weather-cities',
		component: WeatherCitiesComponent
	},
	{
		path: 'weather-details',
		loadChildren: () =>
			import('./containers/weather-details/weather-details.module').then(
				(m) => m.WeatherDetailsModule
			)
	},
	{
		path: '**',
		redirectTo: 'weather-cities'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
