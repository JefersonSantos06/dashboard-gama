import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmpresasComponent} from "./empresas.component";

const routes: Routes = [
  { path : 'empresas' , component: EmpresasComponent, children: [
      { path: '' , component: EmpresasComponent },
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class EmpresasRoutingModule { }
