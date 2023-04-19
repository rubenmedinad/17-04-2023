import { Component } from '@angular/core';
import {listapacientes} from '../modelos/listapacientes'
@Component({
  selector: 'app-componente4-padre2',
  templateUrl: './componente4-padre2.component.html',
  styleUrls: ['./componente4-padre2.component.css']
})
export class Componente4Padre2Component {
  nombre : string = ""
  apellido : string = ""
  dni : number = 0
  telefono : number = 0
  direccion : number = 0
  email : string = ""
  
  pacientes:listapacientes[] = [];  
  

  anadir(){
    this.pacientes.push(new listapacientes(this.nombre, this.apellido, this.dni, this.telefono, this.direccion, this.email))

  }
   

}
