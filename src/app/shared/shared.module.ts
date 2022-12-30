import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';

//Modules
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SidebarComponent,
    MenuComponent,
    FooterComponent
  ],
  exports: [
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
