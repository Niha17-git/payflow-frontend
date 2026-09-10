import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaymentImport } from './payment-import';

describe('PaymentImport', () => {
  let component: PaymentImport;
  let fixture: ComponentFixture<PaymentImport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentImport],
    }).compileComponents();

    fixture = TestBed.createComponent(PaymentImport);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
