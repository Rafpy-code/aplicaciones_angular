import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccesoComponent } from './components/acceso/acceso.component';
import { ReservasComponent } from './components/reservas/reservas.component';
import { MisReservasComponent } from './components/mis-reservas/mis-reservas.component';
import { AccesoRegistroComponent } from './components/acceso-registro/acceso-registro.component';

const routes: Routes = [
  {
    path: 'acceso',
    component: AccesoComponent,
  },
  {
    path: 'registro',
    component: AccesoRegistroComponent,
  },
  {
    path: 'reservas',
    component: ReservasComponent,
  },
  {
    path: 'misreservas',
    component: MisReservasComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
