/* eslint-disable @typescript-eslint/unbound-method */
import {
	ComponentFixture,
	TestBed,
	fakeAsync,
	tick
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { CityWeatherState, selectCitiesWeather } from '../store';
import { WeatherCitiesComponent } from './weather-cities.component';
import { City } from 'src/app/weather';
import { WeatherComponentsModule } from './../../components/weather-components.module';
import { WeatherCityComponent } from './../../components/weather-city/weather-city.component';
import { loadWeatherDetails } from '../store/action/weather.actions';

describe('WeatherCitiesComponent', () => {
	let component: WeatherCitiesComponent;
	let fixture: ComponentFixture<WeatherCitiesComponent>;
	let store: MockStore<CityWeatherState>;

	const mockCity: RecursivePartial<City> = {
		id: '111',
		name: 'Netherlands',
		sys: { country: 'NL', sunrise: '', sunset: '' },
		weather: [{ icon: '' }],
		main: { temp: '', temp_max: '', temp_min: '', humidity: 10 },
		wind: { speed: '' }
	};

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [provideMockStore()],
			imports: [RouterTestingModule, WeatherComponentsModule],
			declarations: [WeatherCitiesComponent, WeatherCityComponent],
			schemas: [CUSTOM_ELEMENTS_SCHEMA]
		});

		store = TestBed.inject<MockStore<CityWeatherState>>(MockStore);
		fixture = TestBed.createComponent(WeatherCitiesComponent);
		spyOn(store, 'dispatch').and.callFake(() => null);
		component = fixture.componentInstance;
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should not render the city weather list', () => {
		store.overrideSelector(selectCitiesWeather, []);
		fixture.detectChanges();
		component.ngOnInit();

		expect(
			fixture.debugElement.queryAll(By.css('.main .flat-button')).length
		).toBe(0);
	});

	it('should have one city in weather list', fakeAsync(() => {
		store.overrideSelector(selectCitiesWeather, [mockCity as City]);
		fixture.detectChanges();
		component.ngOnInit();
		tick();
		component.cities$.subscribe((cities: City[] | null) => {
			if (cities) {
				expect(cities.length).toBe(1);
			}
		});
	}));

	it('should dispatch action', () => {
		const cityId = '1';
		component.onClick(cityId);

		expect(store.dispatch).toHaveBeenCalledWith(
			loadWeatherDetails({ cityId })
		);
	});
});
