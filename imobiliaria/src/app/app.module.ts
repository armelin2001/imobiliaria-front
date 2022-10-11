import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExampleModule } from 'src/material.module';
import { MenuSuperiorComponent } from './shared/componentes/menu-superior/menu-superior.component';
import { CardImoveisComponent } from './shared/componentes/card-imoveis/card-imoveis.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuSuperiorComponent,
    CardImoveisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    MaterialExampleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
