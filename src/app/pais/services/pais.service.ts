import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Pais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(private http: HttpClient) { }

  private _apyUrlV2: string = 'https://restcountries.com/v2';

  get httpParams() {
    return new HttpParams().set('fields', 'name,capital,alpha2Code,population,flag');
  }

  //todo tipo observable/resposta
  buscarPais(txtBusca: string): Observable<Pais[]> {
    const url = `${this._apyUrlV2}/name/${txtBusca}`;

    return this.http.get<Pais[]>(url, { params: this.httpParams });
  }

  buscarCapital(txtBusca: string): Observable<Pais[]> {
    const url = `${this._apyUrlV2}/capital/${txtBusca}`;

    return this.http.get<Pais[]>(url, { params: this.httpParams });
  }

  buscarPaisPorAlpha(id: string): Observable<Pais> {
    const url = `${this._apyUrlV2}/alpha/${id}`;

    return this.http.get<Pais>(url);
  }

  buscarRegiao(regiao: string): Observable<Pais[]> {

    const url = `${this._apyUrlV2}/regionalbloc/${regiao}`;

    return this.http.get<Pais[]>(url, { params: this.httpParams });
  }
}
