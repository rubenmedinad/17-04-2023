export class listapacientes{
public nombre : string = ""
public apellido : string = ""
public dni : number = 0
public telefono : number = 0
public direccion : number = 0
public email : string = ""

constructor(nombre : string,  apellido: string, dni : number, telefono : number, direccion : number, email : string){
  this.nombre=nombre;
  this.apellido=apellido;
  this.dni=dni
  this.telefono=telefono
  this.direccion=direccion
  this.email=email
}
}