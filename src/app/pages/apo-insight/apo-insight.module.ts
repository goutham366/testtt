import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvailInsightComponent} from './apo-insight.component'
import { AvailInsightRoutingModule } from './apo-insight-routing.module';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { MatNativeDateModule } from '@angular/material';
import { MatCardModule, MatButtonModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { ImageCropperComponent, ImageCropperModule } from 'ng2-img-cropper';
//import { NgxImageEditorModule } from "ngx-image-editor";
//import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      NgCircleProgressModule.forRoot({}),
      AvailInsightRoutingModule,
      MatNativeDateModule,
      MatCardModule,
      MatButtonModule,
      ImageCropperModule
      //NgxImageEditorModule,
      //FlexLayoutModule
      
    ],
    exports: [
      MatCardModule,
      MatButtonModule
    ],
    declarations: [AvailInsightComponent]
  })
export class AvailInsightModule { }
