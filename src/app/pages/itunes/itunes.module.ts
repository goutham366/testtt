import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItunesComponent } from './itunes.component';
import { Routes, RouterModule } from '@angular/router';
import {RoundProgressModule, ROUND_PROGRESS_DEFAULTS} from 'angular-svg-round-progressbar';
import { FilterModule } from '../avail-filter/avail-filter.module';

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
    FilterModule
  ],
  declarations: [ItunesComponent],
  exports: [RouterModule]
})
export class ItunesModule { }
