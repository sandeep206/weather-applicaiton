/* eslint-disable @typescript-eslint/no-unsafe-call */
import { ImageSizePipe } from './image-size.pipe';

fdescribe('ImageSizePipe', () => {
	let pipe: ImageSizePipe;
	let icon = '';

	beforeEach(() => {
		pipe = new ImageSizePipe();
		icon = 'icon';
	});

	it('create an instance', () => {
		expect(pipe).toBeTruthy();
	});

	it('should return small icon URI', () => {
		const size = 'small';
		const URI = pipe.transform(icon, size);
		const expectedURI = 'https://openweathermap.org/img/wn/icon@2x.png';
		expect(URI).toBe(expectedURI);
	});
	it('should return large icon URI', () => {
		const size = 'large';
		const URI = pipe.transform(icon, size);
		const expectedURI = 'https://openweathermap.org/img/wn/icon@4x.png';
		expect(URI).toBe(expectedURI);
	});
});
