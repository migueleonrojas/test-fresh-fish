import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Student } from '../interfaces/student';
@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http: HttpClient) { }

   student: Student[];
   //obtiene todos los estudiantes
   getStudents() {

   
      return this.http.get<Student[]>(`${environment.urlBase}/students`);

      
   }
}
