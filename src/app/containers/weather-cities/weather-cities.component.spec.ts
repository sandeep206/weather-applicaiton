/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { By } from '@angular/platform-browser';
import { CityWeatherState, selectCitiesWeather, initialState } from '../store';
import { WeatherCitiesComponent } from './weather-cities.component';
import { WeatherComponentsModule } from './../../components/weather-components.module';
import { WeatherCityComponent } from './../../components/weather-city/weather-city.component';
import { loadWeatherDetails } from '../store/action/weather.actions';
import { cityMock } from 'src/app/mocks';

describe('WeatherCitiesComponent', () => {
	let component: WeatherCitiesComponent;
	let fixture: ComponentFixture<WeatherCitiesComponent>;
	let store: MockStore<CityWeatherState>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [provideMockStore({ initialState })],
			imports: [RouterTestingModule, WeatherComponentsModule],
			declarations: [WeatherCitiesComponent, WeatherCityComponent]
		});

		store = TestBed.inject<MockStore<CityWeatherState>>(MockStore);
		fixture = TestBed.createComponent(WeatherCitiesComponent);
		component = fixture.componentInstance;

		spyOn(store, 'dispatch').and.callFake(() => null);
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should not render the city weather list', () => {
		store.overrideSelector(selectCitiesWeather, []);
		component.ngOnInit();
		fixture.detectChanges();

		expect(
			fixture.debugElement.queryAll(By.css('weather-city')).length
		).toBe(0);
	});

	it('should have one city in weather list', () => {
		store.overrideSelector(selectCitiesWeather, [cityMock, cityMock]);

		component.ngOnInit();
		fixture.detectChanges();

		expect(
			fixture.debugElement.queryAll(By.css('weather-city')).length
		).toBe(2);
	});

	it('should dispatch action', () => {
		const cityId = '1';
		component.onClick(cityId);

		expect(store.dispatch).toHaveBeenCalledWith(
			loadWeatherDetails({ cityId })
		);
	});
});
