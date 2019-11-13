import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { TelevisionAvailComponent } from './television-avail.component';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { MatNativeDateModule, MatCardModule, MatButtonModule } from '@angular/material';
import { FilterModuleNew } from '../availfilter/availfilter.module';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { MatProgressBarModule } from '@angular/material';

const routes: Routes = [
    {
      path: '', component: TelevisionAvailComponent
  }
  ];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
      FilterModuleNew,
      MatProgressBarModule,
      NgCircleProgressModule.forRoot({}),
    RouterModule.forChild(routes) 
  ],
  declarations: [TelevisionAvailComponent],
  exports:[]
})
export class TelevisionAvailModule { }
