import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {SharedModule} from "../../shared/shared.module";
import {ClientesTableModule} from "../../shared/components/clientes-table/clientes-table.module";
import {EmpresasTableModule} from "../../shared/components/empresas-table/empresas-table.module";



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    SharedModule,
    ClientesTableModule,
    EmpresasTableModule
  ]
})
export class DashboardModule { }
