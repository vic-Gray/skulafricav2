# Vax — Multi‑Tenant School Management System

## 1. Vision / Motive

Vax is a multi‑tenant platform where every school has its own dedicated sub‑domain and customized environment. Schools register on the main platform (vax.com). Once approved, they receive a custom sub‑domain, e.g.:

* modernSchool.vax.com
* brightAcademy.vax.com
* greenValley.vax.com

Each school's sub‑domain becomes its independent space with its own:

* UI theme / landing page
* Admin dashboard
* Student management
* Teacher management
* Attendance system
* Term management
* Subjects & classes
* Assessment & results
* Finance / billing (school fees tracking)
* Communication tools (announcements, newsletters…)
* etc 

This allows Vax to scale into a full SaaS platform for schools, providing each institution with a complete, isolated management system.

---

## 2. Core Features

### 2.1 Multi‑Tenancy

* Each school is a separate tenant.
* Shared codebase + isolated data.
* Sub‑domain routing for each school.
* Independent admin accounts per school.
* Ability to customize branding and landing pages.
* etc 

### 2.2 Authentication / Permissions

* Proprietor (school owner)
* Admins
* Form Teachers
* Subject Teachers
* Parents (future)
* Students (future portal)
* etc 

Auth uses JWT + role‑based access control.

### 2.3 School Dashboard Features

* Manage teachers
* Manage students
* Manage classes
* Assign form teachers
* Subjects & subject teachers
* Attendance tracking
* Assessment & grading
* Generate results
* Finance management (fees, invoicing, payments)
* Upload school logo, theme, colors
* etc 

### 2.4 Public Landing Page per School

* School logo
* School description
* Contact information
* Program list
* Gallery
* News/Announcements
* Admission form
* etc 

### 2.5 School Customization Features

Each school can customize the platform to match their unique needs and preferences:

#### 2.5.1 Branding & Visual Identity

* **School Logo** - Upload custom logo (displayed on landing page, dashboard, reports)
* **Favicon** - Custom browser icon
* **Color Scheme** - Primary, secondary, and accent colors
* **Theme Mode** - Light mode, dark mode, or auto
* **Font Selection** - Choose from curated font families
* **Custom CSS** - Advanced users can inject custom styles
* **Background Images** - Hero images, dashboard backgrounds
* **Email Templates** - Branded email headers and footers

#### 2.5.2 Landing Page Customization

* **Hero Section** - Custom headline, tagline, and call-to-action
* **About Section** - School mission, vision, and history
* **Programs/Curriculum** - List of offered programs and courses
* **Photo Gallery** - Upload and organize school photos
* **Video Gallery** - Embed promotional or tour videos
* **Testimonials** - Student/parent testimonials
* **News & Events** - Announcements and upcoming events
* **Contact Form** - Customizable inquiry form
* **Social Media Links** - Facebook, Twitter, Instagram, LinkedIn
* **Custom Pages** - Create additional pages (e.g., "Admissions", "Staff", "Facilities")

#### 2.5.3 Academic Settings

* **Grading System** - Choose from multiple grading scales:
  * Letter grades (A, B, C, D, F)
  * Percentage (0-100%)
  * GPA (0.0-4.0)
  * Custom grading scale
* **Assessment Types** - Define custom assessment categories (Quiz, Exam, Project, Homework, etc.)
* **Assessment Weights** - Configure how different assessments contribute to final grades
* **Passing Grade** - Set minimum passing score
* **Academic Calendar** - Define school year structure:
  * Number of terms/semesters (2, 3, or 4 terms)
  * Term names (e.g., "Fall", "Spring" or "Term 1", "Term 2")
  * Vacation periods
  * Exam periods
* **Class Naming Convention** - Grade levels, forms, or custom naming
* **Subject Categories** - Organize subjects (Core, Electives, Extra-curricular)
* **Promotion Rules** - Automatic or manual student promotion

#### 2.5.4 Attendance Settings

* **Attendance Statuses** - Customize status options:
  * Present, Absent, Late, Excused, Sick, etc.
* **Attendance Tracking Method** - Daily, per-period, or per-subject
* **Late Threshold** - Define what constitutes "late" (e.g., 15 minutes)
* **Absence Notifications** - Auto-notify parents after X absences
* **Attendance Reports** - Weekly, monthly, or term-based

