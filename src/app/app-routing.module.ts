import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/components';
import {OrayframeRoutingModule} from './orayframe/orayframe-routing.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'oray',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
    OrayframeRoutingModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
