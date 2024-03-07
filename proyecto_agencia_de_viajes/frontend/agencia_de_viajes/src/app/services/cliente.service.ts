import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Cliente from '../model/Cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  urlBase: string = 'http://localhost:8000/';

  constructor(private http: HttpClient) {}

  alta(cliente: Cliente): Observable<void> {
    return this.http.post<void>(this.urlBase + 'alta', cliente);
  }

  login(usuario: string, password: string): Observable<Cliente> {
    let params = new HttpParams()
      .set('usuario',usuario)
      .set('password',password)
      console.log(params);
    return this.http.get<Cliente>(
      this.urlBase + 'login/', {params:params}
    );
  }
}
