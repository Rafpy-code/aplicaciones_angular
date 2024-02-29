import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pedido } from '../model/Pedido';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  constructor(private http:HttpClient) { }

  cargarPedidos(): Observable<Pedido[]> {
    let url = "http://localhost:8028/pedidos";
    return this.http.get<Pedido[]>(url);
  }

  alta(pedido:Pedido):Observable<void>{
    let url = "http://localhost:8028/alta";
    return this.http.post<void>(url, pedido);
  }
}
