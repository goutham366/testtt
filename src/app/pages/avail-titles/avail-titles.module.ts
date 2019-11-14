import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvailTitlesComponent } from './avail-titles.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { Routes, RouterModule } from '@angular/router';
import { AvailFilterComponent } from '../avail-filter/avail-filter.component';
import { FilterModule } from '../avail-filter/avail-filter.module';
import { ScrollingModule } from '../../../../node_modules/@angular/cdk/scrolling';
import { SearchPipePipe } from 'src/app/directives/search.pipes';
import { SearchPipeModule } from 'src/app/directives/search.pipe.module';
import {RoundProgressModule, ROUND_PROGRESS_DEFAULTS} from 'angular-svg-round-progressbar';

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
    SearchPipeModule,
    RoundProgressModule,
    NgCircleProgressModule.forRoot({}),
    RouterModule.forChild(routes)
  ],
  
  declarations: [AvailTitlesComponent],
  exports: [RouterModule]
})
export class AvailTitlesModule { }
