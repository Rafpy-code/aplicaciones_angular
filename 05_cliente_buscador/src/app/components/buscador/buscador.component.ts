import { BuscadorService } from './../../service/buscador.service';
import { Component } from '@angular/core';
import { Resultado } from '../../model/Resultado';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css',
})
export class BuscadorComponent {
  tematica: string;
  resultados: Resultado[] = [];

  //Hay que declarar el servicio en el constructor
  constructor(private buscadorService: BuscadorService) {}

  buscar(): void {
    this.buscadorService
      .buscarResultados(this.tematica) //Devuelve un Observable<Resultado[]> al cula nos subscribimos
      .subscribe((data) => (this.resultados = data)); //Llamada asíncrona, se ejecuta cuando el resultado esté disponible
  }
}
