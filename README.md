# Recruitment Module — Internal Frontend

Overview
This repository contains the internal frontend for the Recruitment Module web application. It is built with Next.js (app-router) and TypeScript and provides admin and candidate-facing interfaces for managing jobs, applications, interviews, reports, and settings.

Tech stack

- Next.js (app directory)
- TypeScript
- pnpm
- PostCSS / global CSS

High-level features

- Admin dashboard: jobs management, applicants, reports, settings.
- Applicant management: list, profile view, interview scheduling, status updates.
- Job posting flow: create jobs, edit, close listings.
- Candidate flows: sign-up/sign-in, apply to jobs, upload resume, track applications.
- Authentication flows: OTP verification, password reset, role selection.

Project structure (important folders)

- `src/app/` — Next.js routes and pages (app router). Routes are colocated with UI and API calls for each area.
- `src/components/` — Feature and shared components. Notable subfolders:
  - `admin/` — admin-specific components (e.g., `ApplicantsTable`, applicant view components).
  - `forms/` — job application form pieces (PersonalInfo, ResumeUpload, ScreeningQuestions, ReviewSubmit).
  - `layout/` — app-level layout components (Header, Sidebar, Footer, AdminSidebar).
  - `ui/` — primitives and shared controls (Button, InputField, SelectField, OTPInput, SearchBar).
  - `settings/` — user settings UI.
- `src/theme/` — typography and theme utilities.
- `public/` — static assets (images, icons).
- `assests/images/` — additional image assets (note: folder name `assests` is present in this repo).

Key files and routes

- Authentication: `src/app/(auth)/` (sign-in, sign-up, OTP, forgot/new password, select-account).
- Admin section: `src/app/(admin)/admin/` (applicants, dashboard, jobs, reports, settings, support).
- Dashboard (candidate): `src/app/(dashboard)/` (applied jobs, interviews, feedback, settings).

Component highlights

- `src/components/admin/ApplicantsTable.tsx` — applicant list view.
- `src/components/admin/applicant-view/` — applicant header, tabs, personal info, schedule interview modal.
- `src/components/forms/apply-job/` — pieces for the multi-step job application form.
- `src/components/ui/` — shared fields and controls used across the app.

Run the project (development)
Prerequisites: Node 18+ and `pnpm`.

Install dependencies

```bash
pnpm install
```

Start dev server

```bash
pnpm dev
```

Build and run production

```bash
pnpm build
pnpm start
```

Common scripts

- `pnpm dev` — run Next.js in development
- `pnpm build` — build for production
- `pnpm start` — start production server
- `pnpm lint` — run linters (if configured)

Environment variables
Create `.env.local` at the repository root for local development. Typical variables expected by this project include (replace values per your environment):

```
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_AUTH_URL=https://auth.example.com
NEXT_PUBLIC_SENTRY_DSN=your_sentry_dsn
# Add any other environment variables your backend or auth integrations require
```

Notes & conventions

- The repo uses the Next.js app-router pattern. Routes and layouts are placed under `src/app` with segment-specific layouts.
- Keep shared UI primitives inside `src/components/ui` to encourage reuse.
- Feature components belong to their feature folders under `src/components` (e.g., `admin`, `forms`).
- The codebase organizes pages under route groups using parentheses like `(admin)`, `(auth)`, `(dashboard)` — follow this convention when adding routes.

Testing & CI

- This repository currently does not include explicit test configuration in the README. Add unit and integration tests (Jest/Playwright/Testing Library) and CI pipelines as needed.

Deployment

- Typical Next.js deployment targets work well (Vercel, Netlify, or any Node hosting). Ensure environment variables are set in your hosting provider and the build command `pnpm build` is executed.

Contributing

- Open issues for bugs or feature requests.
- Follow the branching strategy used by the project (work on feature branches and open PRs to `develop`; final merge to `main` per repo policy).

Suggestions / Next steps

- Add an `.env.local.example` that lists required env variables with descriptions.
- Add a `LICENSE` and CODEOWNERS if this repo will be shared publicly or across teams.
- Add tests and a basic GitHub Actions/CI workflow.

Where to find things (quick links)

- Authentication routes: `src/app/(auth)`
- Admin routes: `src/app/(admin)/admin`
- Dashboard routes: `src/app/(dashboard)`
- Shared UI: `src/components/ui`

Contact
If you need additional details about specific components or routes, open an issue or ask a maintainer.
