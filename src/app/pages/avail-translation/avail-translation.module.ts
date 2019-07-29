import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RoundProgressModule, ROUND_PROGRESS_DEFAULTS} from 'angular-svg-round-progressbar';

import {MatCardModule,  MatButtonModule} from '@angular/material';
import { AvailTranslationComponent } from './avail-translation.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: AvailTranslationComponent
}
];

@NgModule({
  imports: [
    CommonModule,
    RoundProgressModule,
    RouterModule,
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
 
    MatCardModule,
    MatButtonModule,
    RouterModule.forChild(routes)
    
  ],
  // providers: [{
  //   provide: ROUND_PROGRESS_DEFAULTS,
  //   useValue: {
  //     color: '#f00',
  //     background: '#0f0'
  //   }
  // }],
  declarations: [AvailTranslationComponent],
  exports:[
    MatCardModule,
    MatButtonModule,
    RouterModule
  ]
 
})
export class AvailTranslationModule {
}
