import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import Swal from "sweetalert2";
import {ActivatedRoute, Router} from "@angular/router";
import {EmpresasService} from "../empresas.service";
import {Empresa} from "../../../shared/models/empresa";


@Component({
  selector: 'app-empresa-cadastro',
  templateUrl: './empresa-cadastro.component.html',
  styleUrls: ['./empresa-cadastro.component.scss']
})
export class EmpresaCadastroComponent implements OnInit {
  obj: Empresa = new Empresa();

  empresaFormGroup = this.formBuilder.group({
    remetente: ['', Validators.required],
    cnpj: ['', Validators.required],
    rua: ['', Validators.required],
    numero: ['', Validators.required],
    cidade: ['', Validators.required],
    estado: ['', Validators.required],
    valorFrete: ['', Validators.required],
  });

  constructor(private formBuilder: FormBuilder, private service: EmpresasService,  private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.obj = JSON.parse(<string>this.route.snapshot.paramMap.get('empresa'))
    if (this.obj){
      this.acessandoEmpresa();
    }
  }


  createEmpresa(){
    this.service.createEmpresa(this.empresaFormGroup).subscribe((response: any) => {
      Swal.fire('Empresa cadastrado!','', 'success').then();
      this.empresaFormGroup.reset();
    }, (error: any) => {
      Swal.fire('Empresa não cadastrado!', error.message() , 'error').then();
    });
  }

  acessandoEmpresa(){
    this.empresaFormGroup.controls.remetente.setValue(this.obj.remetente)
    this.empresaFormGroup.controls.cnpj.setValue(this.obj.cnpj)
    this.empresaFormGroup.controls.rua.setValue(this.obj.rua)
    this.empresaFormGroup.controls.numero.setValue(this.obj.numero)
    this.empresaFormGroup.controls.cidade.setValue(this.obj.cidade)
    this.empresaFormGroup.controls.estado.setValue(this.obj.estado)
    this.empresaFormGroup.controls.valorFrete.setValue(this.obj.valorFrete.toString())
  }

  alteraEmpresa(){
    this.service.alteraEmpresa(this.empresaFormGroup, this.obj.id).subscribe((response: any) => {
      Swal.fire('Empresa Alterada!','', 'success').then();
    }, (error: any) => {
      Swal.fire('Nao foi possivel alterar!', error.error, 'error').then();
    });
  }

  excluirEmpresa(){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success ml-2',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Voce tem certeza?',
      text: "Você não poderá reverter isso!",
      icon: 'warning',
      allowOutsideClick: false,
      showCancelButton: true,
      confirmButtonText: 'Sim, Excluir!',
      cancelButtonText: 'Nao, voltar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {

        this.service.excluirEmpresa(this.obj.id).subscribe((response: any) => {
          Swal.fire('Empresa Excluida!','', 'success').then((result) => {
            if (result.isConfirmed){
              this.router.navigate(['/Empresas'])
            }
          });
        }, (error: any) => {
          Swal.fire('Nao foi possivel Excluir!', error.error.message, 'error').then();
        });
      }
    })
  }

}
