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
apiRouter.get('/', (req, res) => {
	res.send([{ message: 'Hello World' }]);
});

apiRouter.post('/weather', (req, res) => {
	console.log('request came', req.body.city);
	// https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&APPID=3b9e1d181e7567c1c4de5d3e2d6f2997
	// const URI = `${config.apiUrl}weather?q=${req.body.city}&units=metric&APPID=${config.apiKey}`;
	// axios({
	// 	url: URI,
	// 	responseType: 'json'
	// }).then((response) => res.json(response.data));
	res.json(weather_data);
});

apiRouter.post('/forecast', (req, res) => {
	console.log('request came', req.body.city);
	// https://api.openweathermap.org/data/2.5/forecast?q=london&units=metric&APPID=3b9e1d181e7567c1c4de5d3e2d6f2997
	// const URI = `${config.apiUrl}forecast?q=${req.body.city}&units=metric&APPID=${config.apiKey}`;
	// axios({
	// 	url: URI,
	// 	responseType: 'json'
	// }).then((response) => res.json(response.data));
	res.json(forecast_data);
});

app.listen(port, () => {
	console.log(`Server started at port ${port}`);
});
