import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Teacher } from '../interfaces/teacher';
@Injectable({
  providedIn: 'root'
})
export class TeachersService {

  constructor(private http: HttpClient) { }

   teachers: Teacher[];
   //obtiene todos los profesores
   getTeachers() {

   
      return this.http.get<Teacher[]>(`${environment.urlBase}/staff`);

      
   }
}
