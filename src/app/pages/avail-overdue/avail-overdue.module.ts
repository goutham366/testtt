import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RoundProgressModule, ROUND_PROGRESS_DEFAULTS} from 'angular-svg-round-progressbar';
import { Routes, RouterModule } from '@angular/router';
import { AvailOverdueComponent } from './avail-overdue.component';


const routes: Routes = [
  {
    path: '', component: AvailOverdueComponent
}
];


@NgModule({
  imports: [
    CommonModule,
    RoundProgressModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AvailOverdueComponent]
})
export class AvailOverdueModule { }
