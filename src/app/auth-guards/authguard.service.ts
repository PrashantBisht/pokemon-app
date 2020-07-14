import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ProductService } from '../product-services/product.service';
@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {
  constructor(public router: Router,
              public productService: ProductService) {}
  canActivate(): boolean {
    if (Object.keys(localStorage).length === 0) {
      this.router.navigate(['/createProducts']);
      return false;
    } else {
      return true;
    }

  }
}
