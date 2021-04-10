const config = require('./config');
const axios = require('axios');
const cors = require('cors');
const express = require('express');
const app = express();
const data = require('./weather.json');
const apiRouter = express.Router();

app.use(cors());
app.use(express.json());
app.use('/api', apiRouter);

apiRouter.get('/', (req, res) => {
	res.send([{ message: 'Hello World' }]);
});

apiRouter.post('/weather', (req, res) => {
	console.log('request came', req.body.city);
	// const URI = `${config.apiUrl}weather?q=${req.body.city}&units=metric&APPID=${config.apiKey}`;
	// axios({
	// 	url: URI,
	// 	responseType: 'json'
	// }).then((response) => res.json(response.data));
	res.json(data);
});

app.listen(config.port, () => {
	console.log(`Server started at port ${config.port}`);
});
