import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Layout } from './layout/layout';
import { authGuard } from './guards/auth-guard';
import { Dashboard } from './pages/dashboard/dashboard';
import { Order } from './pages/order/order';
import { Payments } from './pages/payments/payments';
import { PaymentImport } from './pages/payment-import/payment-import';
import { Reconciliation } from './pages/reconciliation/reconciliation';
import { Exceptions } from './pages/exceptions/exceptions';
import { AuditLogs } from './pages/audit-logs/audit-logs';

export const routes: Routes = [
  { path: 'login', component: Login },
  {path: 'register', component: Register },
  {
    path: '',
    component: Layout,
    canActivate: [authGuard],
    children: [
      { path: 'dashboard', component: Dashboard },
      { path: 'orders', component: Order },
      { path: 'payments', component: Payments },
      { path: 'payment-import', component: PaymentImport },
      { path: 'reconciliation', component: Reconciliation },
      { path: 'exceptions', component: Exceptions },
      { path: 'audit-logs', component: AuditLogs },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: 'login' }
];