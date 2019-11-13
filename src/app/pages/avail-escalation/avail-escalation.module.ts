import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MatNativeDateModule, MatProgressBarModule } from '@angular/material';
import {RoundProgressModule, ROUND_PROGRESS_DEFAULTS} from 'angular-svg-round-progressbar';
import { AvailEscalationComponent } from './avail-escalation.component';
import { NgCircleProgressModule } from 'ng-circle-progress';

const routes: Routes = [
  {
    path: '', component: AvailEscalationComponent
}
];


@NgModule({
  imports: [
    CommonModule,
    RoundProgressModule,
    MatProgressBarModule,
    NgCircleProgressModule.forRoot({}),
    RouterModule.forChild(routes)
  ],
  declarations: [AvailEscalationComponent]
})
export class AvailEscalationModule { }
