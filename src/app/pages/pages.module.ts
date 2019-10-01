import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TopNavComponent } from '../shared/top-nav/top-nav.component';
import { SideNavComponent } from '../shared/side-nav/side-nav.component';
import { PagesComponent } from './pages-component';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    // NgProgressModule.forRoot(),
    // NgProgressHttpClientModule
  ],
  declarations: [PagesComponent, TopNavComponent, SideNavComponent],
  exports:[]
})
export class PagesModule { }
