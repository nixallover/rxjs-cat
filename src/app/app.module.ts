import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MarbleComponent } from './marble/marble.component';
import { MarbleDemoComponent } from './marble-demo/marble-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    MarbleComponent,
    MarbleDemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
