import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent {

  txtBusca: string = '';
  haErro: boolean = false;
  capital: Pais[] = [];

  constructor(private PaisService: PaisService) { }

  buscar(txtBusca: string) {
    this.haErro = false;
    this.txtBusca = txtBusca;

    this.PaisService.buscarCapital(txtBusca)
      .subscribe((resp) => {
        this.capital = resp;

      }, (err) => {
        this.haErro = true;
        this.capital = [];
      });
  }
}
