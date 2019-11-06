import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import {FormsModule} from '@angular/forms';
import { UserconfigComponent } from './userconfig.component';
import { MatInputModule, MatTableModule } from '@angular/material';
import { SearchPipePipe } from '../../directives/search.pipes';
import { SearchPipeModule } from 'src/app/directives/search.pipe.module';

const routes: Routes = [
    {
      path: '', component: UserconfigComponent
  }
  ];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatTableModule,
    SearchPipeModule,
    RouterModule.forChild(routes) 
  ],
  declarations: [UserconfigComponent],
  exports:[]
})
export class UserConfiguartionModule { }
