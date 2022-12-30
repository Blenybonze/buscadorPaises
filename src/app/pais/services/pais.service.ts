import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(private http: HttpClient) { }

  private _apyUrl: string = 'https://restcountries.com/v3.1';

  //todo tipo observable/resposta
  buscarPais(txtBusca: string): Observable<Pais[]> {
    const url = `${this._apyUrl}/name/${txtBusca}`;

    return this.http.get<Pais[]>(url);
  }

  buscarCapital(txtBusca: string): Observable<Pais[]> {
    const url = `${this._apyUrl}/capital/${txtBusca}`;

    return this.http.get<Pais[]>(url);
  }

  buscarPaisPorAlpha(id: string): Observable<Pais[]> {
    const url = `${this._apyUrl}/alpha/${id}`;

    return this.http.get<Pais[]>(url);
  }
}
