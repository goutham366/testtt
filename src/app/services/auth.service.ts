import { Injectable } from '@angular/core';    
import { LoginComponent } from '../auth/login/login.component';    
    
@Injectable({    
   providedIn: 'root'    
})    
export class AuthService {    
   constructor() { }    
   logout() :void {    
   sessionStorage.setItem('isLoggedIn','false');    
   sessionStorage.removeItem('token');    
   }    
}