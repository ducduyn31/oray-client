import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {OrayframeComponent} from './orayframe.component';

const routes: Routes = [
  {
    path: 'oray',
    component: OrayframeComponent
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrayframeRoutingModule {}
