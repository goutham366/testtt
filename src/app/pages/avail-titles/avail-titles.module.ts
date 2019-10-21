import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvailTitlesComponent } from './avail-titles.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { Routes, RouterModule } from '@angular/router';
import { AvailFilterComponent } from '../avail-filter/avail-filter.component';
import { FilterModule } from '../avail-filter/avail-filter.module';
import { ScrollingModule } from '../../../../node_modules/@angular/cdk/scrolling';
const routes: Routes = [
  {
    path: '', component: AvailTitlesComponent
}
];
@NgModule({
  imports: [
    CommonModule,
    FilterModule,
    ScrollingModule,
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
    FilterModule,
    RouterModule.forChild(routes)
  ],
  
  declarations: [AvailTitlesComponent],
  exports: [RouterModule]
})
export class AvailTitlesModule { }
