import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoundProgressModule, ROUND_PROGRESS_DEFAULTS } from 'angular-svg-round-progressbar';
import { MatCardModule, MatButtonModule } from '@angular/material';
import { MatNativeDateModule, MatProgressBarModule } from '@angular/material';
import { Routes, RouterModule } from '@angular/router';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { AvailRatingComponent } from './avail-rating.component';

const routes: Routes = [
  {
    path: '', component: AvailRatingComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RoundProgressModule,
    RouterModule,
    MatCardModule,
    MatProgressBarModule,
    MatButtonModule,
    NgCircleProgressModule.forRoot({}),
    RouterModule.forChild(routes)
  ],
  declarations: [AvailRatingComponent],
  exports: [
    MatCardModule,
    MatButtonModule,
    RouterModule
  ]
})
export class AvailRatingModule { }
