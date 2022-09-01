import {AfterViewInit, Component, Input, OnDestroy, OnInit, Renderer2, ViewChild} from '@angular/core';
import {Subject} from 'rxjs';
import {ClientesTableService} from "./clientes-table.service";
import {MaskPipe} from "ngx-mask";
import {DatatablesLang} from "../../models/datatablesLang";
import {Cliente} from "../../models/cliente";
import {Router} from "@angular/router";

@Component({
  selector: 'app-clientes-table',
  templateUrl: './clientes-table.component.html',
  styleUrls: ['./clientes-table.component.scss']
})
export class ClientesTableComponent implements OnDestroy, OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();


  constructor(private service: ClientesTableService, private mask: MaskPipe, private router: Router) {
  }

  clienteColumns = [
    {title: 'ID', data: 'id'},
    {title: 'nome', data: 'nome'},
    {title: 'CPF', data: 'cpf', ngPipeInstance: this.mask, ngPipeArgs: ['CPF_CNPJ']},
    {title: 'Rua', data: 'rua'},
    {title: 'Numero', data: 'numero'},
    {title: 'CEP', data: 'cep', ngPipeInstance: this.mask, ngPipeArgs: ['00000-000']},
    {title: 'Estado', data: 'estado'}
  ]

  ngOnInit(): void {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      lengthMenu: [5, 10, 15, 25, 50],
      serverSide: true,
      processing: true,
      ordering: false,
      searching: true,
      responsive: true,
      rowCallback: (row: Node, data: any[] | Object, index: number) => {
        $('td', row).off('click');
        $('td', row).on('click', () => {
          this.router.navigate(['/clientes/cadastro', {cliente: JSON.stringify(data)}]);
        });
        return row;
      },
      language: DatatablesLang.ptbrDatatables,
      ajax: (dataTablesParameters: any, callback: any) => {
        this.service.getAllForTable(dataTablesParameters.start, dataTablesParameters.length, dataTablesParameters.search.value).subscribe(
          (resp: any) => {
            callback({
              recordsTotal: resp.totalElements,
              recordsFiltered: resp.totalElements,
              data: resp.content
            });
          }
        )
      },
      columns: this.clienteColumns
    };
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }


}
