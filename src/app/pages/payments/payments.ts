import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentService } from '../../services/payment';

@Component({
  selector: 'app-payments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './payments.html',
  styleUrl: './payments.css'
})
export class Payments implements OnInit {
  payments: any[] = [];

  constructor(private paymentService: PaymentService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.paymentService.getPayments().subscribe({
      next: (data) => {
        this.payments = data;
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Payments API failed:', err)
    });
  }
}