import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
// modules
import { MainmenuComponent } from './mainmenu/mainmenu.component';

@NgModule({
  declarations: [
    MainmenuComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    MainmenuComponent
  ],
  exports: [
    MainmenuComponent
  ]
})
export class ModuleModule { }
