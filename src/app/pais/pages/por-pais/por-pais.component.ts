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

  constructor(private PaisService: PaisService) { }

  buscar(txtBusca: string) {
    this.haErro = false;
    this.txtBusca = txtBusca;

    this.PaisService.buscarPais(txtBusca)
      .subscribe((resp) => {
        console.log(resp);
        this.paises = resp;

      }, (err) => {
        this.haErro = true;
        this.paises = [];
      });
  }
}
