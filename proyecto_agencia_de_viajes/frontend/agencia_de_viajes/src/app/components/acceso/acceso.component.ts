import { ClienteService } from './../../services/cliente.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Cliente from '../../model/Cliente';

@Component({
  selector: 'app-acceso',
  templateUrl: './acceso.component.html',
  styleUrl: './acceso.component.css',
})
export class AccesoComponent {
  usuario: string;
  password: string;
  cliente: Cliente;


  constructor(private clienteService: ClienteService , private router: Router) {}

  login(){
    this.clienteService.login(this.usuario, this.password).subscribe(
      (data): Cliente=>this.cliente=data
      if (this.cliente.usuario == this.usuario && this.cliente.password == this.password) {
        this.router.navigate(['/reservas']);
      } else {
        alert('Cliente no encontrado');
        this.router.navigate(['/acceso']);
      }
    );

  }
}


