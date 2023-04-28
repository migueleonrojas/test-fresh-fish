import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './views/characters/characters.component';
import { StudentsComponent } from './views/students/students.component';
import { TeachersComponent } from './views/teachers/teachers.component';
import { NewStudentApplicationComponent } from './views/new-student-application/new-student-application.component';
import { NewsStudentsComponent } from './views/news-students/news-students.component';

const routes: Routes = [
   {
      path: 'characters',
      component: CharactersComponent
   },
   {
      path: 'students',
      component: StudentsComponent
   },
   {
      path: 'teachers',
      component: TeachersComponent
   },
   {
      path: 'new-student-application',
      component: NewStudentApplicationComponent 
   },
   {
      path: 'new-student',
      component: NewsStudentsComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
