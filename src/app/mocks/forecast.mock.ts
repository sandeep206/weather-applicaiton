import { Forecast, Hourly } from 'src/app/weather';
import { cityMock } from './city.mock';
export const hourlyMock: Hourly = {
	main: {
		temp: '7.35',
		temp_min: '6.89',
		temp_max: '7.35',
		pressure: '1032',
		humidity: 57
	},
	weather: [
		{
			id: '802',
			main: 'Clouds',
			description: 'scattered clouds',
			icon: '03d'
		}
	],
	clouds: {
		all: '40'
	},
	wind: {
		speed: '2.49',
		deg: '340'
	},
	dt_txt: '2021-04-14 09:00:00',
	sys: {
		country: 'NL',
		sunrise: '1618375487',
		sunset: '1618425370'
	}
};

export const forecastMock: Forecast = {
	list: [hourlyMock],
	today: [hourlyMock],
	future: [hourlyMock],
	city: cityMock
};
