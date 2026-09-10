import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReconciliationService } from '../../services/reconciliation';

@Component({
  selector: 'app-reconciliation',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reconciliation.html',
  styleUrl: './reconciliation.css'
})
export class Reconciliation implements OnInit {
  results: any[] = [];
  orderIdToRun: number | null = null;

  constructor(private reconciliationService: ReconciliationService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.load();
  }

  load() {
    this.reconciliationService.getResults().subscribe({
      next: (data) => {
        this.results = data;
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Reconciliation results failed:', err)
    });
  }

  runReconciliation() {
    if (!this.orderIdToRun) return;
    this.reconciliationService.reconcileOrder(this.orderIdToRun).subscribe({
      next: () => {
        this.orderIdToRun = null;
        this.load();
      },
      error: (err) => console.error('Reconcile failed:', err)
    });
  }
}