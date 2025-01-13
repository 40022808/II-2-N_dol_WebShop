import { Component, OnInit } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  showDialog = false;
  products: any[] = [];
  currentProduct: any = null;

  constructor(private productService: BaseService) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe((data) => {
      this.products = Object.keys(data).map(key => ({ id: key, ...data[key] }));
    });
  }

  openDialog() {
    this.currentProduct = {
      id: '',
      name: '',
      price: 0,
      description: '',
      category: ''
    };
    this.showDialog = true;
  }

  onSave(product: any) {
    if (this.currentProduct.id) {
      this.productService.updateProduct(this.currentProduct.id, product).subscribe(() => {
        this.loadProducts();
        this.currentProduct = null;
      });
    } else {
      this.productService.addProduct(product).subscribe(() => {
        this.loadProducts();
      });
    }
    this.showDialog = false;
  }

  onCancel() {
    this.showDialog = false;
    this.currentProduct = null;
  }

  editProduct(product: any) {
    this.currentProduct = product;
    this.showDialog = true;
  }

  onDelete() {
    if (this.currentProduct && this.currentProduct.id) {
      this.productService.deleteProduct(this.currentProduct.id).subscribe(() => {
        this.loadProducts();
        this.currentProduct = null;
        this.showDialog = false;
      });
    }
  }
}
