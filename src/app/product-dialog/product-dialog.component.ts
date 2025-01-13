import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrl: './product-dialog.component.css'
})


export class ProductDialogComponent {
  product = {
    id: '',
    name: '',
    price: 0,
    description: '',
    category: ''
  };

  @Output() save = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<void>();

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.save.emit(this.product);
    } else {
      
      this.markFormGroupTouched(form);
    }
  }

  onCancel() {
    this.cancel.emit();
  }


  private markFormGroupTouched(form: NgForm) {
    Object.values(form.controls).forEach(control => {
      control.markAsTouched();
    });
  }
}

