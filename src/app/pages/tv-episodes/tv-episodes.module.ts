import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { FilterModule } from '../avail-filter/avail-filter.module';
import { TvEpisodesComponent } from './tv-episodes.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { SearchPipeModule } from 'src/app/directives/search.pipe.module';
const routes: Routes = [
    {
      path: '', component: TvEpisodesComponent
  }
  ];

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
    
    RouterModule.forChild(routes) 
  ],
  declarations: [TvEpisodesComponent],
  exports:[]
})
export class TelevisionEpisodeModule { }
