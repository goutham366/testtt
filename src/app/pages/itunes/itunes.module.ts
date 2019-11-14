import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItunesComponent } from './itunes.component';
import { Routes, RouterModule } from '@angular/router';
import {RoundProgressModule, ROUND_PROGRESS_DEFAULTS} from 'angular-svg-round-progressbar';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { FilterModule } from '../avail-filter/avail-filter.module';
import { MatProgressBarModule } from '@angular/material';
const routes: Routes = [
    {
      path: '', component: ItunesComponent
  }
]
@NgModule({
  imports: [
    CommonModule,
    RoundProgressModule,
    RouterModule.forChild(routes),
    FilterModule,
    MatProgressBarModule,
    NgCircleProgressModule.forRoot({})
  ],
  declarations: [ItunesComponent],
  exports: [RouterModule]
})
export class ItunesModule { }
