import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmpresasComponent} from "./empresas.component";
import {EmpresaMenuComponent} from "./empresa-menu/empresa-menu.component";
import {EmpresaCadastroComponent} from "./empresa-cadastro/empresa-cadastro.component";


const routes: Routes = [
  { path : 'empresas' , component: EmpresasComponent, children: [
      { path: '' , component: EmpresaMenuComponent },
      { path: 'cadastro' , component: EmpresaCadastroComponent },
    ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class EmpresasRoutingModule { }
