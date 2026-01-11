import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(value: number, arr: number[]): number {
x:Number
for (let index = 0; index < arr.length; index++) {
   if(arr[index]==value)
   return index
}
    return -1;
  }

}
