import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})


export class ProductComponent {
  showDialog = false;

  openDialog() {
    this.showDialog = true;
  }

  onSave(product: any) {
    this.showDialog = false;
  }

  onCancel() {
    this.showDialog = false;
  }
}
