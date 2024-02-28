import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pais } from '../model/Pais';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  urlBase: string = 'http://localhost:8032/';

  constructor(private http: HttpClient) {}

  cargarContinentes(): Observable<any[]> {
    return this.http.get<any[]>(this.urlBase + 'continentes');
  }

  cargarPaises(continente: string): Observable<Pais[]> {
    //Llamada asíncrona
    return this.http.get<Pais[]>(
      `${this.urlBase}paises/${continente}`
    );
  }
}
