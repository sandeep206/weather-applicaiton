import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Weather } from './weather';

@Component({
	selector: 'weather-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	constructor(private http: HttpClient) {}

	public ngOnInit(): void {
		console.log('app Component');
		const url = '/api';
		this.http
			.post<Weather>(`${url}/forecast`, { city: 'London' })
			.subscribe((response: Weather) => console.log(response));
	}
}
