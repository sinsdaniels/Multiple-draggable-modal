import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkatuPiemersComponent } from './skatuPiemers/skatuPiemers.component';
import { SkatuPiemersDarbiniekiComponent } from './skatu-piemers-darbinieki/skatu-piemers-darbinieki.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LandingPageComponent } from './landing-page/landing-page.component';


const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'skatuPiemers', component: SkatuPiemersComponent},
  {path: 'skatuPiemersDarbinieki', component: SkatuPiemersDarbiniekiComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LandingPageComponent, SkatuPiemersComponent, SkatuPiemersDarbiniekiComponent, PageNotFoundComponent]
