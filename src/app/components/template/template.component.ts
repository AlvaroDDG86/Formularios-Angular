import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
    .ng-invalid.ng-touched:not(form){
      border:solid 1px red
    }  
  `]
})
export class TemplateComponent{
  usuario:Object = {
    nombre: null,
    apellido: null,
    correo: null,
    pais:""
  }
  paises = [{
    codigo:"ESP",
    nombre:"España"
  },{
    codigo:"FRA",
    nombre:"Francia"
  },{
    codigo:"BRA",
    nombre:"Brasil"
  }]
  constructor() { }

  guardar(forma:NgForm){
    console.log(forma);
    console.log("valor", forma.value);

  }

}
