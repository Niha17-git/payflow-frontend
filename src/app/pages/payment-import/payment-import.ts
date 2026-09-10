import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentService } from '../../services/payment';

@Component({
  selector: 'app-payment-import',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './payment-import.html',
  styleUrl: './payment-import.css'
})
export class PaymentImport {
  selectedFile: File | null = null;
  result: any = null;
  errorMessage = '';

  constructor(private paymentService: PaymentService, private cdr: ChangeDetectorRef) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  upload() {
    if (!this.selectedFile) return;
    this.paymentService.importPayments(this.selectedFile).subscribe({
      next: (res) => {
        this.result = res;
        this.errorMessage = '';
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.errorMessage = 'Import failed. Check the file format.';
        console.error('Import failed:', err);
        this.cdr.detectChanges();
      }
    });
  }
}