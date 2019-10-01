import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { AvailFilterComponent } from './avail-filter.component';


@NgModule({
  imports: [
    CommonModule,
    MatProgressBarModule
  ],
  declarations: [AvailFilterComponent],
  exports:[AvailFilterComponent]
})
export class FilterModule { }
