import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedRoutingModule } from './shared-routing.module';
import { TopNavModule } from '../shared/top-nav/top-nav.module';
import { MatDialogModule, MatButtonModule } from '@angular/material';

import { DialogOverviewExampleDialog } from './side-nav/side-nav.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedRoutingModule,
    TopNavModule,
    MatDialogModule,
    MatButtonModule
  ],
  declarations: [DialogOverviewExampleDialog],
  entryComponents: [DialogOverviewExampleDialog],
  exports: [ ]
})
export class SharedModule { }
