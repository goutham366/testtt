import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RoundProgressModule, ROUND_PROGRESS_DEFAULTS} from 'angular-svg-round-progressbar';
import { MatNativeDateModule, MatProgressBarModule } from '@angular/material';
import { NgCircleProgressModule } from 'ng-circle-progress';

import {MatCardModule,  MatButtonModule} from '@angular/material';
import { AvailTranslationComponent } from './avail-translation.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: AvailTranslationComponent
}
];

@NgModule({
  imports: [
    CommonModule,
    RoundProgressModule,
    RouterModule,
    NgCircleProgressModule.forRoot({}),
 
    MatCardModule,
    MatButtonModule,
    MatProgressBarModule,
    RouterModule.forChild(routes)
    
  ],
  // providers: [{
  //   provide: ROUND_PROGRESS_DEFAULTS,
  //   useValue: {
  //     color: '#f00',
  //     background: '#0f0'
  //   }
  // }],
  declarations: [AvailTranslationComponent],
  exports:[
    MatCardModule,
    MatButtonModule,
    RouterModule
  ]
 
})
export class AvailTranslationModule {
}
