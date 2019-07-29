import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TopNavComponent } from '../shared/top-nav/top-nav.component';
import { SideNavComponent } from '../shared/side-nav/side-nav.component';
import { PagesComponent } from '../pages/pages-component';
import { LanguageComponent } from './language/language.component';
import { AvailfilterComponent } from './availfilter/availfilter.component';
//import { ImageCropperModule } from 'ng2-img-cropper';
//import {ImageCropperComponent} from 'ng2-img-cropper';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule 
    //ImageCropperModule
  ],
  declarations: [PagesComponent, TopNavComponent, SideNavComponent,LanguageComponent],
  exports:[]
})
export class PagesModule { }
