import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'dateRest'
})

export class DatePipe implements PipeTransform {
    transform(value: string): string {

      let yearActual:number = new Date().getFullYear();
      let dateOfBirth = new Date(value).getTime();

      if(value == null) return '';
      return (yearActual - parseInt(value)).toString(); 

        
    }
}