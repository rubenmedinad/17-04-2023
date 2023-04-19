import { Component } from '@angular/core';

@Component({
  selector: 'app-componente2-directivas',
  templateUrl: './componente2-directivas.component.html',
  styleUrls: ['./componente2-directivas.component.css']
})
export class Componente2DirectivasComponent {
  alerta=false
  nombre:string ="Manuel"

  personas: Persona[]=[
    new Persona("Manuel", 33),
    new Persona("Ruben", 20),
    new Persona("Rodrigo", 14)
  ]

}
class  Persona{
  constructor(public nombre: string, public edad: number){}
}
