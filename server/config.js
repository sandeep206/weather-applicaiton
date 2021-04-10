const dotenv = require('dotenv');
dotenv.config();

module.exports = {
	apiKey: process.env.API_KEY,
	apiUrl: process.env.API_URL,
	port: process.env.PORT,
	defaultCities: process.env.DEFAULT_CITIES
};
