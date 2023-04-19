import { Component } from '@angular/core';
import {listapacientes} from '../modelos/listapacientes'
@Component({
  selector: 'app-componente-padre-pacientes',
  templateUrl: './componente-padre-pacientes.component.html',
  styleUrls: ['./componente-padre-pacientes.component.css']
})
export class ComponentePadrePacientesComponent {
  
  pacientes:listapacientes[] = [];  

  constructor(){
  }

  ngOnInit(): void{

  }
  anadirpaciente(paciente:listapacientes){
    this.pacientes.push(paciente)

  }
}
