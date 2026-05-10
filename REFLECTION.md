1. The Hardest Bug

The hardest bug I encountered was integrating Framer Motion inside the Next.js App Router. Initially, I attempted to use motion components directly inside server components, which caused runtime errors because Framer Motion requires client-side rendering. My first hypothesis was that the import was incorrect, but after reviewing the stack trace and reading the Next.js documentation, I realized the issue was related to server and client component boundaries.

I tested several fixes, including moving animation code into separate components and simplifying the motion wrappers. Eventually, I solved the issue by adding the "use client" directive at the top of the component file and restructuring the page into a proper client component. This debugging process taught me a lot about how Next.js App Router handles rendering.

2. A Decision I Reversed

Originally, I planned to build a highly AI-driven recommendation engine using LLM prompts for every audit. Midway through development, I reversed that decision and switched to a rule-based pricing engine.

I made this change because the AI-based approach added unnecessary latency, cost, and unpredictability for an MVP. The rule-based system was faster, easier to test, and more transparent. Since the core goal was validating the business concept rather than building complex AI infrastructure, the simpler architecture made more sense.

3. What I Would Build In Week 2

If I had another week, I would focus on benchmarking and analytics features. I would add comparisons like “your AI spend per developer is 40% above average for startups your size.”

I would also improve the audit engine using more pricing data sources and smarter recommendations. Additional features would include PDF exports, Slack integration, usage tracking, and personalized dashboards for recurring audits.

4. How I Used AI Tools

I used ChatGPT heavily throughout the project for debugging, architecture planning, UI improvement ideas, and TypeScript guidance. AI tools were especially useful for resolving dependency issues and structuring Next.js routes.

However, I did not blindly trust generated code. One example was when an AI-generated Framer Motion implementation caused server/client rendering conflicts in Next.js. I manually debugged the issue and rewrote the structure instead of copying the suggestion directly.

AI accelerated development significantly, but human verification was still essential.

5. Self Rating
Discipline — 8/10

I consistently worked daily and maintained project momentum throughout the week.

Code Quality — 7/10

The codebase is modular and readable, though there is still room for better abstraction and testing.

Design Sense — 8/10

I focused heavily on creating a polished SaaS-style interface with responsive layouts and premium visual hierarchy.

Problem Solving — 8/10

I encountered multiple integration and dependency issues and was able to debug them systematically.

Entrepreneurial Thinking — 9/10

I approached the project not just as software but as a real lead-generation business tool.