import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AvailDashboardComponent } from './avail-dashboard.component';

const routes: Routes = [
  {
    path: '', component: AvailDashboardComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AvailDashboardRoutingModule { }
