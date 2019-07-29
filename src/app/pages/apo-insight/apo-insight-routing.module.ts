import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AvailInsightComponent} from './apo-insight.component'

const routes: Routes = [
  {
    path: '',
    component: AvailInsightComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AvailInsightRoutingModule { }
