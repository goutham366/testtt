import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedRoutingModule } from './shared-routing.module';
import { TopNavModule } from '../shared/top-nav/top-nav.module';

import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedRoutingModule,
    TopNavModule,
    LoadingBarHttpClientModule
  ],
  declarations: [],
  exports: [LoadingBarHttpClientModule ]
})
export class SharedModule { }
