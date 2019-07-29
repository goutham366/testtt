import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule,  MatButtonModule} from '@angular/material';
import { Routes, RouterModule } from '@angular/router';
import { MetadataComponent } from './metadata.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
const routes: Routes = [
  {
    path: '', component: MetadataComponent
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
      "clockwise": false
    }),
    MatCardModule,
    MatButtonModule,
    RouterModule.forChild(routes)
    
  ],
  declarations: [MetadataComponent],
  exports:[
    MatCardModule,
    MatButtonModule,
    RouterModule
  ]
 
})
export class MetaDataModule {
}
