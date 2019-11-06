import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgCircleProgressModule } from 'ng-circle-progress';

import {MatNativeDateModule, MatProgressBarModule} from '@angular/material';
import {MatCardModule,  MatButtonModule} from '@angular/material';
import { ApoTitlesComponent } from './apo-titles.component';
import { Routes, RouterModule } from '@angular/router';
import { AvailFilterComponent } from '../avail-filter/avail-filter.component';
import { FilterModule } from '../avail-filter/avail-filter.module';
import { FilterModuleNew } from '../availfilter/availfilter.module';
import { MatTooltipModule } from '@angular/material';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { SearchPipeModule } from 'src/app/directives/search.pipe.module';

const routes: Routes = [
  {
    path: '', component: ApoTitlesComponent
}
];

@NgModule({
  imports: [
    CommonModule,
    FilterModule,
    ScrollingModule,
    SearchPipeModule,
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
    MatNativeDateModule,
    MatTooltipModule,
    FilterModuleNew,
    MatProgressBarModule,
    RouterModule.forChild(routes)
    
  ],
  declarations: [ApoTitlesComponent],
  exports:[
    MatCardModule,
    MatButtonModule,
    RouterModule,
    MatTooltipModule,
  ]
 
})
export class APOTitlesModule {
}
