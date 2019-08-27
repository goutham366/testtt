import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import {FormsModule} from '@angular/forms';
import { UserconfigComponent } from './userconfig.component';
import { MatInputModule, MatTableModule } from '@angular/material';
import { SearchPipePipe } from '../../directives/search.pipes';

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
   
    RouterModule.forChild(routes) 
  ],
  declarations: [UserconfigComponent, SearchPipePipe],
  exports:[]
})
export class UserConfiguartionModule { }
