import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule,  MatButtonModule} from '@angular/material';
import { Routes, RouterModule } from '@angular/router';
import { MetadataComponent } from './metadata.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { FormsModule } from '@angular/forms';
import { MetadataLanguageComponent } from '../metadata-language/metadata-language.component';
import { MetadataTerrtorialComponent } from '../metadata-terrtorial/metadata-terrtorial.component';
import { ImageCropperModule } from 'ng2-img-cropper';
const routes: Routes = [
  {
    path: '', component: MetadataComponent
}
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgCircleProgressModule.forRoot({}),
    MatCardModule,
    MatButtonModule,
    ImageCropperModule,
    RouterModule.forChild(routes)
    
  ],
  declarations: [MetadataComponent, MetadataLanguageComponent,MetadataTerrtorialComponent],
  exports:[
    MatCardModule,
    MatButtonModule,
    RouterModule
  ]
 
})
export class MetaDataModule {
}
