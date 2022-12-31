import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-regiao',
  templateUrl: './por-regiao.component.html',
  styleUrls: ['./por-regiao.component.css']
})
export class PorRegiaoComponent {

  regioes: string[] = ['EU', 'CARICOM', 'PA', 'AU', 'NAFTA', 'SAARC',];
  regiaoAtiva: string = '';
  paises: Pais[] = [];

  constructor(private paisService: PaisService) { }

  getClasseCSS(regiao: string) {
    return (regiao === this.regiaoAtiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  ativarRegiao(regiao: string) {
    if (regiao === this.regiaoAtiva) return;

    this.regiaoAtiva = regiao;
    this.paises = [];

    this.paisService.buscarRegiao(regiao)
      .subscribe(resp => {
        this.paises = resp;
      })
  }
}
