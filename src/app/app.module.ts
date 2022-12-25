import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{LOCALE_ID} from '@angular/core'

import { HomeModule} from './home/home.module';
import { ArticleHotTopicComponent } from './components/article-hot-topic/article-hot-topic.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleHotTopicComponent,
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
