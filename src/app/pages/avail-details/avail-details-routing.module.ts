import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AvailDetailsComponent } from './avail-details.component';

const routes: Routes = [
  {
    path: '',
    component: AvailDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AvailDetailsRoutingModule { }
