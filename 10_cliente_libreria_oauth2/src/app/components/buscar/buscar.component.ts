import { Component } from '@angular/core';
import { LibrosService } from '../../service/libros.service';
import { Libro } from '../../model/Libro';
@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrl: './buscar.component.css',
})
export class BuscarComponent {
  isbn: number;
  libro: Libro;

  constructor(private librosService: LibrosService) {}

  ngOnInit() {
  }

  buscar(isbn: number): void {
    this.librosService
      .buscarLibro(isbn)
      .subscribe((data) => (this.libro = data));
  }
}
