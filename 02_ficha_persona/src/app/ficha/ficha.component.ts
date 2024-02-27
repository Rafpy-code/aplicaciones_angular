import { Component } from '@angular/core';
import { Persona } from '../model/Persona';

@Component({
  selector: 'app-ficha',
  templateUrl: './ficha.component.html',
  styleUrl: './ficha.component.css',
})
export class FichaComponent {
  persona:Persona;
  resultado: string = '';

  constructor(){
    this.persona=new Persona();
  }

  grabar(): void {
    this.resultado =
      'Te llamas ' +
      this.persona.nombre +
      ', tienes ' +
      this.persona.edad +
      ' años y eres del departamento ' +
      this.persona.departamento;
  }
}
