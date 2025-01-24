
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment-timezone';
import { firstValueFrom } from 'rxjs';
import { Animal } from 'src/app/core/models/animal.model';
import { Farm } from 'src/app/core/models/farm.model';
import { environment } from 'src/environment/environment';

@Injectable()
export class AnimalService {
  animalURL: string;

  constructor(private http: HttpClient) {
    this.animalURL = `${environment.apiUrl}/animal/`;
  }


  adicionar(animal: Animal): Promise<Farm> {
    return firstValueFrom(this.http.post<Animal>(this.animalURL, animal));
  }


  atualizar(animal: Animal): Promise<Animal> {
    return firstValueFrom(
      this.http.put(`${this.animalURL}/${animal.id}`, animal)
    ).then((response) => response as Animal);
  }

  buscarPorId(id: number) {
    return firstValueFrom(this.http.get(`${this.animalURL}/${id}`)).then(
      (response) => response as Animal
    );
  }

  listar(): Promise<any> {
    return firstValueFrom(this.http.get(`${this.animalURL}`)).then(
      (response) => {
        const obj = response as any[];
        this.converterStringDate(obj);
        return obj;
      });
  }

  excluir(id: number): Promise<void> {
    return firstValueFrom(this.http.delete<void>(`${this.animalURL}/${id}`));
  }


  converterStringDate(obj: any[]) {
    obj.forEach((element) => {
      element.datagravacao = moment(element.datagravacao, 'YYYY/MM/DD H:mm')
        .tz('America/Sao_Paulo')
        .toDate();
    });
  }


}
