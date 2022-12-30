import { Component, Input } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-paises-tabela',
  templateUrl: './paises-tabela.component.html',
  styleUrls: ['./paises-tabela.component.css']
})
export class PaisesTabelaComponent {

  @Input() paises: Pais[] = [];
}
