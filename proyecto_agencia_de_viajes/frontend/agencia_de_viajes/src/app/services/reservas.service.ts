import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Vuelo from '../model/Vuelo';

@Injectable({
  providedIn: 'root',
})
export class ReservasService {
  urlBaseHoteles: string = 'http://localhost:8001/';
  urlBaseVuelos: string = 'http://localhost:8002/';
  constructor(private http: HttpClient) {}

  localizacionesService(): Observable<string[]> {
    return this.http.get<string[]>(this.urlBaseHoteles + 'localizaciones');
  }

  hotelesService(localizacion: string): Observable<string[]> {
    return this.http.get<string[]>(this.urlBaseHoteles + 'hoteles/' + localizacion);
  }

  vuelosService(destino: string, plazas: number): Observable<Vuelo[]> {
    return this.http.get<Vuelo[]>(this.urlBaseVuelos + 'vuelos/' + destino + '/' + plazas);
  }
}
