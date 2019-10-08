import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RoundProgressModule, ROUND_PROGRESS_DEFAULTS} from 'angular-svg-round-progressbar';

import { MatNativeDateModule, MatProgressBarModule } from '@angular/material';
import { MatCardModule, MatButtonModule } from '@angular/material';
import { AvailDashboardRoutingModule } from './avail-dashboard-routing.module';
import { AvailDashboardComponent } from './avail-dashboard.component';
import { FilterModule } from '../avail-filter/avail-filter.module';
import { FilterModuleNew } from '../availfilter/availfilter.module';
@NgModule({
  imports: [
    CommonModule,
    RoundProgressModule,
    AvailDashboardRoutingModule,
    MatNativeDateModule,
    MatCardModule,
    MatButtonModule,
    FilterModuleNew,
    MatProgressBarModule
  ],
  exports: [
    MatCardModule,
    MatButtonModule
  ],
  declarations: [AvailDashboardComponent]
})
export class AvailDashboardModule {
}
