import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from '../user-service/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserguardService implements CanActivate {

  constructor(public router: Router,
              public userService: UserService) {}
    canActivate(): boolean {
    if (this.userService.isAdmin) {
          this.router.navigate(['/details']); // send them back to home page of application
          return false;
       } else {
            return true;
           }
    }
}
