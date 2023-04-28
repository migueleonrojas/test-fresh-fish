import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {

   @Output() sidenavClose = new EventEmitter();
   @Output() currentUrl = new EventEmitter();
   links = ['characters', 'students', 'new-student' ,'teachers'];
   titles = ['Personajes', 'Estudiantes','Nuevos Estudiantes', 'Profesores'];
   activeLink = this.links[0];
  constructor(

  ) { }

  ngOnInit(): void {
  }

  public onSidenavClose(urlRelative:string) {

      

      this.sidenavClose.emit();
      this.currentUrl.emit(urlRelative);
  }

}
