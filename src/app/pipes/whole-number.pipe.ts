import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'wholeNumber',
	pure: true
})
export class WholeNumberPipe implements PipeTransform {
	transform(value: string): number {
		return Math.round(+value);
	}
}
