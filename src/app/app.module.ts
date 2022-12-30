import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{LOCALE_ID} from '@angular/core'

import { HomeModule} from './home/home.module';
import {SectionFooterComponent}from 'src/app/components/section-footer/section-footer.component'


@NgModule({
  declarations: [
    AppComponent,
    SectionFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'en-US' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
