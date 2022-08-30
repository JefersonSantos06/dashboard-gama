import { Injectable } from '@angular/core';
import {environment as env} from "../../../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Cliente} from "../../models/cliente";
import {Empresa} from "../../models/empresa";

@Injectable({
  providedIn: 'root'
})
export class EmpresasTableService {
  url: string = env.urlApi + '/empresa'

  constructor(private http: HttpClient) { }

  getAllEmpresas(pageNumber?: number): Observable<{ content: any; totalElements: any }> {
    const params = new HttpParams()
      .set("page", 0)
      .set("size", 999)

    return this.http.get<Empresa[]>(this.url, {params}).pipe(
      map(
        (res:any) => {
          return {"content" : res.content, "totalElements":res.totalElements};
        }));
  }
}