#### 2.5.5 Finance & Fee Settings

* **Currency** - Select local currency
* **Fee Structure** - Customize fee categories:
  * Tuition fees
  * Exam fees
  * Library fees
  * Transport fees
  * Uniform fees
  * Custom fee types
* **Payment Methods** - Enable/disable payment options:
  * Cash
  * Bank transfer
  * Mobile money
  * Credit/debit card
  * Online payment gateways
* **Payment Plans** - Installment options
* **Late Payment Penalties** - Configure penalty fees and grace periods
* **Discount Rules** - Sibling discounts, early payment discounts
* **Invoice Templates** - Custom invoice design and numbering

#### 2.5.6 Communication Preferences

* **Notification Channels** - Email, SMS, in-app notifications
* **Auto-Notifications** - Configure automatic alerts for:
  * Student absences
  * Low grades
  * Fee reminders
  * Upcoming exams
  * Report card availability
* **Announcement Settings** - Who can post announcements
* **Parent Portal Access** - Enable/disable parent login
* **Student Portal Access** - Enable/disable student login
* **Newsletter Frequency** - Weekly, monthly, or custom

#### 2.5.7 User Roles & Permissions

* **Custom Roles** - Create additional roles beyond default ones
* **Permission Granularity** - Define what each role can:
  * View
  * Create
  * Edit
  * Delete
  * Export
* **Module Access** - Enable/disable modules per school:
  * Finance module
  * Assessment module
  * Attendance module
  * Communication module

#### 2.5.8 Report Card Customization

* **Report Card Template** - Choose from multiple designs
* **Report Card Elements** - Include/exclude:
  * School logo
  * Student photo
  * Attendance summary
  * Teacher comments
  * Principal's remarks
  * Grading scale legend
  * Class rank
  * Subject-wise performance graphs
* **Comment Bank** - Pre-written comments for quick selection
* **Signature Fields** - Form teacher, principal, parent signatures

#### 2.5.9 Data & Privacy Settings

* **Data Retention** - How long to keep student records after graduation
* **Privacy Controls** - What information is visible to parents/students
* **Export Options** - Enable bulk data export (CSV, Excel, PDF)
* **Backup Frequency** - Automatic backup schedule
* **Two-Factor Authentication** - Require 2FA for admin accounts

#### 2.5.10 Language & Localization

* **Primary Language** - English, French, Spanish, etc.
* **Date Format** - DD/MM/YYYY, MM/DD/YYYY, YYYY-MM-DD
* **Time Format** - 12-hour or 24-hour
* **Timezone** - School's local timezone
* **Number Format** - Decimal separator (comma vs period)

#### 2.5.11 Dashboard Customization

* **Widget Selection** - Choose which widgets to display:
  * Total students
  * Total teachers
  * Attendance rate
  * Fee collection rate
  * Recent activities
  * Upcoming events
  * Quick actions
* **Widget Layout** - Drag-and-drop widget arrangement
* **Default View** - Set landing page after login

#### 2.5.12 Integration Settings

* **Email Provider** - SMTP configuration for sending emails
* **SMS Gateway** - Integration with SMS providers
* **Payment Gateway** - Connect to Stripe, PayPal, Flutterwave, etc.
* **Google Workspace** - Sync with Google Classroom (future)
* **Zoom/Teams** - Virtual classroom integration (future)

---

## 3. Technical Architecture

A high‑level architecture for the system.

### 3.1 Backend (NestJS)

* Multi‑tenant database architecture (Single DB with schoolId separation)
* Modules:

  * Authentication
  * Schools
  * Teachers
  * Students
  * Classes
  * Subjects
  * Attendance
  * Assessment
  * Finance
  * Academic Year & Terms
  * File Uploads
  * etc 

### 3.2 Frontend (Next.js)

* Main platform website (vax.com)
* Tenant sub‑domain routing
* Shared admin dashboard UI
* School custom landing pages
* Component library: Tailwind + ShadCN
* etc 

### 3.3 Database (PostgreSQL)

Prefer single database, multi‑tenant via foreign keys:

* schoolId field on all core tables.

**auth table:**

* id
* email
* password
* role
* schoolId
* etc 

**students table:**

* id
* fullName
* parent info
* classId
* schoolId
* etc 

**teachers table:**

