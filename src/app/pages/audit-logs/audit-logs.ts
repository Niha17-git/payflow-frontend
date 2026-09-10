import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuditLogService } from '../../services/audit-log';

@Component({
  selector: 'app-audit-logs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './audit-logs.html',
  styleUrl: './audit-logs.css'
})
export class AuditLogs implements OnInit {
  logs: any[] = [];

  constructor(private auditLogService: AuditLogService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.auditLogService.getLogs().subscribe({
      next: (data) => {
        this.logs = data;
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Audit logs failed:', err)
    });
  }
}