import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { AvailFilterComponent } from './avail-filter.component';
import { FormsModule } from '../../../../node_modules/@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    MatProgressBarModule,
    FormsModule
  ],
  declarations: [AvailFilterComponent],
  exports:[AvailFilterComponent]
})
export class FilterModule { }
