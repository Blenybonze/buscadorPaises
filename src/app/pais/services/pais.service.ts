import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(private http: HttpClient) { }

  private _apyUrlV3: string = 'https://restcountries.com/v3.1';
  private _apyUrlV2: string = 'https://restcountries.com/v2';

  //todo tipo observable/resposta
  buscarPais(txtBusca: string): Observable<Pais[]> {
    const url = `${this._apyUrlV3}/name/${txtBusca}`;

    return this.http.get<Pais[]>(url);
  }

  buscarCapital(txtBusca: string): Observable<Pais[]> {
    const url = `${this._apyUrlV3}/capital/${txtBusca}`;

    return this.http.get<Pais[]>(url);
  }

  buscarPaisPorAlpha(id: string): Observable<Pais[]> {
    const url = `${this._apyUrlV3}/alpha/${id}`;

    return this.http.get<Pais[]>(url);
  }

  buscarRegiao(regiao: string): Observable<Pais[]> {
    const url = `${this._apyUrlV2}/regionalbloc/${regiao}`;

    return this.http.get<Pais[]>(url);
  }
}
