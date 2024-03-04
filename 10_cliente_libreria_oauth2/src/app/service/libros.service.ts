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
import { TokenResponse } from '../model/TokenResponse';

@Injectable({
  providedIn: 'root',
})
export class LibrosService {
  token: string;
  urlBase: string = 'http://localhost:8020/';

  constructor(private http: HttpClient) {
    this.setToken();
  }

  cargarCatalogo(): Observable<Libro[]> {
    return this.http.get<Libro[]>(this.urlBase + 'libros');
  }

  buscarLibro(isbn: number): Observable<Libro> {
    let heads = new HttpHeaders().set('Authorization', 'Bearer ' + this.token);
    return this.http.get<Libro>(this.urlBase + 'libro/' + isbn, {
      headers: heads,
    });
  }

  cargarTematicas(): Observable<string[]> {
    return this.http.get<string[]>(this.urlBase + 'tematicas');
  }

  alta(libro: Libro): Observable<void> {
    let heads = new HttpHeaders().set('Authorization', 'Bearer ' + this.token);
    return this.http.post<void>(this.urlBase + 'alta', libro, {
      headers: heads,
    });
  }

  //solicitar el token y cambiar autorization por bearer
  setToken(): void {
    let url = URL_AUTH;
    let heads = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    let params = new HttpParams()
    .set('client_id', CLIENT_ID)
    .set('username', USERNAME)
    .set('password', PASSWORD)
    .set('grant_type', GRANT_TYPE);
    this.http
      .post<TokenResponse>(url, params, { headers: heads })
      .subscribe((data) => (this.token = data.access_token));
  }
}
