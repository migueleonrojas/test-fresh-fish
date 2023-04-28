import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Teacher } from 'src/app/interfaces/teacher';
import { TeachersService } from 'src/app/services/teachers.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  teachers: Teacher[];
  displayedColumns: string[] = ['name', 'patronus', 'yearOfBirth', 'image'];
  dataSource:any;

  constructor(
   private teachersService: TeachersService
  ) { }

  ngOnInit(): void {
   this.getTeacher();
  }

  async getTeacher() {
   
   this.teachers =  await this.teachersService.getTeachers().toPromise();
   this.dataSource = new MatTableDataSource<Teacher>(this.teachers);
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
   
   this.configDataSource();
  }

  configDataSource(){
   this.dataSource.sort = this.sort;
   this.dataSource.sortingDataAccessor = (adata:any, attribute:any) => adata[attribute];
   this.dataSource.paginator = this.paginator;
  }
  applyFilter(event: Event) {
   this.dataSource.filter = (event.target as HTMLInputElement).value.trim().toLowerCase();
 }

}
