import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HomeComponent} from '../pages/home/home.component';
import {MenuHeaderComponent} from '../components/menu-header/menu-header.component';
import {MenuBarComponent} from '../components/menu-bar/menu-bar.component'

@NgModule({
  declarations: [
    HomeComponent,
    MenuHeaderComponent,
    MenuBarComponent
  ],
  exports:[
    HomeComponent,
    MenuHeaderComponent,
    MenuBarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
