import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgCircleProgressModule } from 'ng-circle-progress';

import {MatNativeDateModule} from '@angular/material';
import {MatCardModule,  MatButtonModule} from '@angular/material';

import { Routes, RouterModule } from '@angular/router';
import { WorkorderComponent } from './workorder.component';
import {FormsModule} from '@angular/forms';
import { AvailFilterComponent } from '../avail-filter/avail-filter.component';
import { FilterModule } from '../avail-filter/avail-filter.module';


const routes: Routes = [
    {
      path: '', component: WorkorderComponent
  }
  ];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FilterModule,
    NgCircleProgressModule.forRoot({
      "backgroundPadding": 7,
      "radius": 28,
      "space": -2,
      "maxPercent": 100,
      "unitsColor": "#008040",
      "outerStrokeWidth": 2,
      "outerStrokeColor": "#008040",
      "innerStrokeColor": "#e7e8ea",
      "innerStrokeWidth": 2,
      "titleColor": "#008040",
      "titleFontSize": "12",
      "subtitleColor": "#008040",
      "animateTitle": false,
      "animationDuration": 1000,
      "showTitle": true,
      "showSubtitle": false,
      "showUnits": true,
      "clockwise": false
    }),
 
    MatCardModule,
    MatButtonModule,
    RouterModule.forChild(routes)
    
  ],
  declarations: [WorkorderComponent],
  exports:[]
})
export class WorkorderModule { }
