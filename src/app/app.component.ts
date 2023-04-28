import { Component, ViewEncapsulation } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  links = ['characters', 'students', 'new-student' ,'teachers'];
  titles = ['Personajes', 'Estudiantes','Nuevos Estudiantes', 'Profesores'];
  activeLink = this.links[0];
  title = 'hogwarts-school';
  myColor:ThemePalette = "accent";

  constructor(
   private router:Router
  ) {
   router.navigate(['/characters']);
  }

  changeActiveUrl(event:Event){

     let index = this.links.indexOf(event.toString());
     
     this.activeLink = this.links[index];
   

  }
}
