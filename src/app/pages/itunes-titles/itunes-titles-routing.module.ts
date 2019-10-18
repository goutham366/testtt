import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItunesTitlesComponent } from './itunes-titles.component';

const routes: Routes = [
  {
    path: '',
    component: ItunesTitlesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItunesTitlesRoutingModule { }
