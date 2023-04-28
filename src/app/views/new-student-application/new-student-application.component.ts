import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Student } from 'src/app/interfaces/student';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-new-student-application',
  templateUrl: './new-student-application.component.html',
  styleUrls: ['./new-student-application.component.css']
})
export class NewStudentApplicationComponent implements OnInit {
   formLogin: FormGroup;
   students: Student[] = [];
   student : Student;

   constructor(
      private snackBar: MatSnackBar
   ) { 
      this.formBuild();
   }
   //creando un formulario reactivo
  formBuild() {
   this.formLogin = new FormGroup({
      name: new FormControl('', [
       Validators.minLength(3),
       Validators.maxLength(30),
       Validators.required
     ]),
     patronus: new FormControl('', [
       Validators.minLength(3),
       Validators.maxLength(20),
       Validators.required
     ]),
     age: new FormControl('', [
      Validators.minLength(1),
      Validators.maxLength(3),
      Validators.required,
      Validators.pattern('[0-9]+')
    ]),
    
   });
 }


  ngOnInit(): void {
  }

  async submit(e:Event)  {

   e.preventDefault();//evitar que haga el evento por defecto que es enviar data y actualizar
   let lc = localStorage;
   //valida si hay estudiantes nuevos guardados para agregarlo si es que hay
   if(localStorage.getItem('students') !== null){
      this.students = JSON.parse(lc.getItem('students') || "[]");
   }
   
   this.student = {
      name:this.formLogin.value.name,
      patronus:this.formLogin.value.patronus,
      yearOfBirth:this.formLogin.value.age
   }
  
   this.students.push(this.student)
   //guarda el estudiante actual mas los anteriores agregados
   lc.setItem('students', JSON.stringify(this.students));

   this.snackBar.open('La solicitud del estudiante nuevo es exitosa','Cerrar');
   this.formLogin.reset();//limpia los valores de los inputs


   
  }

  
}
