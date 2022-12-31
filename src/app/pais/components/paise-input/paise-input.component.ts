import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-paise-input',
  templateUrl: './paise-input.component.html',
  styleUrls: ['./paise-input.component.css']
})
export class PaiseInputComponent implements OnInit {

  txtBusca: string = '';
  digita: Subject<string> = new Subject();

  @Input() placeholder: string = ''
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDigita: EventEmitter<string> = new EventEmitter();


  ngOnInit(): void {
    this.digita
      .pipe(debounceTime(300))
      .subscribe(valor => {
        this.onDigita.emit(valor);
      })
  }

  buscar() {
    this.onEnter.emit(this.txtBusca);
  }

  teclaPrecionada() {
    this.digita.next(this.txtBusca)
  }
}
