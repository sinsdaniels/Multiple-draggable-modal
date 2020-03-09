import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterPipe} from './header/header.component';
import { LabosanaComponent } from './labosana/labosana.component';
import { HeaderComponent } from './header/header.component';
import { TabulaComponent } from './tabula/tabula.component';
import { ModalComponent } from './modal/modal.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import * as bootstrap from "bootstrap";
import * as $ from 'jquery';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    FilterPipe,
    LabosanaComponent,
    HeaderComponent,
    TabulaComponent,
    ModalComponent,
    SidenavComponent,
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
