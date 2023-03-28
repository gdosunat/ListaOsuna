import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TablaReferenciasComponent } from './components/tabla-referencias/tabla-referencias.component';

@NgModule({
  declarations: [
    AppComponent,
    TablaReferenciasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
