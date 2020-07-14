import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product-services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  productList = [];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    const values = [];
    const keys = Object.keys(localStorage);
    let i = keys.length;

    while ( i-- ) {
      this.productList.push(JSON.parse(localStorage.getItem(keys[i])));
    }
    // this.productList = this.productService.getProductArray()

}
}
