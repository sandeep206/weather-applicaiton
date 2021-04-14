import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'wholeNumber'
})
export class WholeNumberPipe implements PipeTransform {
	transform(value: string): number {
		return Math.round(+value);
	}
}
