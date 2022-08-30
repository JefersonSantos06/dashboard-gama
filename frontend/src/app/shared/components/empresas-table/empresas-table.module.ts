import { NgModule } from '@angular/core';
import { EmpresasTableComponent } from './empresas-table.component';
import {SharedModule} from "../../shared.module";
import {DataTablesModule} from "angular-datatables";
import {CommonModule} from "@angular/common";
import {AppPipeModule} from "../../pipe/app-pipe.module";



@NgModule({
  declarations: [
    EmpresasTableComponent
  ],
  exports:[
    EmpresasTableComponent
  ],
  imports: [
    SharedModule,
    DataTablesModule,
    AppPipeModule
  ]
})
export class EmpresasTableModule { }
