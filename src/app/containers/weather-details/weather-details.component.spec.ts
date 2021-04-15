/* eslint-disable @typescript-eslint/no-unsafe-call */
import { By } from '@angular/platform-browser';
import { CityWeatherState, selectWeatherForecast } from '../store';
import {
	ComponentFixture,
	fakeAsync,
	TestBed,
	tick
} from '@angular/core/testing';

import { WeatherDetailsComponent } from './weather-details.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { City, Forecast, Hourly } from 'src/app/weather';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('WeatherDetailsComponent', () => {
	let component: WeatherDetailsComponent;
	let fixture: ComponentFixture<WeatherDetailsComponent>;
	let store: MockStore<CityWeatherState>;

	const mockCity: RecursivePartial<City> = {
		id: '111',
		name: 'Netherlands'
	};

	const hourly: RecursivePartial<Hourly[]> = [
		{
			dt_txt: '3pm'
		}
	];

	const mockForecast: RecursivePartial<Forecast> = {
		today: hourly as Hourly[],
		future: hourly as Hourly[],
		city: mockCity as City
	};

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			providers: [provideMockStore()],
			declarations: [WeatherDetailsComponent],
			imports: [RouterTestingModule],
			schemas: [CUSTOM_ELEMENTS_SCHEMA]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(WeatherDetailsComponent);
		component = fixture.componentInstance;
		store = TestBed.inject<MockStore<CityWeatherState>>(MockStore);
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should not display the weather details', () => {
		store.overrideSelector(selectWeatherForecast, {} as Forecast);
		fixture.detectChanges();
		component.ngOnInit();

		expect(
			fixture.debugElement.queryAll(By.css('.weather-by-hour')).length
		).toBe(0);
	});

	it('should have one city in weather list', fakeAsync(() => {
		store.overrideSelector(selectWeatherForecast, mockForecast as Forecast);
		fixture.detectChanges();
		component.ngOnInit();
		tick();
		component.forecast$.subscribe((forecast: Forecast) => {
			expect(forecast.city).toBeDefined();
			expect(forecast.today.length).toBe(1);
			expect(forecast.future.length).toBe(1);
		});
	}));
});
