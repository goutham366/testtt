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
    NgCircleProgressModule.forRoot({}),
    
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
