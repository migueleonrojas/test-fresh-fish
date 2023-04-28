import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Character} from "src/app/interfaces/character";
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { }

   characters: Character[];
   //obtiene todos personajes por su casa de hogwarts
   getCharacters(nameOfHouse:string) {

   
      return this.http.get<Character[]>(`${environment.urlBase}/house/${nameOfHouse}`);

      
   }
}
