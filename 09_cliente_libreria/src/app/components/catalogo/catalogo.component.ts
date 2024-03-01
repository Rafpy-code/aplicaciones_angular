import { Component } from '@angular/core';
import { LibrosService } from '../../service/libros.service';
import { Libro } from '../../model/Libro';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent {

  libros:Libro[] = [];

  constructor(private librosService:LibrosService){}

  ngOnInit(){
    this.verCatalogo();
  }

  verCatalogo(): void {
    this.librosService
      .cargarCatalogo() //Devuelve un Observable<Resultado[]> al cual nos subscribimos
      .subscribe((data) => (this.libros = data)); //Llamada asíncrona, se ejecuta cuando el resultado esté disponible
  }

}
