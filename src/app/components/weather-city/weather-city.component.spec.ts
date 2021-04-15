import { ImageSizePipe } from './../../pipes/image-size.pipe';
import { WeatherComponentsModule } from './../weather-components.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherCityComponent } from './weather-city.component';
import { City } from 'src/app/weather';

describe('WeatherCityComponent', () => {
	let component: WeatherCityComponent;
	let fixture: ComponentFixture<WeatherCityComponent>;
	const mockCity: RecursivePartial<City> = {
		id: '111',
		name: 'Netherlands',
		sys: { country: 'NL', sunrise: '', sunset: '' },
		weather: [{ icon: '' }],
		main: { temp: '', temp_max: '', temp_min: '', humidity: 10 },
		wind: { speed: '' }
	};

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [WeatherCityComponent, ImageSizePipe],
			imports: [WeatherComponentsModule]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(WeatherCityComponent);
		component = fixture.componentInstance;
	});

	it('should create', () => {
		component.city = mockCity as City;
		fixture.detectChanges();
		expect(component).toBeTruthy();
	});
});
