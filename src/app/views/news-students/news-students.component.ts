import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Teacher } from 'src/app/interfaces/teacher';
import { TeachersService } from 'src/app/services/teachers.service';
import { Student } from 'src/app/interfaces/student';

@Component({
  selector: 'app-news-students',
  templateUrl: './news-students.component.html',
  styleUrls: ['./news-students.component.css']
})
export class NewsStudentsComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  students: Student[];
  displayedColumns: string[] = ['name', 'patronus', 'yearOfBirth'];
  dataSource:any;

  constructor() { }

  ngOnInit(): void {
   this.getTeacher();
  }

  async getTeacher() {
   let lc = localStorage;
   if(localStorage.getItem('students') !== null){
      this.students = JSON.parse(lc.getItem('students') || "[]");
   }
   
   
   this.dataSource = new MatTableDataSource<Student>(this.students);
   
   
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
