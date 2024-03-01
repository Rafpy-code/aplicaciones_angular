import { Component } from '@angular/core';
import { LibrosService } from '../../service/libros.service';
import { Libro } from '../../model/Libro';

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrl: './alta.component.css',
})
export class AltaComponent {

  tematicas: string[] = [];
  libro: Libro;

  constructor(private librosService: LibrosService) {}

  ngOnInit() {
    this.libro = new Libro();
    this.cargarTematicas();
  }

  cargarTematicas() {
    this.librosService
      .cargarTematicas()
      .subscribe((data) => (this.tematicas = data));
  }

  guardar() {
    this.librosService.alta(this.libro).subscribe();
    this.libro.isbn=null;
    this.libro.titulo='';
    this.libro.tematica='';
  }
}
