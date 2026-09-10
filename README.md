# PayFlow Frontend

Angular frontend for PayFlow, a payment reconciliation platform. Provides a dashboard and management screens for finance teams to track orders, payments, reconciliation results, and exceptions.

## Features
- JWT-based login and registration
- Role-based access (Admin, FinanceUser)
- Dashboard with live reconciliation summary (orders, payments, matched/open exceptions)
- Order management with inline customer creation
- Payments list and bulk CSV import
- Manual reconciliation trigger per order
- Exception resolution workflow with audit trail
- Audit log viewer
- Route guarding — protected pages redirect unauthenticated users to login

## Tech Stack
- Angular (standalone components, latest CLI)
- TypeScript
- RxJS
- JWT auth via HTTP interceptor

## Architecture Notes
- **Route guard** (`authGuard`) protects all pages behind login using `canActivate`, redirecting unauthenticated users to `/login`.
- **HTTP interceptor** automatically attaches the JWT token to every outgoing API request, so individual services don't need to handle auth headers manually.
- **Manual change detection** (`ChangeDetectorRef.detectChanges()`) is used after async data loads in several components, since this Angular version defaults to zoneless change detection and doesn't automatically re-render after data arrives inside an RxJS subscription.
- Dashboard summary cards are clickable, linking directly to the relevant management page (Orders, Payments, Reconciliation, Exceptions) for quick navigation.

## Getting Started

### Prerequisites
- Node.js and npm
- The [PayFlow API](https://github.com/Niha17-git/payflow-api) running locally on `https://localhost:7212`

### Setup
1. Clone the repo
2. Install dependencies: npm install
3. Run the dev server: ng serve
4. Open `http://localhost:4200`

### Notes
- CORS must be enabled on the backend for `http://localhost:4200` (already configured in the API's `Program.cs`).
- Register a new Admin or FinanceUser account via the app's Register page, or through the API's Swagger UI.

## Related project
Backend (ASP.NET Core API): [payflow-api](https://github.com/Niha17-git/payflow-api)

## Author
Built by [Niharika Reddy] as a portfolio project, alongside Azure Developer Associate (AZ-204), Azure Fundamentals (AZ-900), and Azure AI Fundamentals (AI-900) certifications.
