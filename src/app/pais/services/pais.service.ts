import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(private http: HttpClient) { }

  private _apyUrl: string = 'https://restcountries.com/v3.1';

  //todo tipo observable/resposta
  buscarPais(txtBusca: string): Observable<any> {
    const url = `${this._apyUrl}/name/${txtBusca}`;

    return this.http.get(url);
  }

}
