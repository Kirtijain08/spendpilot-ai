System Architecture
graph TD
    A[User] --> B[Next.js Frontend]
    B --> C[Audit Engine]
    C --> D[Supabase Database]
    C --> E[Recommendation Logic]
    C --> F[Transactional Email API]
    F --> G[Resend]
    D --> H[Public Audit URLs]
Data Flow
User submits audit form.
Frontend validates inputs.
Audit engine processes pricing and optimization rules.
Audit results are stored in Supabase.
A public audit URL is generated.
Transactional email is sent through Resend.
Results are displayed to the user.
Stack Choice
Next.js

Chosen for:

File-based routing
Server-side rendering
API routes
Fast deployment with Vercel
Strong TypeScript support
Supabase

Chosen because:

PostgreSQL backend
Simple SDK
Free tier sufficient for MVP
Easy scaling
Resend

Used for transactional email delivery because of:

Developer-friendly API
Good free tier
Easy integration with Next.js
Scaling to 10k Audits Per Day

If the platform scaled significantly:

Move pricing logic into dedicated services
Add Redis caching
Introduce background queues for emails
Use CDN caching for public pages
Add database indexing
Add rate limiting at edge level
Move heavy analytics into separate workers
