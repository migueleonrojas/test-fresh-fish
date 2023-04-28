import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'dateRest'
})

//hace la resta del año de la fecha actual menos el año de nacimiento del registro para adecuar la
//data en la tabla
export class DatePipe implements PipeTransform {
    transform(value: string): string {

      let yearActual:number = new Date().getFullYear();
      let dateOfBirth = new Date(value).getTime();

      if(value == null) return '';
      return (yearActual - parseInt(value)).toString(); 

        
    }
}