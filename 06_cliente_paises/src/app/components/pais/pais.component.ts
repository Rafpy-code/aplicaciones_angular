import { Component } from '@angular/core';
import { PaisService } from '../../service/pais.service';
import { Pais } from '../../model/Pais';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrl: './pais.component.css',
})
export class PaisComponent {
  continentes: any[] = [];
  paises: Pais[] = [];
  continenteSel: string;

  constructor(private paisService: PaisService) {
    this.verContinentes()
  }

  verContinentes(): void {
    this.paisService
      .cargarContinentes() //Devuelve un Observable<Resultado[]> al cual nos subscribimos
      .subscribe((data) => (this.continentes = data)); //Llamada asíncrona, se ejecuta cuando el resultado esté disponible
  }

  verPaises(continente: string): void {
    this.paisService
      .cargarPaises(continente)
      .subscribe((data) => (this.paises = data));
  }
}
