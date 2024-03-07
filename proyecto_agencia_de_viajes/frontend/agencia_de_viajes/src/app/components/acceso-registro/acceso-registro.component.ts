import { Component } from '@angular/core';
import Cliente from '../../model/Cliente';
import { ClienteService } from '../../services/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acceso-registro',
  templateUrl: './acceso-registro.component.html',
  styleUrl: './acceso-registro.component.css'
})
export class AccesoRegistroComponent {

  cliente: Cliente;

  constructor(private clienteService: ClienteService, private router:Router){}

  ngOnInit() {
    this.cliente = new Cliente();
  }

  registrar() {
    this.clienteService
      .alta(this.cliente)
      .subscribe({
        next: ()=>this.router.navigate(['/acceso']),
        error: ()=>alert('Usuario ya registrado!')
      });
  }

}
