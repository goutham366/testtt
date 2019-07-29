import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { ForgotComponent } from './forgot/forgot.component';
import { ResetComponent } from './reset/reset.component';
import { MatInputModule, MatOptionModule, MatSidenavModule, MatSelectModule, MatIconModule, MatListModule, MatMenuModule,MatButtonModule,MatGridListModule, MatTabsModule ,MatCheckboxModule} from '@angular/material';

import { RouterModule, Routes } from '@angular/router';
//import { LoginContainerComponent } from './login-container/login-container.component';
const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'login', component:LoginComponent}
];
@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
     MatOptionModule,
     MatSidenavModule,
     MatSelectModule,
     MatIconModule,
     MatListModule,
     MatMenuModule,
     MatButtonModule,
     MatGridListModule,
     MatTabsModule,
    MatCheckboxModule,
    RouterModule.forChild(routes)
  ],

  declarations: [LoginComponent],
  exports: [RouterModule]
})
export class AuthModule { }
