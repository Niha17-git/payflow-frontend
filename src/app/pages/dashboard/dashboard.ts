import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DashboardService } from '../../services/dashboard';
import { ExceptionService } from '../../services/exception';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {
  summary: any = null;
  recentExceptions: any[] = [];

  constructor(
    private dashboardService: DashboardService,
    private exceptionService: ExceptionService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.dashboardService.getSummary().subscribe({
      next: (data) => {
        this.summary = data;
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Summary API ERROR:', err)
    });

    this.exceptionService.getExceptions().subscribe({
      next: (data) => {
        this.recentExceptions = data.slice(0, 5);
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Exceptions failed:', err)
    });
  }

  goTo(path: string) {
    this.router.navigate([path]);
  }
}