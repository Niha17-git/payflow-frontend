import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrderService } from '../../services/order';
import { CustomerService } from '../../services/customer';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './order.html',
  styleUrl: './order.css'
})
export class Order implements OnInit {
  orders: any[] = [];
  customers: any[] = [];
  showForm = false;
  showNewCustomerForm = false;

  newOrder = {
    orderNumber: '',
    customerId: null,
    amount: null,
    status: 'Pending'
  };

  newCustomer = {
    fullName: '',
    email: '',
    phoneNumber: ''
  };

  errorMessage = '';
  customerErrorMessage = '';

  constructor(
    private orderService: OrderService,
    private customerService: CustomerService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.loadOrders();
    this.loadCustomers();
  }

  loadOrders() {
    this.orderService.getOrders().subscribe({
      next: (data) => { this.orders = data; this.cdr.detectChanges(); },
      error: (err) => console.error('Orders failed:', err)
    });
  }

  loadCustomers() {
    this.customerService.getCustomers().subscribe({
      next: (data) => { this.customers = data; this.cdr.detectChanges(); },
      error: (err) => console.error('Customers failed:', err)
    });
  }

  createOrder() {
    this.orderService.createOrder(this.newOrder).subscribe({
      next: () => {
        this.showForm = false;
        this.newOrder = { orderNumber: '', customerId: null, amount: null, status: 'Pending' };
        this.errorMessage = '';
        this.loadOrders();
      },
      error: (err) => {
        this.errorMessage = err.error || 'Failed to create order.';
        this.cdr.detectChanges();
      }
    });
  }

  createCustomer() {
    this.customerService.createCustomer(this.newCustomer).subscribe({
      next: (createdCustomer) => {
        this.showNewCustomerForm = false;
        this.newCustomer = { fullName: '', email: '', phoneNumber: '' };
        this.customerErrorMessage = '';
        this.loadCustomers();
        // Auto-select the newly created customer
        setTimeout(() => {
          this.newOrder.customerId = createdCustomer.customerId;
          this.cdr.detectChanges();
        }, 300);
      },
      error: (err) => {
        this.customerErrorMessage = err.error || 'Failed to create customer.';
        this.cdr.detectChanges();
      }
    });
  }
}