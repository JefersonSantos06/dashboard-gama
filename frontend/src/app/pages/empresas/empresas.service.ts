import { Injectable } from '@angular/core';
import {environment as env} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {FormGroup} from "@angular/forms";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Empresa} from "../../shared/models/empresa";

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  url: string = env.urlApi + '/empresa'

  constructor(private http: HttpClient) { }

  createEmpresa(empresa: FormGroup): Observable<any>{
    return this.http.post<Empresa>(this.url, empresa.value).pipe(
      map((data: any) => {
        return data;
      }));
  }
}
