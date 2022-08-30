import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ClientesService} from "../clientes/clientes.service";
import Swal from "sweetalert2";
import {EmpresasService} from "./empresas.service";

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.scss']
})
export class EmpresasComponent implements OnInit {


  empresaFormGroup = this.formBuilder.group({
    remetente: ['', Validators.required],
    cnpj: ['', Validators.required],
    rua: ['', Validators.required],
    numero: ['', Validators.required],
    cidade: ['', Validators.required],
    estado: ['', Validators.required],
    valorFrete: ['', Validators.required],
  });

  constructor(private formBuilder: FormBuilder, private service: EmpresasService) { }

  ngOnInit(): void {

  }

  createEmpresa(){
    this.service.createEmpresa(this.empresaFormGroup).subscribe((response: any) => {
      Swal.fire('Empresa cadastrada!','', 'success').then();
      this.empresaFormGroup.reset();
    }, error => {
      Swal.fire('Cliente não cadastrado!', error.message() , 'error').then();
    });
  }

}
