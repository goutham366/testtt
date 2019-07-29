import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import {RoundProgressModule, ROUND_PROGRESS_DEFAULTS} from 'angular-svg-round-progressbar';
import { AvailEscalationComponent } from './avail-escalation.component';

const routes: Routes = [
  {
    path: '', component: AvailEscalationComponent
}
];


@NgModule({
  imports: [
    CommonModule,
    RoundProgressModule,
    // NgCircleProgressModule.forRoot({
    //   "backgroundPadding": 7,
    //   "radius": 28,
    //   "space": -2,
    //   "maxPercent": 100,
    //   "unitsColor": "#008040",
    //   "outerStrokeWidth": 2,
    //   "outerStrokeColor": "#008040",
    //   "innerStrokeColor": "#e7e8ea",
    //   "innerStrokeWidth": 2,
    //   "titleColor": "#008040",
    //   "titleFontSize": "12",
    //   "subtitleColor": "#008040",
    //   "animateTitle": false,
    //   "animationDuration": 1000,
    //   "showTitle": true,
    //   "showSubtitle": false,
    //   "showUnits": true,
    //   "clockwise": true
    // }),
    RouterModule.forChild(routes)
  ],
  declarations: [AvailEscalationComponent]
})
export class AvailEscalationModule { }
