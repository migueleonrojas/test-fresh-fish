import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character} from "src/app/interfaces/character";
import { environment } from 'src/environments/environment';
import { Teacher } from '../interfaces/teacher';
@Injectable({
  providedIn: 'root'
})
export class TeachersService {

  constructor(private http: HttpClient) { }

   teachers: Teacher[];

   getTeachers() {

   
      return this.http.get<Teacher[]>(`${environment.urlBase}/staff`);

      
   }
}
