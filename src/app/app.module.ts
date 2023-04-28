import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentsComponent } from './views/students/students.component';
import { CharactersComponent } from './views/characters/characters.component';
import { TeachersComponent } from './views/teachers/teachers.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table'
import { MatInputModule } from '@angular/material/input'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import { MatSortModule } from '@angular/material/sort'
import { MatSelectModule} from '@angular/material/select'
import { CharactersService } from './services/characters.service';
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { DatePipe } from 'src/app/pipes/date.pipe';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from'@angular/material/icon';
import { NewStudentApplicationComponent } from './views/new-student-application/new-student-application.component';
import { NewsStudentsComponent } from './views/news-students/news-students.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {  MatToolbarModule } from '@angular/material/toolbar';
import {  MatSidenavModule } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './navigation/header/header.component';
import { MatListModule } from '@angular/material/list';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
   schemas:[
      CUSTOM_ELEMENTS_SCHEMA 
   ],
  declarations: [
    AppComponent,
    StudentsComponent,
    CharactersComponent,
    TeachersComponent,
    DatePipe,
    NewStudentApplicationComponent,
    NewsStudentsComponent,
    HeaderComponent,
    SidenavListComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatTabsModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSortModule,
    HttpClientModule,
    HttpClientModule,
    MatSelectModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatSidenavModule,
    MatTabsModule,
    CommonModule,
    MatListModule,
    MatMenuModule
    
    
  ],
  exports: [
   MatTabsModule,
   MatSidenavModule,
   MatToolbarModule,
   MatListModule,
   MatMenuModule
   
  ],
  providers: [
   CharactersService,
   
 
   
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
