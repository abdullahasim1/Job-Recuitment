# UpMatch — Recruitment Management System

Complete project documentation for the internal recruitment module frontend.

---

## 1. Overview

**UpMatch** is a recruitment management system frontend built with **Next.js 16 (App Router)**, **React 19**, and **TypeScript**. It provides three main interfaces:

- **Candidate/Auth flows** — signup, sign-in, OTP verification, password reset, role selection, job browsing, applying to jobs, tracking applications, interviews, and feedback.
- **User dashboard** — personal dashboard, applied jobs, interviews, feedback, support, and settings.
- **Admin panel** — KPI dashboard, job postings management, applicant management, interview scheduling, reports, support tickets, and settings.

> **Important:** This is currently a **frontend-only mock application**. All API calls are simulated (`setTimeout` + hardcoded logic). There are **no real HTTP requests** (`fetch`/`axios`), no `src/app/api/` route handlers, and no backend integration yet. All data is hardcoded in the pages.

---

## 2. Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| Next.js | 16.1.6 | Framework (App Router, server + client components) |
| React | 19.2.0 | UI library |
| TypeScript | ^5 | Static typing |
| Tailwind CSS | 4.1.17 | Styling (utility classes + CSS variables) |
| Formik | 2.4.9 | Form state management |
| Yup | 1.7.1 | Form validation schemas |
| Recharts | 3.6.0 | Charts (admin dashboard) |
| lucide-react | ^0.555.0 | Icons |
| @heroicons/react | ^2.2.0 | Icons |
| clsx | ^2.1.1 | Conditional class names |
| pnpm | — | Package manager |
| Poppins | — | Font (via `next/font/google`) |

### Scripts

```bash
pnpm dev       # Start development server
pnpm build     # Build for production
pnpm start     # Start production server
pnpm lint      # Run ESLint
```

---

## 3. Project Structure

```
├── assests/images/               # Logo assets (typo in folder name is intentional)
├── public/                       # Static assets (logo, banner, icons)
├── src/
│   ├── app/
│   │   ├── (auth)/               # Auth route group (public header + footer layout)
│   │   │   ├── sign-in/
│   │   │   ├── signup/
│   │   │   ├── otp-verification/
│   │   │   ├── forgot-password/
│   │   │   ├── new-password/
│   │   │   └── select-account/
│   │   ├── (dashboard)/          # User dashboard route group (sidebar layout)
│   │   │   ├── dashboard/
│   │   │   ├── jobs/             # Jobs list + apply wizard
│   │   │   ├── applied-jobs/
│   │   │   ├── interviews/       # Interviews + feedback form
│   │   │   ├── feedback/         # Feedback list + summary
│   │   │   ├── support/
│   │   │   └── settings/
│   │   ├── (admin)/admin/        # Admin route group (admin sidebar layout)
│   │   │   ├── dashboard/
│   │   │   ├── jobs/             # Jobs list + create
│   │   │   ├── applicants/       # Applicants list + detail
│   │   │   ├── reports/
│   │   │   ├── support/
│   │   │   └── settings/         # + settings/company
│   │   ├── layout.tsx            # Root layout (Poppins font, metadata)
│   │   ├── page.tsx              # Redirects / → /signup
│   │   └── globals.css           # Design tokens + utility classes
│   ├── components/
│   │   ├── admin/                # Admin components (table, applicant view, schedule modal)
│   │   ├── forms/apply-job/      # Apply-job wizard steps
│   │   ├── layout/               # Header, Footer, Sidebar, DashboardHeader, AdminSidebar
│   │   ├── settings/             # UserSettingsView
│   │   └── ui/                   # Shared primitives (Button, InputField, etc.)
│   └── theme/typography.ts       # Poppins font + typography tokens
├── next.config.ts                # reactCompiler: true, reactStrictMode: false
├── tsconfig.json                 # @/* path alias → ./src/*
└── package.json
```

### Route Groups & Entry Point

