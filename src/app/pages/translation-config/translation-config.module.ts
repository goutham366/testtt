import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TranslationConfigComponent } from './translation-config.component';
import {FormsModule} from '@angular/forms';


const routes: Routes = [
    {
      path: '', component: TranslationConfigComponent
  }
  ];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes) 
  ],
  declarations: [TranslationConfigComponent],
  exports:[]
})
export class TranslationConfigModule { }
