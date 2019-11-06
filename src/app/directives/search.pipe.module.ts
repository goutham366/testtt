import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";


import { SearchPipePipe } from 'src/app/directives/search.pipes';

@NgModule({
  declarations:[SearchPipePipe], // <---
  imports:[CommonModule],
  exports:[SearchPipePipe] // <---
})

export class SearchPipeModule{}