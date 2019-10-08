import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvailFilterComponent } from './avail-filter.component';


@NgModule({
  imports: [
    CommonModule
  
  ],
  declarations: [AvailFilterComponent],
  exports:[AvailFilterComponent]
})
export class FilterModule { }
