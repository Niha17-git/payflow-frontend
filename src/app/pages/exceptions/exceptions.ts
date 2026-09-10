import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExceptionService } from '../../services/exception';

@Component({
  selector: 'app-exceptions',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './exceptions.html',
  styleUrl: './exceptions.css'
})
export class Exceptions implements OnInit {
  exceptions: any[] = [];
  activeId: number | null = null;
  resolutionNotes = '';

  constructor(private exceptionService: ExceptionService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.load();
  }

  load() {
    this.exceptionService.getExceptions().subscribe({
      next: (data) => {
        this.exceptions = data;
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Exceptions failed:', err)
    });
  }

  openResolve(id: number) {
    this.activeId = id;
    this.resolutionNotes = '';
  }

  submitResolve() {
    if (this.activeId === null) return;
    this.exceptionService.resolveException(this.activeId, this.resolutionNotes).subscribe({
      next: () => {
        this.activeId = null;
        this.load();
      },
      error: (err) => console.error('Resolve failed:', err)
    });
  }
}