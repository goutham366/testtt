import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { TelevisionAvailComponent } from './television-avail.component';
import { RoundProgressModule } from '../../../../node_modules/angular-svg-round-progressbar';
import { MatNativeDateModule, MatCardModule, MatButtonModule } from '../../../../node_modules/@angular/material';
import { FilterModuleNew } from '../availfilter/availfilter.module';
import { NgCircleProgressModule } from '../../../../node_modules/ng-circle-progress';


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
    RouterModule.forChild(routes) 
  ],
  declarations: [TelevisionAvailComponent],
  exports:[]
})
export class TelevisionAvailModule { }
