import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.css']
})
export class ProductDialogComponent {
  @Input() product: any;
  @Output() save = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<void>();
  @Output() delete = new EventEmitter<void>();

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

  onDelete() {
    if (confirm(`Are you sure you want to delete ${this.product.name}?`)) {
      this.delete.emit();
    }
  }

  private markFormGroupTouched(form: NgForm) {
    Object.values(form.controls).forEach(control => {
      control.markAsTouched();
    });
  }
}
