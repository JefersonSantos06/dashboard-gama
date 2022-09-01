import {NgModule} from '@angular/core';
import {ClientesTableComponent} from './clientes-table.component';
import {SharedModule} from "../../shared.module";
import {DataTablesModule} from "angular-datatables";
import {MaskPipe} from "ngx-mask";


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
  ], providers: [
    {provide: MaskPipe},
  ],
})
export class ClientesTableModule {
}
