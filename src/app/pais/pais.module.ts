import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//Components
import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { PorRegiaoComponent } from './pages/por-regiao/por-regiao.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { RouterModule } from '@angular/router';
import { PaisesTabelaComponent } from './components/paises-tabela/paises-tabela.component';
import { PaiseInputComponent } from './components/paise-input/paise-input.component';



@NgModule({
  declarations: [
    PorCapitalComponent,
    PorPaisComponent,
    PorRegiaoComponent,
    VerPaisComponent,
    PaisesTabelaComponent,
    PaiseInputComponent
  ],
  exports: [
    PorCapitalComponent,
    PorPaisComponent,
    PorRegiaoComponent,
    VerPaisComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class PaisModule { }
