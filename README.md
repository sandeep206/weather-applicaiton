# WeatherApplication
The weather application displays weather of 5 cities on dashboard and forecast details of coming hour and future days.
URL: https://weather-application-206.herokuapp.com/weather-cities
## This project is made with 
- Angular 
- Typescript
- NgRx and RxJs operators
- Node server
- HTML5/ SCSS
## Features covered:
- Weather Dashboard and forecast details 
- Container and Presentational components
- NgRx to store data and queried using selector
- Unit testing using Jasmine
- End to end testing using Cypress.
- ESlint with strict mode for linting
- Prettier for code formatting.
- Weather API keys are stored in .env variables
- Deployed in Heroku and also used proxy config for frontend app and server.


## Commands used
- for frontend server
```bash
npm run start
```

- for node server
```bash
npm run serve
```

- for unit testing using jasmine
```bash
npm run test
```

- for end to end testing using cypress
```bash
npm run e2e
```

- for deployment: building using --prod
```bash
npm run build
```
Note: 
* The artifacts will be stored under `server/public` for deployment. 
* The API key is stored in env variables and should be placed in `server/.env`
```bash
API_KEY=PRIVATE_KEY_FROM_WEATHER_API
API_URL='https://api.openweathermap.org/data/2.5/'
PORT=3000
```