* id
* name
* subjectId
* schoolId
* etc 

**classes table:**

* id
* name
* formTeacherId
* schoolId

**attendance table:**

* id
* studentId
* date
* status
* schoolId

**assessment table:**

* id
* studentId
* subjectId
* score
* term
* schoolId

### 3.4 Sub‑Domain Routing

When a user visits:

```
modernSchool.vax.com
```

Next.js middleware extracts "modernSchool":

```javascript
const subdomain = request.headers.get("host").split(".")[0]
```

Lookup in Schools table:

```javascript
school = await findBySubdomain(subdomain)
```

If found → load tenant UI  
If not found → 404 page

---

## 4. Project Structure (Full Detailed)

This structure covers backend + frontend.

---

### 4.1 NestJS Backend Structure

```
vax-backend/
├── src/
│   ├── main.ts
│   ├── app.module.ts
│   ├── config/
│   │   ├── database.config.ts
│   │   └── app.config.ts
│   ├── common/
│   │   ├── guards/
│   │   │   ├── jwt-auth.guard.ts
│   │   │   └── roles.guard.ts
│   │   ├── decorators/
│   │   │   ├── current-user.decorator.ts
│   │   │   ├── roles.decorator.ts
│   │   │   └── tenant.decorator.ts
│   │   ├── interceptors/
│   │   │   └── tenant.interceptor.ts
│   │   └── utils/
│   │       └── helpers.ts
│   ├── tenants/
│   │   ├── tenant.middleware.ts
│   │   └── tenant.provider.ts
│   ├── auth/
│   │   ├── auth.module.ts
│   │   ├── auth.service.ts
│   │   ├── auth.controller.ts
│   │   ├── jwt.strategy.ts
│   │   └── dto/
│   │       ├── login.dto.ts
│   │       └── register.dto.ts
│   ├── schools/
│   │   ├── schools.module.ts
│   │   ├── schools.controller.ts
│   │   ├── schools.service.ts
│   │   ├── entities/
│   │   │   └── school.entity.ts
│   │   └── dto/
│   │       ├── create-school.dto.ts
│   │       └── update-school.dto.ts
│   ├── teachers/
│   │   ├── teachers.module.ts
│   │   ├── teachers.controller.ts
│   │   ├── teachers.service.ts
│   │   ├── entities/
│   │   │   └── teacher.entity.ts
│   │   └── dto/
│   ├── students/
│   │   ├── students.module.ts
│   │   ├── students.controller.ts
│   │   ├── students.service.ts
│   │   ├── entities/
│   │   │   └── student.entity.ts
│   │   └── dto/
│   ├── classes/
│   │   ├── classes.module.ts
│   │   ├── classes.controller.ts
│   │   ├── classes.service.ts
│   │   ├── entities/
│   │   │   └── class.entity.ts
│   │   └── dto/
│   ├── subjects/
│   │   ├── subjects.module.ts
│   │   ├── subjects.controller.ts
│   │   ├── subjects.service.ts
│   │   ├── entities/
│   │   │   └── subject.entity.ts
│   │   └── dto/
│   ├── attendance/
│   │   ├── attendance.module.ts
│   │   ├── attendance.controller.ts
│   │   ├── attendance.service.ts
│   │   ├── entities/
│   │   │   └── attendance.entity.ts
│   │   └── dto/
│   ├── assessment/
│   │   ├── assessment.module.ts
│   │   ├── assessment.controller.ts
│   │   ├── assessment.service.ts
│   │   ├── entities/
│   │   │   └── assessment.entity.ts
│   │   └── dto/
│   ├── finance/
│   │   ├── finance.module.ts
│   │   ├── finance.controller.ts
│   │   ├── finance.service.ts
│   │   ├── entities/
│   │   │   ├── fee.entity.ts
│   │   │   ├── payment.entity.ts
│   │   │   └── invoice.entity.ts
│   │   └── dto/
│   ├── academic-year/
│   │   ├── academic-year.module.ts
│   │   ├── academic-year.controller.ts
│   │   ├── academic-year.service.ts
│   │   ├── entities/
│   │   │   ├── academic-year.entity.ts
│   │   │   └── term.entity.ts
│   │   └── dto/
│   └── uploads/
│       ├── uploads.module.ts
│       ├── uploads.controller.ts
│       └── uploads.service.ts
├── test/
├── .env.example
├── .gitignore
├── package.json
├── tsconfig.json
└── nest-cli.json
```

