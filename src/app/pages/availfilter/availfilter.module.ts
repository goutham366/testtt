import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvailfilterComponent } from './availfilter.component';



@NgModule({
  imports: [
    CommonModule
  
  ],
  declarations: [AvailfilterComponent],
  exports:[AvailfilterComponent]
})
export class FilterModuleNew { }
