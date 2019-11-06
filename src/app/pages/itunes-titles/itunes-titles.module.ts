import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItunesTitlesRoutingModule } from './itunes-titles-routing.module';
import { FormsModule } from '@angular/forms';
import { ItunesTitlesComponent } from './itunes-titles.component';
import { MatNativeDateModule, MatCardModule, MatButtonModule } from '@angular/material';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { FilterModule } from '../avail-filter/avail-filter.module';
import { ScrollingModule } from '../../../../node_modules/@angular/cdk/scrolling';
import { SearchPipeModule } from 'src/app/directives/search.pipe.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
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
    ItunesTitlesRoutingModule,
    MatNativeDateModule,
    MatCardModule,
    MatButtonModule,
  ],
  exports: [
    MatCardModule,
    MatButtonModule
  ],
  declarations: [ItunesTitlesComponent]
})
export class ItunesTitlesModule { }