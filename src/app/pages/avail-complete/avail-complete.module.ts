import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvailCompleteComponent } from './avail-complete.component';
import { Routes, RouterModule } from '@angular/router';
import { NgCircleProgressModule } from 'ng-circle-progress';

const routes: Routes = [
  {
    path: '', component: AvailCompleteComponent
}
];


@NgModule({
  imports: [
    CommonModule,
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
      "clockwise": true
    }),
    RouterModule.forChild(routes),
    
  ],
  declarations: [AvailCompleteComponent],
  
})
export class AvailCompleteModule { }
