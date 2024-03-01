import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Libro } from '../model/Libro';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  urlBase = 'http://localhost:8016/';

  constructor(private http: HttpClient) {}

  cargarCatalogo(): Observable<Libro[]>{
    return this.http.get<Libro[]>(this.urlBase+'libros');
  }

  buscarLibro(isbn:number): Observable<Libro> {
    return this.http.get<Libro>(this.urlBase+'libro/'+isbn);
  }

  cargarTematicas():Observable<string[]> {
    return this.http.get<string[]>(this.urlBase+'tematicas')
  }

  alta(libro:Libro):Observable<void> {
    return this.http.post<void>(this.urlBase+'alta', libro);
  }

}
