import { Component, Input } from '@angular/core';
import {listapacientes} from '../modelos/listapacientes'

@Component({
  selector: 'app-componente4-hijo2',
  templateUrl: './componente4-hijo2.component.html',
  styleUrls: ['./componente4-hijo2.component.css']
})
export class Componente4Hijo2Component {
  @Input() pacientes: any = [];


}
