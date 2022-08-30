import { NgModule } from "@angular/core";
import {CpfCnpjPipe} from "./CpfCnpjPipe";

@NgModule({
  declarations: [
    CpfCnpjPipe
  ],
  exports: [
    CpfCnpjPipe
  ]

})
export class AppPipeModule {

}
