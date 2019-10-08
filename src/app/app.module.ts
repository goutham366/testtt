import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SideNavComponent } from './shared/side-nav/side-nav.component';
import { TopNavComponent } from './shared/top-nav/top-nav.component';
import { ROUTES } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { LoadingBarModule } from '@ngx-loading-bar/core';
// import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { HttpService } from './services/http.service';
// import { SearchPipePipe } from './directives/search.pipes';

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
  MatTabsModule,
} from '@angular/material';
//import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ForgotComponent } from './auth/forgot/forgot.component';
import { ForgotOTPpageComponent } from './auth/forgot-otppage/forgot-otppage.component';
import { ResetComponent } from './auth/reset/reset.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {
  Event,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router
} from '@angular/router';

import { ResizableDirective } from './directives/resizable';
import { ResizerDirective } from './directives/resizer.directive';
//import { ProfilePageComponent } from 'src/app/pages/profile-page/profile-page.component';
@NgModule({
  declarations: [
    AppComponent,
    ForgotComponent,
    ForgotOTPpageComponent,
    ResetComponent,
    //ImageCropperComponent
    ResizableDirective,
    ResizerDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    // LoadingBarModule,
    // LoadingBarHttpClientModule,
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
    MatToolbarModule,
    MatProgressBarModule,
    RouterModule.forRoot(ROUTES, { useHash: true }),
    // MDBBootstrapModule.forRoot()
    //MDBBootstrapModule.forRoot()
  ],
  providers: [
    HttpService,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
