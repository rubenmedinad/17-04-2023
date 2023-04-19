import { Component } from '@angular/core';

@Component({
  selector: 'app-componente1-arrays',
  templateUrl: './componente1-arrays.component.html',
  styleUrls: ['./componente1-arrays.component.css']
})
export class Componente1ArraysComponent {

  numeros: number[] = [1,2];
  dato : number = 1 | 2 | 3;
  cad:string="Nada"
  nombre:nombres=nombres.Alberto


  constructor() {
    console.log(this.numeros)
    //push 
    this.numeros.push(6);
    // pop
    let ultimonombre = this.numeros.pop();
    console.log(ultimonombre);
    //Splice
    //Eliminar
    this.numeros.splice(2, 1)
    console.log(this.numeros)
    //Añadir
    this.numeros.splice(2,0,3)
    console.log(this.numeros)
    //index
    let segundo = this.numeros.indexOf(4)
    console.log(segundo)
    //foreach
    this.numeros.forEach(elemento => console.log(elemento));
    //Union de tipos
    let ejemplo: number = 1|2|3
    console.log(ejemplo)
  };

  ngOnInit(){

  }

  sacarlista(){
    this.numeros.push(this.dato);
    console.log(this.numeros)
    this.cad = "numero añadadido"
    
  }

 }
 enum nombres{
  Manuel="Manuel",
  Ruben="Ruben",
  Ismael="Ismael",
  Fernando="Fernando",
  Alberto="Alberto"
}

console.log(nombres.Manuel)




