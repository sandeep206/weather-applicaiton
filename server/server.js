const config = require('./config');
const axios = require('axios');
const cors = require('cors');
const express = require('express');
const app = express();
const weather_data = require('./weather.json');
const forecast_data = require('./forecast.json');
const { response } = require('express');
const apiRouter = express.Router();
const port = process.env.PORT || config.port || 80;

app.use(cors());
app.use(express.json());
app.use(express.static(process.cwd() + '/public'));
app.get('/', (req, res) => {
	res.sendFile(process.cwd() + '/public/index.html');
});

app.use('/api', apiRouter);

apiRouter.get('/weather', (req, res) => {
	console.log('weather request came', req.query.cityId);
	const URI = `${config.apiUrl}/weather?id=${req.query.cityId}&units=metric&appid=${config.apiKey}`;
	axios({
		url: URI,
		responseType: 'json'
	}).then((response) => res.json(response.data));
	// res.json(weather_data);
});

apiRouter.get('/forecast', (req, res) => {
	console.log('forecast request came', req.query.cityId);
	const URI = `${config.apiUrl}/forecast?id=${req.query.cityId}&units=metric&appid=${config.apiKey}`;
	axios({
		url: URI,
		responseType: 'json'
	}).then((response) => res.json(response.data));
	// res.json(forecast_data);
});

app.listen(port, () => {
	console.log(`Server started at port ${port}`);
});
