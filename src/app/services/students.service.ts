import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character} from "src/app/interfaces/character";
import { environment } from 'src/environments/environment';
import { Teacher } from '../interfaces/teacher';
import { Student } from '../interfaces/student';
@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http: HttpClient) { }

   student: Student[];

   getStudents() {

   
      return this.http.get<Student[]>(`${environment.urlBase}/students`);

      
   }
}
