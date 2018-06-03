import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PetComponent } from './pet/pet.component';
import { DemoComponent } from './demo/demo.component';
import { DemoSettingsFormComponent } from './demo-settings-form/demo-settings-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PetComponent,
    DemoComponent,
    DemoSettingsFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
