import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../model/Producto';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {

  constructor(private http: HttpClient) {}

  cargarProductos(): Observable<Producto[]> {
    let url = 'http://localhost:8027/productos';
    return this.http.get<Producto[]>(url);
  }

}
