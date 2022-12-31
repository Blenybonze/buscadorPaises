import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {

  txtBusca: string = '';

  haErro: boolean = false;
  paises: Pais[] = [];

  paisesSugeridos: Pais[] = [];
  mostrarSugestoes: boolean = false;

  constructor(private PaisService: PaisService) { }

  buscar(txtBusca: string) {
    this.mostrarSugestoes = false;
    this.haErro = false;
    this.txtBusca = txtBusca;

    this.PaisService.buscarPais(txtBusca)
      .subscribe((resp) => {
        this.paises = resp;

      }, (err) => {
        this.haErro = true;
        this.paises = [];
      });
  }

  sugestoes(valor: string) {
    this.haErro = false;
    this.txtBusca = valor;
    this.mostrarSugestoes = true;

    this.PaisService.buscarPais(valor)
      .subscribe(paises => this.paisesSugeridos = paises.splice(0, 5),
        (err) => this.paisesSugeridos = []
      );
  }
}
