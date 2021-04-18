import { Pipe, PipeTransform } from '@angular/core';

export type ImageSizeType = 'small' | 'large';
@Pipe({
	name: 'imageSize',
	pure: true
})
export class ImageSizePipe implements PipeTransform {
	transform(icon: string, imageType: ImageSizeType): string {
		const size = imageType === 'small' ? '2x' : '4x';
		return `https://openweathermap.org/img/wn/${icon}@${size}.png`;
	}
}