- Root `src/app/page.tsx` immediately redirects to `/signup`.
- `(auth)` layout → public `Header` + `Footer`, centered content.
- `(dashboard)` layout → `Sidebar` + `DashboardHeader` (user side).
- `(admin)` layout → `AdminSidebar` + `DashboardHeader` (admin side).

---

## 4. Authentication Flow (`src/app/(auth)/`)

All auth pages are client components using **Formik + Yup**. API modules are mocks.

### Flow Diagram

```
/ → /signup → /otp-verification → /select-account → /sign-in → /dashboard
                  (success)          (success)
```

### 4.1 Sign Up — `/signup`

| Field | Type | Validation |
|---|---|---|
| firstName | text | required, min 2 |
| lastName | text | required, min 2 |
| email | email | required, valid email |
| password | password | required, min 8 |
| subscribe | checkbox | optional |

- On success: `alert` + redirect to `/otp-verification`.
- Mock API stores token: `localStorage.setItem("authentication_token", ...)` (never read anywhere else).

### 4.2 OTP Verification — `/otp-verification`

- Single 4-digit OTP field (`OTPInput` component — auto-advancing digit boxes).
- Validation: exactly 4 digits.
- **Hardcoded valid OTP: `1234`** (`otpApiCalls.ts`).
- On success → `/select-account`. "Resend Code" button is visual only.

### 4.3 Select Account (Role) — `/select-account`

Card-style role picker (`RoleSelectField`) with 4 roles:

| Role | Title | Description |
|---|---|---|
| `admin` | Admin/HR | Full system access, applicant tracking, staff files, approvals, billing, reporting |
| `supervisor` | Supervisor | Observation forms, training sign-offs, staff oversight, compliance |
| `staff` | Staff/Practitioner | Training modules, document uploads, profile management |
| `applicant` | Applicant | Job portal, application tracking, interview scheduling, offer acceptance |

- On success → `/sign-in`. Selected role is not stored.

### 4.4 Sign In — `/sign-in`

| Field | Validation |
|---|---|
| email | required, valid email |
| password | required, min 8 |

- **Hardcoded credentials: `abd@gmail.com` / `12345678`** (`signinApiCalls.ts`).
- On success → `/dashboard`.

### 4.5 Forgot Password — `/forgot-password`

- Email field only. Success → `/sign-in` (any valid email "works").

### 4.6 New Password — `/new-password`

| Field | Validation |
|---|---|
| password | required, min 8 |
| confirmPassword | must match password |

- Success → `/sign-in`.

### Mock API Layer (pattern)

Every `*ApiCalls.ts` follows the same contract:

```ts
// e.g. signinApiCalls.ts
export const handleSignIn = ({ email, password }): Promise<{ success: boolean; message: string }> =>
  // setTimeout ~1.2s, then hardcoded logic
```

Swap these files for real `fetch`/axios calls to integrate the backend.

---

## 5. User Dashboard (`src/app/(dashboard)/`)

### 5.1 Dashboard Home — `/dashboard`

- Welcome banner (`/banner.png`).
- **My Applications** — 3 hardcoded application cards.
- **My Interviews** — 3 interview cards with date box, meeting ID, location, live countdown; one card shows "Copy Link" + "Join Meeting" buttons (inert).

### 5.2 Jobs — `/jobs`

- Search bar + Location / Job Type / Department dropdowns (**no filtering logic**).
- 9 identical "Mental Health Practitioner" job cards (hardcoded via `Array(9).fill`).
- "Apply" button → `/jobs/apply`.
- Pagination UI (inert).

### 5.3 Apply for Job — `/jobs/apply`

4-step wizard with per-step Yup validation:

| Step | Component | Fields | Validation |
|---|---|---|---|
| 1. Personal Information | `PersonalInfo.tsx` | fullName, email, phone, location | all required |
| 2. Resume & Cover Letter | `ResumeUpload.tsx` | resume (file, .pdf/.png/.jpg/.jpeg), coverLetter (optional), coverText | resume required |
| 3. Screening Questions | `ScreeningQuestions.tsx` | certified (radio), experience, understanding (ARMHS/SPMI questions) | all required |
| 4. Review & Submit | `ReviewSubmit.tsx` | agreed (checkbox) | must be `true` |

