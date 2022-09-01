import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from "./clientes.component";
import {ClientesCadastroComponent} from "./clientes-cadastro/clientes-cadastro.component";
import {ClientesMenuComponent} from "./clientes-menu/clientes-menu.component";


const routes: Routes = [
  { path : 'clientes' , component: ClientesComponent, children: [
      { path: '' , component: ClientesMenuComponent },
      { path: 'cadastro' , component: ClientesCadastroComponent },
    ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
