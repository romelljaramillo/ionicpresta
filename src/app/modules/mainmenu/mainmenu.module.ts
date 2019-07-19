import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainmenuComponent } from './mainmenu.component';

@NgModule({
  declarations: [
    MainmenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RouterModule,
    MainmenuComponent
  ]
})
export class MainmenuModule { }
