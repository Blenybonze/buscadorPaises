import { Component } from '@angular/core';

@Component({
  selector: 'app-por-regiao',
  templateUrl: './por-regiao.component.html',
  styleUrls: ['./por-regiao.component.css']
})
export class PorRegiaoComponent {

  regioes: string[] = ['EU', 'CARICOM', 'PA', 'AU', 'NAFTA', 'SAARC',];
  regiaoAtiva: string = '';

  getClasseCSS(regiao: string) {
    return (regiao === this.regiaoAtiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  ativarRegiao(regiao: string) {
    this.regiaoAtiva = regiao;
    //todo fazer chamada de serviço
  }
}
