import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Weather {
	name: string;
}
@Component({
	selector: 'weather-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	title = 'Weather Application';

	constructor(private http: HttpClient) {}

	public ngOnInit(): void {
		const url = '/api';
		this.http
			.post<Weather>(`${url}/weather`, { city: 'London' })
			.subscribe((response: Weather) => console.log(response));
	}
}
