import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-paise-input',
  templateUrl: './paise-input.component.html',
  styleUrls: ['./paise-input.component.css']
})
export class PaiseInputComponent {

  txtBusca: string = '';
  @Output() onEnter: EventEmitter<string> = new EventEmitter;

  buscar() {
    this.onEnter.emit(this.txtBusca);
  }
}
