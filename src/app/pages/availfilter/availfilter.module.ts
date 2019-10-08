import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvailfilterComponent } from './availfilter.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';



@NgModule({
  imports: [
    CommonModule,
    MatProgressBarModule
  ],
  declarations: [AvailfilterComponent],
  exports:[AvailfilterComponent]
})
export class FilterModuleNew { }
