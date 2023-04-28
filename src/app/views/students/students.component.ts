import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Teacher } from 'src/app/interfaces/teacher';
import { StudentsService } from 'src/app/services/students.service';
import { Student } from 'src/app/interfaces/student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  displayedColumns: string[] = ['name', 'patronus', 'yearOfBirth', 'image'];
  student: Student[];
  dataSource:any;

  constructor(
   private studentsService:StudentsService
  ) { }

  ngOnInit(): void {
   this.getStudents();
  }
  async getStudents() {
   
   this.student =  await this.studentsService.getStudents().toPromise();
   this.dataSource = new MatTableDataSource<Student>(this.student);
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
