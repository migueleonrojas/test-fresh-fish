import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();
  

  constructor(
   
  ) { }

  ngOnInit(): void {
  }
  //emite de que va ha cerrar o abrir el menu lateral
  public onToggleSidenav(){

      this.sidenavToggle.emit();

  }

}
