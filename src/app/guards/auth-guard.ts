import { Injectable } from '@angular/core';      
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';      
import { Observable } from 'rxjs';      
@Injectable({      
   providedIn: 'root'      
})      
export class AuthorizationGuard implements CanActivate {      
   constructor(private router: Router) { }      
   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {      
      if (this.isLoggedIn()) {      
      return true;      
      }      
   this.router.navigate(['/auth']);      
return false;      
}      
public isLoggedIn(): boolean {      
   let status = false;      
   if (sessionStorage.getItem('isLoggedIn') == "true") {      
      status = true;      
   }    
   else {      
      status = false;      
      }      
   return status;      
   }    
}  