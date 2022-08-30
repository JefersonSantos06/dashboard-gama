import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClientesComponent} from "./clientes.component";

const routes: Routes = [
  { path : 'clientes' , component: ClientesComponent, children: [
      { path: '' , component: ClientesComponent },
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }