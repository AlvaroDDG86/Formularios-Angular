import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,FormArray } from '@angular/forms';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent implements OnInit {

  forma:FormGroup;
  usuario:Object = {
    nombrecompleto: {
      nombre: 'Álvaro',
      apellido: 'de Dios'
    },
    correo: 'adg@gmail.com',
    pasatiempos:['comer','cantar']
  }

  constructor() {
      this.forma = new FormGroup({
        'nombrecompleto': new FormGroup({
          'nombre': new FormControl('', [
            Validators.required,
            Validators.minLength(5)
          ]),
          'apellido': new FormControl('', Validators.required)
        }),
        'correo': new FormControl('',[
            Validators.required, 
            Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
          ]),
        'pasatiempos': new FormArray([
          new FormControl('Correr', Validators.required)
        ])
      });
      //poner valores a la forma desde un objeto (cargado de la base de datos?)
      // this.forma.setValue(this.usuario);
  }


  guardarCambios(){
    console.log(this.forma.value);
    //No asigna, pone el formulario al formulario original
    // this.forma.reset({
    //   nombrecompleto: {
    //     nombre: '',
    //     apellido: ''
    //   },
    //   correo: ''
    // });
  }
  ngOnInit() {

  }

}
