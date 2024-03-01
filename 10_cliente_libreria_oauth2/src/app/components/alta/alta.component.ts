import { Component } from '@angular/core';
import { LibrosService } from '../../service/libros.service';
import { Libro } from '../../model/Libro';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrl: './alta.component.css',
})
export class AltaComponent {

  tematicas: string[] = [];
  libro: Libro;

  constructor(private librosService: LibrosService, private router:Router) {}

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
    this.librosService.alta(this.libro).subscribe(()=>this.router.navigate(["/catalogo"]));
    this.libro.isbn=null;
    this.libro.titulo='';
    this.libro.tematica='';
  }

}