- Final submit: `console.log("Submitted:", values)` → `/jobs`. **No API call.**
- Shared Formik values type: `ApplyJobFormValues` (exported from `PersonalInfo.tsx`).

### 5.4 Applied Jobs — `/applied-jobs`

- 9 identical hardcoded application cards (title, location, description).

### 5.5 Interviews — `/interviews`

- 3 interview cards (same shape as dashboard).
- Kebab dropdown per card: "View Summary" → `/interviews/feedback-summary` (**broken route — doesn't exist**), "Give Feedback" → `/interviews/feedback`.

### 5.6 Interviewer Feedback — `/interviews/feedback`

- Interviewer assessment form: 4 skill ratings (`SkillRating` 3-option toggle: Need Improvement / Meet Expectations / Exceeds Expectations), notes, recommendation (Strongly Hire / Hire / No Hire).
- Submit: `console.log("Interviewer Feedback Saved:", values)` → `/interviews`. **No API call.**

### 5.7 Feedback List — `/feedback`

- Tabs (Profile / Documents / Feedback / Timeline) — visual only.
- Filter pills (Interviewer / Interviewer Stage / Sort by Date) — inert.
- Feedback cards → `/feedback/summary`. Edit/Delete buttons only `console.log`.
- "Add Feedback" → `/feedback/add` (**broken route — doesn't exist**).

### 5.8 Feedback Summary — `/feedback/summary`

- Overall rating 4.2 with star-scale breakdown bars (hardcoded percentages).
- Pros & Cons tab, Interviewer Feedback tab — all mock data.
- "Advance to Next Stage" / "Decline" buttons (inert).

### 5.9 Support — `/support`

- FAQ accordion (4 items, hardcoded).
- Contact form: subject select + message textarea; "Sending..." fake delay, **no network call**.

### 5.10 Settings — `/settings`

- Wraps `UserSettingsView` with 3 tabs:
  - **My Profile** — avatar + first/last name (uncontrolled inputs, defaults "Abdullah" / "Asim", not saved).
  - **Security** — change password fields (uncontrolled).
  - **Notifications** — empty placeholder (`{/* Toggles yahan ayen gy */}`).

---

## 6. Admin Panel (`src/app/(admin)/admin/`)

### 6.1 Admin Dashboard — `/admin/dashboard`

- **KPI cards:** Total Employees (856, +10%), Job View (3,342, +22%), Job Applied (77, +12%).
- **Job Statistics** — Recharts `BarChart` (12 months, view vs applied).
- **Employee Composition** — Recharts donut chart (male 65% teal / female 35% blue, 856 total).

### 6.2 Jobs & Openings — `/admin/jobs`

- Table: Job Title, Department, Type, Status pill (Active/Closed), Applicants, Actions.
- "Post New Job" → `/admin/jobs/create`.
- Mock: 3 jobs (Senior Mental Health Practitioner, IT Support Specialist, Nursing Assistant).

### 6.3 Post a New Job — `/admin/jobs/create`

Formik + Yup form:

| Field | Type | Notes |
|---|---|---|
| title | InputField | required |
| department | SelectField | Clinical / Nursing / IT Support / Administration |
| type | SelectField | Full-time / Part-time / Contract / Internship |
| location | InputField | required |
| minSalary / maxSalary | InputField (number) | numeric only |
| description | TextAreaField | required |
| requirements | TextAreaField | required |

- Submit: `console.log("Publishing Job:", values)` + 1s fake delay → `/admin/jobs`. **No API call.**

### 6.4 Applicants — `/admin/applicants`

- `FilterDropdown` (Job Applied For, Application Status) + `SearchBar` — all presentational.
- `ApplicantsTable` with pagination; row click → `/admin/applicants/{id}`.
- 8 mock applicants ("John Doe", statuses: New / Interviewing / Hired / Rejected).

### 6.5 Applicant Detail — `/admin/applicants/[id]`

- Route accepts `id` but **never uses it** (single hardcoded applicant "Jane Doe").
- `ApplicantHeader`: avatar, name, "Application Status" dropdown (inert), "Schedule Interview", "Reject".
- Tabs: Personal Information / Resume/CV / Cover Letter / Screening Questions / Notes (only Personal Info has content).
- `ScheduleInterviewModal`: platform picker (Zoom / Google Meet), date, time, meeting link with "Generate Link" (hardcoded URLs), email notification toggle.

### 6.6 Reports — `/admin/reports`

- 4 KPI cards: Total Applicants 1,240, Active Jobs 18, Hired Candidates 45, Rejected 120.
- Custom (non-Recharts) monthly bar chart + Job Performance list.

### 6.7 Support Tickets — `/admin/support`

- Table: Ticket ID, User, Subject, Status (Open red / Resolved green / Pending yellow), Date, Action.
- 4 mock tickets (T-1024 … T-1021).

### 6.8 Settings — `/admin/settings` and `/admin/settings/company`

Two near-duplicate routes:

| Tab | Content |
|---|---|
| Company Info | Organization form (Company Name, Website, Address — uncontrolled) |
| Team Management | Team members table (only in `settings/company`); placeholder elsewhere |
| Hiring Pipeline | 5 stages (Applied → Hired) + "Add Custom Stage" |

---

## 7. Layout Components (`src/components/layout/`)

| Component | Used In | Contents |
|---|---|---|
| `Header.tsx` | (auth) | Logo only, white rounded bar |
| `Footer.tsx` | (auth) | Copyright + dead "Privacy"/"Terms of Policy" anchors |
| `Sidebar.tsx` | (dashboard) | Top: Home, Jobs, Applied Jobs, Interviews, Feedback · Bottom: Support, Settings · User card + inert logout |
| `AdminSidebar.tsx` | (admin) | Top: Dashboard, Applicants, Job Postings, Reports · Bottom: Support, Settings |
| `DashboardHeader.tsx` | both | Hamburger (mobile), dynamic title from pathname, inert search + bell |

Both sidebars: 274px fixed, mobile slide-in with overlay, active link = `bg-primary text-white`.

---

## 8. UI Primitives (`src/components/ui/`)

All generic over the Formik values type: `T extends Record<string, unknown>`.

| Component | Purpose |
|---|---|
| `Button.tsx` | variants: primary / secondary / outline · sizes: sm / md / lg · loading spinner state |
| `InputField.tsx` | text/number/email/tel/checkbox inputs wired to Formik, error + disabled states |
| `SelectField.tsx` | native select with placeholder + chevron, error state |
| `TextAreaField.tsx` | 75px textarea, Formik-bound |
| `OTPInput.tsx` | 4 auto-advancing digit boxes, numeric only |
| `RadioField.tsx` | custom radio group (Formik `setFieldValue`) |
| `RoleSelectField.tsx` | card-style role picker with radio + description |
| `SearchBar.tsx` | presentational pill search input |
| `FilterDropdown.tsx` | presentational dropdown button (no menu logic) |

---

## 9. Design System (`src/app/globals.css`)

CSS-variable design tokens + custom utility classes (Tailwind v4):

| Token | Value | Usage |
|---|---|---|
| `--primary` | `#434ce6` | Brand blue |
| `--heading` | `#0f0f1b` | Headings |
| `--muted` | `#686a6f` | Secondary text |
| `--star` | `#f7871b` | Star ratings |
| `--success` | `#50df3a` | Success/countdowns |
| `--teal` / `--chart-teal` | `#16c098` | Charts, donut male |
| `--status-*` | various | Status pills (New/Interviewing/Hired/Rejected) |
| `--bg-page` | `#fafbfc` | Page background |
| `--bg-input` | `#f5f7f9` | Input backgrounds |
| `--table-border` / `--table-header-bg` | `#e5e7eb` / `#f9fafb` | Tables |

Helper classes: `text-primary`, `bg-primary`, `text-heading`, `text-muted`, `text-star`, `fill-star`, `bg-page`, `bg-input`, `shadow-card`, etc.

Typography tokens in `src/theme/typography.ts`: `heading`, `subheading`, `label`, `input`, `body`, `small` + `fontFamily` (Poppins variable).

---

## 10. Route Map & Redirects

| Route | Purpose | Redirect / Next |
|---|---|---|
| `/` | Redirect | → `/signup` |
| `/signup` | Register | → `/otp-verification` |
| `/otp-verification` | Verify code (1234) | → `/select-account` |
| `/select-account` | Choose role | → `/sign-in` |
| `/sign-in` | Login (abd@gmail.com / 12345678) | → `/dashboard` |
| `/forgot-password` | Reset request | → `/sign-in` |
| `/new-password` | Set new password | → `/sign-in` |
| `/dashboard` | User home | — |
| `/jobs` | Browse jobs | — |
| `/jobs/apply` | 4-step application | → `/jobs` |
| `/applied-jobs` | Applied list | — |
| `/interviews` | Interviews | — |
| `/interviews/feedback` | Interviewer form | → `/interviews` |
| `/feedback` | Feedback list | → `/feedback/summary` |
| `/feedback/summary` | Feedback summary | → `/feedback` |
| `/support` | FAQ + contact | — |
| `/settings` | User settings | — |
| `/admin/dashboard` | KPIs + charts | — |
| `/admin/jobs` | Manage jobs | — |
| `/admin/jobs/create` | Create job | → `/admin/jobs` |
| `/admin/applicants` | Applicant list | — |
| `/admin/applicants/[id]` | Applicant detail | — |
| `/admin/reports` | Analytics | — |
| `/admin/support` | Tickets | — |
| `/admin/settings`, `/admin/settings/company` | Company settings | — |

### Known Broken / Inert Links

- `/interviews/feedback-summary` — linked from interviews dropdown, **route doesn't exist** (would 404).
- `/feedback/add` — linked from "Add Feedback" button, **route doesn't exist**.
- Copy Link, Join Meeting, View All, Resend Code, Search, Filter, pagination, logout, Save/Save Configuration, Post/Edit/Delete feedback, "Advance to Next Stage", "Decline" — **no handlers**.

---

## 11. Known Issues & Conventions

1. **No backend integration** — every API module is a mock; no `src/app/api/`.
2. Hardcoded credentials (`abd@gmail.com` / `12345678`) and OTP (`1234`) live in API mock files.
3. `src/app/\(auth\)/` — an empty shell-escape directory exists next to the real `(auth)` group; unused but safe to delete.
4. Folder typo: `assests/` (should be `assets/`).
5. Both `(dashboard)` and `(admin)` layouts render `DashboardHeader`; titles are derived from the pathname.
6. Applicant detail ignores its `id` param; data is always "Jane Doe".
7. Settings inputs are uncontrolled (`defaultValue`) — nothing is saved.
8. Route groups use parentheses: `(auth)`, `(dashboard)`, `(admin)` — follow this convention for new routes.
9. Shared UI primitives live in `src/components/ui`; feature components in `src/components/<feature>`.
10. Path alias `@/*` maps to `./src/*`.

---

## 12. Getting Started

### Prerequisites
- Node.js 18+
- pnpm

### Setup

```bash
# 1. Install dependencies
pnpm install

# 2. Start the dev server
pnpm dev
# → http://localhost:3000 (redirects to /signup)

# 3. Production build
pnpm build && pnpm start
```

### Test Login / Flows

| Flow | Credentials |
|---|---|
| Sign In | `abd@gmail.com` / `12345678` |
| OTP | `1234` |
| Any other flow | any valid input (mocked) |

---

## 13. Next Steps / Suggestions

- Replace mock `*ApiCalls.ts` modules with real API calls (e.g., `fetch` to a backend).
- Add an API layer (`src/lib/api/` or Next.js route handlers).
- Fix broken routes: `/interviews/feedback-summary`, `/feedback/add`.
- Wire up localStorage token usage in protected layouts (currently no auth guards).
- Implement search/filter/pagination logic on jobs and applicants.
- Add tests (Jest/Vitest + Testing Library) and a CI pipeline.
- Add `.env.local.example` documenting required environment variables.