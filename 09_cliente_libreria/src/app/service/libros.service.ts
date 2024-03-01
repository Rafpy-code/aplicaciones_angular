import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Libro } from '../model/Libro';
import { Observable } from 'rxjs';
import { PASSWORD, USUARIO } from '../custom_properties';

@Injectable({
  providedIn: 'root',
})
export class LibrosService {
  base64 = 'Basic ' + btoa(USUARIO + ':' + PASSWORD);
  header = new HttpHeaders().set('Authorization', this.base64);
  urlBase = 'http://localhost:8016/';

  constructor(private http: HttpClient) {
  }

  cargarCatalogo(): Observable<Libro[]> {
    return this.http.get<Libro[]>(this.urlBase + 'libros');
  }

  buscarLibro(isbn: number): Observable<Libro> {
    return this.http.get<Libro>(this.urlBase + 'libro/' + isbn, {
      headers: this.header,
    });
  }

  cargarTematicas(): Observable<string[]> {
    return this.http.get<string[]>(this.urlBase + 'tematicas');
  }

  alta(libro: Libro): Observable<void> {
    return this.http.post<void>(this.urlBase + 'alta', libro, {
      headers: this.header,
    });
  }
}
