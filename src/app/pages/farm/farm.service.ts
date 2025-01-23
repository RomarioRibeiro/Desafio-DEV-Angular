
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

}
