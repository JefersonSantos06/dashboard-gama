import { Injectable } from '@angular/core';
import {environment as env} from "../../../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmpresasTableService {
  url: string = env.urlApi + '/empresa'

  constructor(private http: HttpClient) { }

  getAllForTable(start: number, lenght: number, search: string): Observable<any> {
    const params = new HttpParams()
      .set("page", (start / lenght))
      .set("size", lenght)
      .set("search", search)

    return this.http.get<any>( this.url, {params}).pipe(
      map((resp: any) => {
          return resp
        }
      ));
  }
}
