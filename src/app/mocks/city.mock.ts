import { City } from '../weather';

export const cityMock: City = {
	coord: {
		lon: '4.8897',
		lat: '52.374'
	},
	weather: [
		{
			id: '802',
			main: 'Clouds',
			description: 'scattered clouds',
			icon: '03d'
		}
	],
	base: 'stations',
	main: {
		temp: '8.27',
		temp_min: '7.22',
		temp_max: '8.89',
		pressure: '1031',
		humidity: 57
	},
	visibility: '10000',
	wind: {
		speed: '4.63',
		deg: '40'
	},
	clouds: {
		all: '40'
	},
	dt: '1618414688',
	sys: {
		country: 'NL',
		sunrise: '1618375487',
		sunset: '1618425370'
	},
	timezone: '7200',
	id: '2759794',
	name: 'Amsterdam'
};
