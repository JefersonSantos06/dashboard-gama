import {Component, OnDestroy, OnInit} from '@angular/core';
import {Cliente} from "../../models/cliente";
import {Subject} from "rxjs";
import {ClientesTableService} from "../clientes-table/clientes-table.service";
import {EmpresasTableService} from "./empresas-table.service";
import {Empresa} from "../../models/empresa";

@Component({
  selector: 'app-empresas-table',
  templateUrl: './empresas-table.component.html',
  styleUrls: ['./empresas-table.component.scss']
})
export class EmpresasTableComponent implements OnDestroy, OnInit {

  data: Empresa[] = [];
  dtOptions: DataTables.Settings = {
    pagingType: 'full_numbers',
    pageLength: 5,
    processing: true,
    lengthMenu: [5, 10, 20]
  };
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private service: EmpresasTableService) { }

  ngOnInit(): void {
    this.getAll();
  }

  private getAll() {
    this.service.getAllEmpresas().subscribe((response: any) => {
      this.data = response.content;
      setTimeout(()=>{
        $('#dataTables-empresas').DataTable(this.dtOptions);
      }, 1);
    }, error => console.error(error));
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}