### 4.2 Next.js Frontend Structure

```
vax-frontend/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx                    # Main landing page (vax.com)
│   │   ├── (auth)/
│   │   │   ├── login/
│   │   │   │   └── page.tsx
│   │   │   ├── register/
│   │   │   │   └── page.tsx
│   │   │   └── layout.tsx
│   │   ├── (dashboard)/
│   │   │   ├── dashboard/
│   │   │   │   └── page.tsx
│   │   │   ├── students/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [id]/
│   │   │   │       └── page.tsx
│   │   │   ├── teachers/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [id]/
│   │   │   │       └── page.tsx
│   │   │   ├── classes/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [id]/
│   │   │   │       └── page.tsx
│   │   │   ├── subjects/
│   │   │   │   └── page.tsx
│   │   │   ├── attendance/
│   │   │   │   └── page.tsx
│   │   │   ├── assessment/
│   │   │   │   └── page.tsx
│   │   │   ├── finance/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── fees/
│   │   │   │   ├── payments/
│   │   │   │   └── invoices/
│   │   │   ├── settings/
│   │   │   │   └── page.tsx
│   │   │   └── layout.tsx
│   │   └── api/
│   │       └── [...catch-all]/
│   │           └── route.ts            # API proxy to backend
│   ├── components/
│   │   ├── ui/                         # ShadCN components
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   ├── card.tsx
│   │   │   ├── table.tsx
│   │   │   └── ...
│   │   ├── layout/
│   │   │   ├── header.tsx
│   │   │   ├── sidebar.tsx
│   │   │   └── footer.tsx
│   │   ├── dashboard/
│   │   │   ├── stats-card.tsx
│   │   │   └── recent-activity.tsx
│   │   ├── students/
│   │   │   ├── student-list.tsx
│   │   │   ├── student-form.tsx
│   │   │   └── student-card.tsx
│   │   ├── teachers/
│   │   │   ├── teacher-list.tsx
│   │   │   └── teacher-form.tsx
│   │   └── shared/
│   │       ├── data-table.tsx
│   │       └── loading-spinner.tsx
│   ├── lib/
│   │   ├── api.ts                      # API client
│   │   ├── auth.ts                     # Auth utilities
│   │   ├── tenant.ts                   # Tenant utilities
│   │   └── utils.ts
│   ├── hooks/
│   │   ├── use-auth.ts
│   │   ├── use-tenant.ts
│   │   └── use-api.ts
│   ├── types/
│   │   ├── auth.ts
│   │   ├── school.ts
│   │   ├── student.ts
│   │   ├── teacher.ts
│   │   └── index.ts
│   └── middleware.ts                   # Sub-domain routing
├── public/
│   ├── images/
│   └── icons/
├── .env.local.example
├── .gitignore
├── next.config.js
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

---

## 5. Database Schema (Detailed)

### Core Tables

#### schools
```sql
CREATE TABLE schools (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  subdomain VARCHAR(100) UNIQUE NOT NULL,
  
  -- Basic Information
  description TEXT,
  contact_email VARCHAR(255),
  contact_phone VARCHAR(50),
  address TEXT,
  website VARCHAR(255),
  
  -- Branding & Visual Identity
  logo_url VARCHAR(500),
  favicon_url VARCHAR(500),
  primary_color VARCHAR(7) DEFAULT '#3B82F6',
  secondary_color VARCHAR(7) DEFAULT '#10B981',
  accent_color VARCHAR(7) DEFAULT '#F59E0B',
  theme_mode VARCHAR(20) DEFAULT 'light', -- 'light', 'dark', 'auto'
  font_family VARCHAR(100) DEFAULT 'Inter',
  custom_css TEXT,
  hero_image_url VARCHAR(500),
  
  -- Landing Page Content (stored as JSON)
  landing_page_config JSONB DEFAULT '{}',
  social_media_links JSONB DEFAULT '{}',
  
  -- Academic Settings
  grading_system VARCHAR(50) DEFAULT 'percentage', -- 'letter', 'percentage', 'gpa', 'custom'
  grading_scale JSONB DEFAULT '{}', -- Custom grading scale configuration
  passing_grade DECIMAL(5,2) DEFAULT 50.00,
  terms_per_year INTEGER DEFAULT 3,
  term_names JSONB DEFAULT '["Term 1", "Term 2", "Term 3"]',
  class_naming_convention VARCHAR(50) DEFAULT 'grade', -- 'grade', 'form', 'custom'
  
  -- Attendance Settings
  attendance_statuses JSONB DEFAULT '["Present", "Absent", "Late", "Excused"]',
  attendance_tracking_method VARCHAR(50) DEFAULT 'daily', -- 'daily', 'per-period', 'per-subject'
  late_threshold_minutes INTEGER DEFAULT 15,
  absence_notification_threshold INTEGER DEFAULT 3,
  
  -- Finance Settings
  currency VARCHAR(10) DEFAULT 'USD',
  currency_symbol VARCHAR(5) DEFAULT '$',
  fee_categories JSONB DEFAULT '[]',
  payment_methods JSONB DEFAULT '["Cash", "Bank Transfer"]',
  late_payment_penalty_percentage DECIMAL(5,2) DEFAULT 0.00,
  payment_grace_period_days INTEGER DEFAULT 7,
  
  -- Communication Settings
  notification_channels JSONB DEFAULT '["email"]', -- 'email', 'sms', 'in-app'
  auto_notifications JSONB DEFAULT '{}',
  parent_portal_enabled BOOLEAN DEFAULT true,
  student_portal_enabled BOOLEAN DEFAULT false,
  newsletter_frequency VARCHAR(50) DEFAULT 'monthly',
  
  -- Localization
  primary_language VARCHAR(10) DEFAULT 'en',
  date_format VARCHAR(20) DEFAULT 'DD/MM/YYYY',
  time_format VARCHAR(10) DEFAULT '12h', -- '12h' or '24h'
  timezone VARCHAR(50) DEFAULT 'UTC',
  
  -- Module Access
  modules_enabled JSONB DEFAULT '["students", "teachers", "classes", "subjects", "attendance", "assessment", "finance"]',
  
  -- Integration Settings
  smtp_config JSONB DEFAULT '{}',
  sms_gateway_config JSONB DEFAULT '{}',
  payment_gateway_config JSONB DEFAULT '{}',
  
  -- System
  is_active BOOLEAN DEFAULT true,
  subscription_plan VARCHAR(50) DEFAULT 'basic', -- 'basic', 'premium', 'enterprise'
  subscription_expires_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

#### school_customization (Additional customization settings)
```sql
CREATE TABLE school_customization (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  school_id UUID REFERENCES schools(id) ON DELETE CASCADE,
  
  -- Report Card Settings
  report_card_template VARCHAR(50) DEFAULT 'standard',
  report_card_elements JSONB DEFAULT '{}',
  comment_bank JSONB DEFAULT '[]',
  
  -- Dashboard Settings
  dashboard_widgets JSONB DEFAULT '[]',
  dashboard_layout JSONB DEFAULT '{}',
  default_landing_page VARCHAR(100) DEFAULT '/dashboard',
  
  -- Custom Pages
  custom_pages JSONB DEFAULT '[]',
  
  -- Email Templates
  email_templates JSONB DEFAULT '{}',
  
  -- Privacy Settings
  data_retention_years INTEGER DEFAULT 7,
  privacy_settings JSONB DEFAULT '{}',
  require_2fa BOOLEAN DEFAULT false,
  
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

#### users (auth)
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  role VARCHAR(50) NOT NULL, -- 'proprietor', 'admin', 'form_teacher', 'subject_teacher'
  school_id UUID REFERENCES schools(id) ON DELETE CASCADE,
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

#### students
```sql
CREATE TABLE students (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  school_id UUID REFERENCES schools(id) ON DELETE CASCADE,
  class_id UUID REFERENCES classes(id),
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  date_of_birth DATE,
  gender VARCHAR(20),
  admission_number VARCHAR(50) UNIQUE,
  parent_name VARCHAR(255),
  parent_email VARCHAR(255),
  parent_phone VARCHAR(50),
  address TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

#### teachers
```sql
CREATE TABLE teachers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  school_id UUID REFERENCES schools(id) ON DELETE CASCADE,
  user_id UUID REFERENCES users(id),
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  email VARCHAR(255),
  phone VARCHAR(50),
  specialization VARCHAR(100),
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

#### classes
```sql
CREATE TABLE classes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  school_id UUID REFERENCES schools(id) ON DELETE CASCADE,
  name VARCHAR(100) NOT NULL,
  form_teacher_id UUID REFERENCES teachers(id),
  academic_year_id UUID REFERENCES academic_years(id),
  capacity INTEGER,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

#### subjects
```sql
CREATE TABLE subjects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  school_id UUID REFERENCES schools(id) ON DELETE CASCADE,
  name VARCHAR(100) NOT NULL,
  code VARCHAR(20),
  description TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

#### teacher_subjects (Many-to-Many)
```sql
CREATE TABLE teacher_subjects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  teacher_id UUID REFERENCES teachers(id) ON DELETE CASCADE,
  subject_id UUID REFERENCES subjects(id) ON DELETE CASCADE,
  class_id UUID REFERENCES classes(id) ON DELETE CASCADE,
  school_id UUID REFERENCES schools(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT NOW()
);
```

#### attendance
```sql
CREATE TABLE attendance (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  school_id UUID REFERENCES schools(id) ON DELETE CASCADE,
  student_id UUID REFERENCES students(id) ON DELETE CASCADE,
  class_id UUID REFERENCES classes(id),
  date DATE NOT NULL,
  status VARCHAR(20) NOT NULL, -- 'present', 'absent', 'late', 'excused'
  remarks TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
```

#### academic_years
```sql
CREATE TABLE academic_years (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  school_id UUID REFERENCES schools(id) ON DELETE CASCADE,
  name VARCHAR(100) NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  is_current BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

#### terms
```sql
CREATE TABLE terms (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  school_id UUID REFERENCES schools(id) ON DELETE CASCADE,
  academic_year_id UUID REFERENCES academic_years(id) ON DELETE CASCADE,
  name VARCHAR(100) NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  is_current BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

#### assessments
```sql
CREATE TABLE assessments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  school_id UUID REFERENCES schools(id) ON DELETE CASCADE,
  student_id UUID REFERENCES students(id) ON DELETE CASCADE,
  subject_id UUID REFERENCES subjects(id) ON DELETE CASCADE,
  term_id UUID REFERENCES terms(id) ON DELETE CASCADE,
  assessment_type VARCHAR(50), -- 'quiz', 'exam', 'assignment', 'project'
  score DECIMAL(5,2),
  max_score DECIMAL(5,2),
  grade VARCHAR(5),
  remarks TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

#### fees
```sql
CREATE TABLE fees (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  school_id UUID REFERENCES schools(id) ON DELETE CASCADE,
  student_id UUID REFERENCES students(id) ON DELETE CASCADE,
  term_id UUID REFERENCES terms(id),
  amount DECIMAL(10,2) NOT NULL,
  description VARCHAR(255),
  due_date DATE,
  status VARCHAR(50) DEFAULT 'pending', -- 'pending', 'partial', 'paid', 'overdue'
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

#### payments
```sql
CREATE TABLE payments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  school_id UUID REFERENCES schools(id) ON DELETE CASCADE,
  fee_id UUID REFERENCES fees(id) ON DELETE CASCADE,
  student_id UUID REFERENCES students(id) ON DELETE CASCADE,
  amount DECIMAL(10,2) NOT NULL,
  payment_method VARCHAR(50),
  transaction_reference VARCHAR(100),
  payment_date TIMESTAMP DEFAULT NOW(),
  created_at TIMESTAMP DEFAULT NOW()
);
```

---

## 6. API Endpoints Overview

### Authentication
- `POST /auth/register` - Register new school
- `POST /auth/login` - Login user
- `POST /auth/refresh` - Refresh JWT token
- `GET /auth/me` - Get current user

### Schools
- `GET /schools` - List all schools (admin only)
- `GET /schools/:subdomain` - Get school by subdomain
- `PUT /schools/:id` - Update school settings
- `POST /schools/:id/logo` - Upload school logo

### School Customization
- `GET /schools/:id/customization` - Get all customization settings
- `PUT /schools/:id/branding` - Update branding settings (logo, colors, theme)
- `PUT /schools/:id/landing-page` - Update landing page content
- `PUT /schools/:id/academic-settings` - Update academic settings (grading, terms)
- `PUT /schools/:id/attendance-settings` - Update attendance configuration
- `PUT /schools/:id/finance-settings` - Update finance and fee settings
- `PUT /schools/:id/communication-settings` - Update notification preferences
- `PUT /schools/:id/localization` - Update language and timezone settings
- `PUT /schools/:id/modules` - Enable/disable modules
- `POST /schools/:id/custom-pages` - Create custom landing page
- `PUT /schools/:id/custom-pages/:pageId` - Update custom page
- `DELETE /schools/:id/custom-pages/:pageId` - Delete custom page
- `POST /schools/:id/upload-assets` - Upload images, videos, documents


### Students
- `GET /students` - List students (filtered by school)
- `POST /students` - Create student
- `GET /students/:id` - Get student details
- `PUT /students/:id` - Update student
- `DELETE /students/:id` - Delete student

### Teachers
- `GET /teachers` - List teachers
- `POST /teachers` - Create teacher
- `GET /teachers/:id` - Get teacher details
- `PUT /teachers/:id` - Update teacher
- `DELETE /teachers/:id` - Delete teacher

### Classes
- `GET /classes` - List classes
- `POST /classes` - Create class
- `GET /classes/:id` - Get class details
- `PUT /classes/:id` - Update class
- `DELETE /classes/:id` - Delete class

### Subjects
- `GET /subjects` - List subjects
- `POST /subjects` - Create subject
- `PUT /subjects/:id` - Update subject
- `DELETE /subjects/:id` - Delete subject

### Attendance
- `GET /attendance` - Get attendance records
- `POST /attendance` - Mark attendance
- `GET /attendance/student/:id` - Get student attendance
- `GET /attendance/class/:id` - Get class attendance

### Assessment
- `GET /assessments` - List assessments
- `POST /assessments` - Create assessment
- `GET /assessments/student/:id` - Get student assessments
- `PUT /assessments/:id` - Update assessment

### Finance
- `GET /fees` - List fees
- `POST /fees` - Create fee
- `GET /payments` - List payments
- `POST /payments` - Record payment
- `GET /finance/reports` - Financial reports

---

## 7. Key Implementation Notes

### Multi-Tenant Middleware (NestJS)

```typescript
// tenant.middleware.ts
export class TenantMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    const host = req.headers.host;
    const subdomain = host.split('.')[0];
    
    const school = await this.schoolsService.findBySubdomain(subdomain);
    
    if (!school) {
      throw new NotFoundException('School not found');
    }
    
    req['tenant'] = school;
    next();
  }
}
```

### Sub-domain Routing (Next.js)

```typescript
// middleware.ts
export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host');
  const subdomain = hostname?.split('.')[0];
  
  if (subdomain && subdomain !== 'www' && subdomain !== 'vax') {
    // Tenant subdomain detected
    return NextResponse.rewrite(
      new URL(`/tenant/${subdomain}${request.nextUrl.pathname}`, request.url)
    );
  }
  
  return NextResponse.next();
}
```

---

## 8. Development Roadmap

### Phase 1: Foundation
- [ ] Setup NestJS backend with PostgreSQL
- [ ] Setup Next.js frontend with Tailwind + ShadCN
- [ ] Implement authentication system
- [ ] Create multi-tenant middleware
- [ ] Setup sub-domain routing

### Phase 2: Core Features
- [ ] School management module
- [ ] Student management
- [ ] Teacher management
- [ ] Class management
- [ ] Subject management

### Phase 3: Academic Features
- [ ] Attendance system
- [ ] Assessment & grading
- [ ] Academic year & term management
- [ ] Report generation

### Phase 4: Finance
- [ ] Fee management
- [ ] Payment tracking
- [ ] Invoice generation
- [ ] Financial reports

### Phase 5: Polish & Launch
- [ ] School landing page customization
- [ ] File uploads (logos, documents)
- [ ] Email notifications
- [ ] Dashboard analytics
- [ ] Testing & deployment

---

## 9. Technology Stack Summary

**Backend:**
- NestJS
- PostgreSQL
- TypeORM / Prisma
- JWT Authentication
- Class Validator

**Frontend:**
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- ShadCN UI
- React Hook Form
- Zod (validation)

**DevOps:**
- Docker
- GitHub Actions
- Vercel / AWS / DigitalOcean

---

This is the complete overview of the **Vax** multi-tenant school management system.
