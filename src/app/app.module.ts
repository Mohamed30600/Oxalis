import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContainerPComponent } from './components/container-p/container-p.component';
import { ContainerP1Component } from './components/container-p1/container-p1.component';
import { ContainerP11Component } from './components/container-p11/container-p11.component';
import { ContainerFiltreComponent } from './components/container-filtre/container-filtre.component';
import { EnvellopeComponent } from './components/envellope/envellope.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContainerPComponent,
    ContainerP1Component,
    ContainerP11Component,
    ContainerFiltreComponent,
    EnvellopeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
