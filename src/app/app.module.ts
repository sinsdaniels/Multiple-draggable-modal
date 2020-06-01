import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { SearchFilterComponent } from './search-filter/search-filter.component';
import { AppComponent } from './app.component';
import { LabosanaComponent } from './labosana/labosana.component';
import { HeaderComponent } from './header/header.component';
import { TabulaComponent } from './tabula/tabula.component';
import { ModalComponent } from './modal/modal.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import * as bootstrap from "bootstrap";
import * as $ from 'jquery';
import { SkatuPiemersDarbiniekiComponent } from './skatu-piemers-darbinieki/skatu-piemers-darbinieki.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    LabosanaComponent,
    HeaderComponent,
    TabulaComponent,
    ModalComponent,
    SidenavComponent,
    SearchFilterComponent,
    SkatuPiemersDarbiniekiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
