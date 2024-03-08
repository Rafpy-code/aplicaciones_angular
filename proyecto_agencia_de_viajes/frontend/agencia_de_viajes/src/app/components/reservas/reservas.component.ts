import { Component } from '@angular/core';
import Hotel from '../../model/Hotel';
import { ReservasService } from '../../services/reservas.service';
import Vuelo from '../../model/Vuelo';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrl: './reservas.component.css',
})
export class ReservasComponent {
  hotel: Hotel;
  localizaciones: string[] = [];
  nombres: string[] = [];
  plazas: number[] = [1, 2, 3, 4];
  vuelos: Vuelo[]=[];
  localizacionSel: string;
  personasSel:string;
  plazasSel:number;

  constructor(
    private reservasService: ReservasService,
  ) {}

  ngOnInit() {
    this.hotel = new Hotel();
    this.localizacionesExistentes();
  }

  localizacionesExistentes() {
    this.reservasService
      .localizacionesService()
      .subscribe((data) => {
        (this.localizaciones = data);
      });
  }

  hotelesDisponibles(localizacion: string):void{
    this.reservasService
      .hotelesService(localizacion)
      .subscribe((data) =>{
         (this.nombres=data);
         console.log(this.nombres);
      });
  }

  vuelosDisponibles(destino: string, plazas:number):void{
    this.reservasService
      .vuelosService(destino,plazas)
      .subscribe((data) => {
        (this.vuelos=data);
        console.log(this.vuelos);
      });
  }

}
