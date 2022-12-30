import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {

  txtBusca: string = 'olá mundo';
  haErro: boolean = false;

  constructor(private PaisService: PaisService) { }

  buscar() {
    this.haErro = false;
    console.log(this.txtBusca);

    this.PaisService.buscarPais(this.txtBusca)
      .subscribe((resp) => {
      }, (err) => {
        this.haErro = true;
      });
  }
}
