import { URL_AUTH } from './../custom_properties';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Libro } from '../model/Libro';
import { Observable } from 'rxjs';
import {
  CLIENT_ID,
  GRANT_TYPE,
  PASSWORD,
  USERNAME,
} from '../custom_properties';

@Injectable({
  providedIn: 'root',
})
export class LibrosService {
  urlBase = 'http://localhost:8020/';
  header = new HttpHeaders().set(
    'Content-Type',
    'application/x-www-form-urlencoded'
  );
  params = new HttpParams();

    //solicitar el token y cambiar autorization por bearer

  constructor(private http: HttpClient) {}

  cargarCatalogo(): Observable<Libro[]> {
    return this.http.get<Libro[]>(this.urlBase + 'libros');
  }

  buscarLibro(isbn: number): Observable<Libro> {
    this.params.set('client_id', CLIENT_ID);
    this.params.set('username', USERNAME);
    this.params.set('password', PASSWORD);
    this.params.set('grant_type', GRANT_TYPE);
    return this.http.get<Libro>(this.urlBase + 'libro/' + isbn, {
      headers: this.header,
      params: this.params,
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
