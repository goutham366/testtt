import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule,  MatButtonModule} from '@angular/material';
import { Routes, RouterModule } from '@angular/router';
import { MetadataComponent } from './metadata.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { FormsModule } from '@angular/forms';
import { MetadataLanguageComponent } from '../metadata-language/metadata-language.component';
import { MetadataTerrtorialComponent } from '../metadata-terrtorial/metadata-terrtorial.component';
import { ImageCropperModule } from 'ng2-img-cropper';
const routes: Routes = [
  {
    path: '', component: MetadataComponent
}
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
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
    ImageCropperModule,
    RouterModule.forChild(routes)
    
  ],
  declarations: [MetadataComponent, MetadataLanguageComponent,MetadataTerrtorialComponent],
  exports:[
    MatCardModule,
    MatButtonModule,
    RouterModule
  ]
 
})
export class MetaDataModule {
}
