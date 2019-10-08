import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvailClarificationComponent } from './avail-clarification.component';
import { RoundProgressModule, ROUND_PROGRESS_DEFAULTS } from 'angular-svg-round-progressbar';
import { MatCardModule, MatButtonModule } from '@angular/material';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: '', component: AvailClarificationComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RoundProgressModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    RouterModule.forChild(routes)

  ],
  declarations: [AvailClarificationComponent],
  exports: [
    MatCardModule,
    MatButtonModule,
    RouterModule
  ]
})
export class AvailClarificationModule { }


