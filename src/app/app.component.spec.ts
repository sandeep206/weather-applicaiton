/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CityWeatherState } from './containers/store';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { loadCityWeather } from './containers/store/action/weather.actions';

describe('AppComponent', () => {
	let component: AppComponent;
	let fixture: ComponentFixture<AppComponent>;
	let store: MockStore<CityWeatherState>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			providers: [provideMockStore()],
			imports: [RouterTestingModule],
			declarations: [AppComponent],
			schemas: [CUSTOM_ELEMENTS_SCHEMA]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(AppComponent);
		component = fixture.componentInstance;
		store = TestBed.inject<MockStore<CityWeatherState>>(MockStore);
		fixture.detectChanges();
		spyOn(store, 'dispatch').and.callFake(() => null);
	});

	it('should create the app', () => {
		expect(component).toBeTruthy();
	});

	it('should dispatch action on page load', () => {
		component.ngOnInit();
		const cityId = '2759794';
		expect(store.dispatch).toHaveBeenCalledWith(
			loadCityWeather({ cityId })
		);
	});
});
