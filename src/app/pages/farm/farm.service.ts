
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment-timezone';
import { firstValueFrom } from 'rxjs';
import { Farm } from 'src/app/core/models/farm.model';
import { environment } from 'src/environment/environment';

@Injectable()
export class FarmeService {
  farmURl: string;

  constructor(private http: HttpClient) {
    this.farmURl = `${environment.apiUrl}/farm/`;
  }


  adicionar(farm: Farm): Promise<Farm> {
    return firstValueFrom(this.http.post<Farm>(this.farmURl, farm));
  }


  atualizar(farm: Farm): Promise<Farm> {
    return firstValueFrom(
      this.http.put(`${this.farmURl}/${farm.id}`, farm)
    ).then((response) => response as Farm);
  }

  buscarPorId(id: number) {
    return firstValueFrom(this.http.get(`${this.farmURl}/${id}`)).then(
      (response) => response as Farm
    );
  }

  listar(): Promise<any> {
    return firstValueFrom(this.http.get(`${this.farmURl}`)).then(
      (response) => {
        const obj = response as any[];
        this.converterStringDate(obj);
        return obj;
      });
  }

  converterStringDate(obj: any[]) {
    obj.forEach((element) => {
      element.datagravacao = moment(element.datagravacao, 'YYYY/MM/DD H:mm')
        .tz('America/Sao_Paulo')
        .toDate();
    });
  }


}
