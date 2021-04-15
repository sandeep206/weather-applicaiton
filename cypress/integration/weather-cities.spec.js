/// <reference types="cypress" />
/// http://on.cypress.io/intellisense

describe('Weather Application', () => {
	beforeEach(() => {
		cy.visit('http://localhost:4200/');
	});

	it('should list weather of 5 cities ', () => {
		cy.url().should('include', '/weather-cities');
		cy.contains('Weather Forecast');
		cy.get('.flat-button').should('have.length', 5);
	});

	it('should have first city as Amsterdam', () => {
		cy.get('weather-city').find(':first').contains('Amsterdam');
	});

	it('should select a city weather forecast details', () => {
		cy.get('.flat-button:first').click();
		cy.contains(`Today's weather`);
		cy.contains(`Next 5 days`);
	});

	it(`should click logo for dashboard`, () => {
		cy.get('h1 a').click();
		cy.contains('Weather Forecast');
	});
});
