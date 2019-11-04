import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvailDetailsComponent } from './avail-details.component';
import { AvailDetailsRoutingModule } from './avail-details-routing.module';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { MatNativeDateModule } from '@angular/material';
import { MatCardModule, MatButtonModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { AngularDraggableModule } from 'angular2-draggable';
import {RoundProgressModule, ROUND_PROGRESS_DEFAULTS} from 'angular-svg-round-progressbar';
//import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AngularDraggableModule,
   // DragDropModule,
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
    AvailDetailsRoutingModule,
    MatNativeDateModule,
    MatCardModule,
    MatButtonModule,
    RoundProgressModule
    
  ],
  exports: [
    MatCardModule,
    MatButtonModule
  ],
  declarations: [AvailDetailsComponent]
})
export class AvailDetailsModule { }
