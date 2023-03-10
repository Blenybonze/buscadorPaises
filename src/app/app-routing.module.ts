import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

//Components
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegiaoComponent } from './pais/pages/por-regiao/por-regiao.component';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';


const routes: Routes = [
    {
        path: '',
        component: PorPaisComponent,
        pathMatch: 'full'
    },
    {
        path: 'regiao',
        component: PorRegiaoComponent,
    },
    {
        path: 'capital',
        component: PorCapitalComponent,
    },
    {
        path: 'pais/:id',
        component: VerPaisComponent,
    },
    {
        path: '**',
        redirectTo: '',
    },
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
})

export class AppRoutingModule {

}