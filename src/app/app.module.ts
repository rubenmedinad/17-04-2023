import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Componente1ArraysComponent } from './componente1-arrays/componente1-arrays.component';
import { FormsModule } from '@angular/forms';
import { Componente2DirectivasComponent } from './componente2-directivas/componente2-directivas.component';
import { ComponentePadrePacientesComponent } from './componente-padre-pacientes/componente-padre-pacientes.component';
import { ComponentehijoPacientesComponent } from './componentehijo-pacientes/componentehijo-pacientes.component';
import { Componente4Hijo2Component } from './componente4-hijo2/componente4-hijo2.component';
import { Componente4Padre2Component } from './componente4-padre2/componente4-padre2.component';

@NgModule({
  declarations: [
    AppComponent,
    Componente1ArraysComponent,
    Componente2DirectivasComponent,
    ComponentePadrePacientesComponent,
    ComponentehijoPacientesComponent,
    Componente4Hijo2Component,
    Componente4Padre2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
