import { Component, EventEmitter } from '@angular/core';
import {listapacientes} from '../modelos/listapacientes'
import {Output} from '@angular/core';

@Component({
  selector: 'app-componentehijo-pacientes',
  templateUrl: './componentehijo-pacientes.component.html',
  styleUrls: ['./componentehijo-pacientes.component.css']
})
export class ComponentehijoPacientesComponent {
  nombre : string = ""
   apellido : string = ""
   dni : number = 0
  telefono : number = 0
   direccion : number = 0
   email : string = ""
  
  @Output() enviardatos = new EventEmitter <listapacientes>()
  ngOnInit(){

  }
  anadir(){
    this.enviardatos.emit(new listapacientes(this.nombre, this.apellido, this.dni, this.telefono, this.direccion, this.email))
  }

}
