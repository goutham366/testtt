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
    NgCircleProgressModule.forRoot({}),
    
    RouterModule.forChild(routes) 
  ],
  declarations: [TvEpisodesComponent],
  exports:[]
})
export class TelevisionEpisodeModule { }
