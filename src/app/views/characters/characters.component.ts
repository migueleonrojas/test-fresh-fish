import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Character } from 'src/app/interfaces/character';
import { CharactersService } from 'src/app/services/characters.service'
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

import { ThemePalette } from '@angular/material/core';



 


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CharactersComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  characters: Character[];
  displayedColumns: string[] = ['name', 'patronus', 'yearOfBirth', 'image'];
  dataSource:any;
  colorControl: ThemePalette = "warn";
  houses = [
   'slytherin',
   'gryffindor',
   'ravenclaw',
   'hufflepuff'
  ]
  selectedHouse:string;

  constructor(
   private charactersService: CharactersService
  ) { 
   
  }
  ngOnInit(){}
  //obtiene los personajes
  async getCharacters(house:string) {
   
   this.characters =  await this.charactersService.getCharacters(house).toPromise();
   this.dataSource = new MatTableDataSource<Character>(this.characters);
   //es un filtrado personalizado mas que todo para el valor del "yearOfBirth" ya que usa un pipe 
   //para modificar su valor y obtener la edad, por eso se debe adecuar aqui para que pueda filtrarse
   this.dataSource.filterPredicate = (data:any, filter:any) => {

      if(data.yearOfBirth !== null){

         if((new Date().getFullYear() - data.yearOfBirth).toString().includes(filter)){
            return true;
         }
      }
      if(data.name.toLowerCase().includes(filter)){
         return true;

      }
      if(data.patronus.toLowerCase().includes(filter)){
         return true;

      } 

   }
   //se configuara la data para que pueda ordenarse y paginarse
   this.configDataSource();
  }

  configDataSource(){
   this.dataSource.sort = this.sort;
   this.dataSource.sortingDataAccessor = (adata:any, attribute:any) => adata[attribute];
   this.dataSource.paginator = this.paginator;
  }
  // para filtrar la data
  applyFilter(event: Event) {
   if(this.dataSource === undefined) return;

   this.dataSource.filter = (event.target as HTMLInputElement).value.trim().toLowerCase();
 }
}
