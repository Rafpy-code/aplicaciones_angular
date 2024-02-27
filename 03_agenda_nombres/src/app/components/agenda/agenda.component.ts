import { Component } from '@angular/core';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.css',
})
export class AgendaComponent {
  nombres: string[] = []; //lista json de cadenas vacía
  nombre: string = ''; //Guarda el nombre introducido en el campo de texto
  nombreSel:string=''; //Guarda el nombre seleccionado

  guardar(): void {
    this.nombres.push(this.nombre);
    this.nombre='';
  }

  eliminar():void{
    this.nombres.forEach((nombre,i) => {
      if (this.nombreSel == nombre) {
        this.nombres.splice(i, 1);
      }
    });
  }

}
