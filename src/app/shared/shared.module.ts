import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedRoutingModule } from './shared-routing.module';
import { TopNavModule } from '../shared/top-nav/top-nav.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedRoutingModule,
    TopNavModule
   
  ],
  declarations: [],
  exports: [ ]
})
export class SharedModule { }
