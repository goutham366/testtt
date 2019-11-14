import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvailDetailsComponent } from './avail-details.component';
import { AvailDetailsRoutingModule } from './avail-details-routing.module';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { MatNativeDateModule } from '@angular/material';
import { MatCardModule, MatButtonModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { AngularDraggableModule } from 'angular2-draggable';
import {RoundProgressModule, ROUND_PROGRESS_DEFAULTS} from 'angular-svg-round-progressbar';
//import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AngularDraggableModule,
   // DragDropModule,
    NgCircleProgressModule.forRoot({}),
    AvailDetailsRoutingModule,
    MatNativeDateModule,
    MatCardModule,
    MatButtonModule,
    RoundProgressModule
    
  ],
  exports: [
    MatCardModule,
    MatButtonModule
  ],
  declarations: [AvailDetailsComponent]
})
export class AvailDetailsModule { }
