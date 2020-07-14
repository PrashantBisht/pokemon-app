import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ProductService } from '../product-services/product.service';
import { Item } from '../models/item';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {
  itemFormGroup: FormGroup;
  itemFormArray: FormArray;
  addProductsButton = false;

  myForm: FormGroup;
  arr: FormArray;

  constructor(private fb: FormBuilder,
              private productService: ProductService) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      arr: this.fb.array([this.createItem()])
    });
  }

  createItem() {
    return this.fb.group({
      itemName: ['', [Validators.required, Validators.minLength(3),  Validators.pattern('^[a-zA-Z0-9]+$')]],
      itemDescription: ['', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z0-9]+$')]],
      itemPrice: ['', [Validators.required, Validators.pattern('^[0-9]*\.[0-9]{2}$')]],
      itemCategory: ['', Validators.required],
      itemImageURL: ['', [Validators.required, Validators.pattern('^.*\.(jpg|png|gif|jpeg)$')]],
      itemMobNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      itemTelType: ['', Validators.required],
    });
  }

  addItem() {
      this.arr = this.myForm.get('arr') as FormArray;
      if (this.arr.length <= 4 ) {
          this.arr.push(this.createItem());
        }
  }

  onSubmit() {
    const product = new Item();
    for (let item of this.myForm.value.arr) {
        product.itemName = item.itemName;
        product.itemDescription = item.itemDescription;
        product.itemPrice = item.itemPrice;
        product.itemCategory = item.itemCategory;
        product.itemImageURL = item.itemImageURL;
        product.itemMobNumber = item.itemMobNumber;
        product.itemTelType = item.itemTelType;
        this.productService.setProduct(product);
        localStorage.setItem(product.itemName, JSON.stringify(product));
    }
  }

  resetForms() {
    this.myForm.reset();
  }

}
