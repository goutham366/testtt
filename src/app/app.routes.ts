import { Routes } from '@angular/router';
import { ForgotComponent } from './auth/forgot/forgot.component';
import { ForgotOTPpageComponent } from './auth/forgot-otppage/forgot-otppage.component';
import { ResetComponent } from './auth/reset/reset.component';
import { AuthorizationGuard } from './guards/auth-guard';



export const ROUTES: Routes = [
    { path: '', redirectTo: 'auth', pathMatch: 'full' },
    { path: 'forgot', component: ForgotComponent },
    { path: 'forgotOTPpage', component: ForgotOTPpageComponent },
    { path: 'reset', component: ResetComponent },
    { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
    { path: 'pages', loadChildren: './pages/pages.module#PagesModule', canActivate : [AuthorizationGuard] },
    
];
