import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
// modules
import { MainmenuComponent } from './mainmenu/mainmenu.component';

@NgModule({
  declarations: [
    MainmenuComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [
    MainmenuComponent
  ]
})
export class ModuleModule { }
