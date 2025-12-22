# Skul Africa Backend

A comprehensive backend API for the Skul Africa school management platform — built with **NestJS**, PostgreSQL, and designed for African school workflows, including *offline-capable features*, *audit-proof finance records*, *role-based access*, and *multi-channel payment transparency*.

---

## 🚀 Project Overview

Skul Africa Backend provides the core API and business logic for an education platform tailored to the needs of African schools, solving real problems such as:

- Cash-friendly fee tracking and transparent payments  
- Audit-grade income/expense recording  
- Multi-role support (Proprietor, Admin, Teacher, Accountant, Parent, Student)  
- Term and session-based academic structuring  
- Attendance, results, finance and reporting

---

## 🧱 Key Features

### 📊 Finance System
- Central **finance records** for all income/outgo
- **School fee registry** with hashed identifiers and audited history
- Fully detailed **fee structures + student ledgers**
- Immutable payment receipts + reversal workflow
- Detailed reporting and export

### 🏫 Academic Modules
- Dynamic term/session setup
- Student, teacher and staff management
- Class, subject & timetable management
- Attendance and behavior tracking

### 🔐 Security
- Role-based access control
- Immutable audit logs for sensitive actions
- Hash-signed records for high-trust data

---

## 🛠️ Architecture

| Module | Description |
|--------|-------------|
| `auth/` | Authentication & JWT access |
| `users/` | User management & roles |
| `students/` | Student profiles & class assignment |
| `finance/` | Payments, ledgers, reversals |
| `attendance/` | Attendance marking & reporting |
| `results/` | Exam & CA result processing |
| `audit/` | Immutable logging & record signatures |

Backend is built with:
- **NestJS** (APIs, service layer)
- **TypeORM or Prisma** (DB access)
- **PostgreSQL** (data store)
- **Redis** (optional cache / queue)

---

## 🧠 Payment & Finance Structure

### Finance Flow
1. School defines **fee structures**
2. System generates **student fee ledgers**
3. Admin records payments (cash / transfer / POS)
4. System issues **receipt ID + hash**
5. Record saved in `finance_records`
6. Parents view receipts in dashboard

---

## 🧪 Local Development

### Requirements
- Node.js v18+  
- PostgreSQL v12+  
- Redis (optional)  
- Docker (optional)

### Setup
```bash
git clone https://github.com/skul-Africa-technologies/Skul_Africa_backend-back-up.git
cd Skul_Africa_backend-back_up

# Environment
cp .env.example .env
# Edit .env with your DB credentials

# Install packages
npm install

# Run
npm run start:dev
📌 Scripts
Script	Description
npm run build	Compile to production
npm run start	Start server
npm run start:dev	Start in dev mode
npm run lint	Lint code
npm run test	Run tests

📁 Project Routes
Authentication
POST /auth/login

POST /auth/register

POST /auth/refresh

Finance
POST /finance/payments

GET /finance/receipts/:id

POST /finance/reverse/:id

Students
GET /students

POST /students

PATCH /students/:id

🛡️ API Security
JWT bearer tokens

Scoped roles

Audit log for every write action

Hashed signatures for critical financial data

📜 Audit & Data Guarantees
All sensitive transactions generate:

Immutable records

Hash signatures

Logged actor info

Timestamps

Changes can only be done via reversal records, leaving no destructive edits.

🧩 Contributing
Fork the repo

Create your branch (feat/awesome-feature)

Commit changes (git commit -m 'feat: description')

Push and open a PR

Please follow the project’s coding style and linting rules.

🗃️ Database Schema (Finance Core)
Key Tables

finance_records

fee_structures

student_fee_ledgers

school_fee_payments

school_fee_payment_items

payment_reversals

audit_logs

Example: finance_records
finance_records
- id (uuid)
- school_id
- channel_type
- channel_id
- direction (IN | OUT)
- amount
- recorded_by
- recorded_at
- hash_signature
- is_reversed

🔁 Payment Reversal Policy

❌ Payments cannot be edited
❌ Payments cannot be deleted

✔ Only reversal records allowed

Reversal requires:

Reason

Authorized role

Audit log entry

🔍 Audit Logging

All sensitive actions generate logs:

Payments

Reversals

Fee updates

Result locking

Role changes

audit_logs
- entity_type
- entity_id
- action
- performed_by
- metadata
- timestamp

🔑 Authentication & Authorization
Roles Supported

Proprietor

Admin

Accountant

Teacher

Parent

Student

Access Control

JWT authentication

Role-based guards

Scoped permissions per module

🌐 API Examples
Create School Fee Payment
POST /finance/school-fee/payments
Authorization: Bearer <token>

{
  "studentId": "uuid",
  "items": [
    { "feeStructureId": "uuid", "amount": 30000 },
    { "feeStructureId": "uuid", "amount": 5000 }
  ],
  "paymentMethod": "CASH"
}

Reverse a Payment
POST /finance/payments/{id}/reverse
Authorization: Bearer <token>

{
  "reason": "Duplicate entry"
}

📄 Database Migrations
Using TypeORM / Prisma (example)
# Generate migration
npm run migration:generate

# Run migrations
npm run migration:run


Always migrate before running production builds.

📦 Project Structure
src/
├── auth/
├── users/
├── schools/
├── students/
├── finance/
│   ├── payments/
│   ├── ledgers/
│   ├── receipts/
│   └── reversals/
├── audit/
├── common/
└── main.ts

🧪 Testing Strategy

Unit tests for services

Guard tests for role enforcement

Finance integrity tests (no orphan records)

npm run test
npm run test:e2e

👩🏽‍💻 Developer Onboarding Guide
New Developer Setup

Clone repo

Configure .env

Run migrations

Start dev server

Access Swagger UI

npm run start:dev

📚 API Documentation

Swagger is available at:

/api/docs


Auto-generated from decorators.

🤝 Contribution Guidelines

Follow NestJS best practices

Use feature-based folders

No direct DB writes outside services

No destructive finance operations

All PRs require review

Commit Style
feat: add school fee reversal logic
fix: prevent duplicate ledger entries

🛣️ Roadmap (High Level)

Offline-first support

Receipt verification via QR

Expense tracking

Government-ready reports

AI-powered insights

📝 License
This project is (add license here, e.g., MIT).
