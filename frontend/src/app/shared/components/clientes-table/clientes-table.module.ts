import { NgModule } from '@angular/core';
import { ClientesTableComponent } from './clientes-table.component';
import {SharedModule} from "../../shared.module";
import {DataTablesModule} from "angular-datatables";
import {AppPipeModule} from "../../pipe/app-pipe.module";


@NgModule({
  declarations: [
    ClientesTableComponent
  ],
  exports: [
    ClientesTableComponent
  ],
    imports: [
        SharedModule,
        DataTablesModule,
        AppPipeModule
    ]
})
export class ClientesTableModule { }
