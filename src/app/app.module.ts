import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SideNavComponent } from './shared/side-nav/side-nav.component';
import { TopNavComponent } from './shared/top-nav/top-nav.component';
import { ROUTES } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './services/http.service';
import {
  MatInputModule,
  MatOptionModule,
  MatSidenavModule,
  MatSelectModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatButtonModule,
  MatGridListModule,
  MatTabsModule
} from '@angular/material';
//import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ForgotComponent } from './auth/forgot/forgot.component';
import { ForgotOTPpageComponent } from './auth/forgot-otppage/forgot-otppage.component';
import { ResetComponent } from './auth/reset/reset.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ForgotComponent,
    ForgotOTPpageComponent,
    ResetComponent,

    //ImageCropperComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
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
    RouterModule.forRoot(ROUTES, { useHash: true }),
    // MDBBootstrapModule.forRoot()
     //MDBBootstrapModule.forRoot()
  ],
  providers: [HttpService,{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
