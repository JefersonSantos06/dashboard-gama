import { NgModule } from '@angular/core';
import { EmpresasTableComponent } from './empresas-table.component';
import {SharedModule} from "../../shared.module";
import {DataTablesModule} from "angular-datatables";
import {CommonModule, CurrencyPipe} from "@angular/common";
import {AppPipeModule} from "../../pipe/app-pipe.module";
import {MaskPipe} from "ngx-mask";



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
  ], providers: [
    {provide: MaskPipe},
    {provide: CurrencyPipe},
  ],
})
export class EmpresasTableModule { }
