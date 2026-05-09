"use client";
import { motion } from "framer-motion";
export default function Home() {
  return (
<main className="relative min-h-screen overflow-hidden bg-black text-white">
  {/* Background Glow */}
<div className="absolute inset-0 -z-10 overflow-hidden">

  <div className="absolute left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-green-500/20 blur-3xl" />

  <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-3xl" />

</div>
      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          <h1 className="text-xl font-bold">
            SpendPilot AI
          </h1>

          <a
  href="/audit"
  className="rounded-xl border border-white/20 px-4 py-2 text-sm transition hover:bg-white hover:text-black"
>
  Start Audit
</a>

        </div>
      </nav>

      {/* Hero Section */}
        <motion.section
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="flex min-h-screen flex-col items-center justify-center px-6 text-center">

       <a
  href="/audit"
  className="mb-6 rounded-full border border-white/20 px-4 py-1 text-sm text-gray-300 transition hover:bg-white hover:text-black"
>
  AI Spend Optimization
</a> 

        <h1 className="max-w-5xl bg-gradient-to-r from-white to-green-400 bg-clip-text text-5xl font-bold leading-tight text-transparent md:text-7xl">
          Stop Overpaying For AI Tools
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-400">
          Audit your AI stack instantly. Discover wasted spend,
          cheaper plans, and smarter alternatives in under 60 seconds.
        </p>

        <div className="mt-10 flex gap-4">

        <motion.a
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.97 }}
  href="/audit"
  className="rounded-xl bg-white px-6 py-3 font-medium text-black"
>
  Start Free Audit
</motion.a> 
          <a
  href="/results"
  className="rounded-xl border border-white/20 px-6 py-3 transition hover:bg-white hover:text-black"
>
  View Demo
</a>

        </div>

      </motion.section>

      {/* How It Works */}
      <section className="mx-auto max-w-6xl px-6 py-24">

        <h2 className="text-center text-4xl font-bold">
          How It Works
        </h2>

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          <div className="rounded-2xl border border-white/10 p-6">
            <h3 className="text-xl font-semibold">
              1. Enter Your Stack
            </h3>

            <p className="mt-4 text-gray-400">
              Add your AI tools, plans, monthly spend,
              and team size.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 p-6">
            <h3 className="text-xl font-semibold">
              2. Get Instant Audit
            </h3>

            <p className="mt-4 text-gray-400">
              Our engine analyzes overspending and
              optimization opportunities.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 p-6">
            <h3 className="text-xl font-semibold">
              3. Save Thousands
            </h3>

            <p className="mt-4 text-gray-400">
              Switch plans, optimize tools, and reduce
              annual AI costs.
            </p>
          </div>

        </div>

      </section>
    {/* Features Section */}
<section className="px-6 py-24 text-white">

  <div className="mx-auto max-w-6xl">

    <div className="text-center">

      <p className="text-sm uppercase tracking-[0.3em] text-gray-400">
        Features
      </p>

      <h2 className="mt-4 text-5xl font-bold">
        Built for Modern Teams
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
        SpendPilot helps startups reduce SaaS waste,
        optimize subscriptions, and improve operational efficiency.
      </p>

    </div>

    <div className="mt-16 grid gap-8 md:grid-cols-3">

<motion.div
  whileHover={{ scale: 1.03 }}
  transition={{ duration: 0.2 }}
className="rounded-3xl border border-white/10 bg-white/5 p-8 transition duration-300 hover:-translate-y-2 hover:border-green-400/30 hover:bg-white/10">
        <div className="text-4xl">⚡</div>

        <h3 className="mt-6 text-2xl font-semibold">
          AI Optimization
        </h3>

        <p className="mt-4 text-gray-400">
          Detect inefficient subscriptions and uncover
          hidden cost-saving opportunities instantly.
        </p>

</motion.div>
<motion.div
  whileHover={{ scale: 1.03 }}
  transition={{ duration: 0.2 }}
  className="rounded-3xl border border-white/10 bg-white/5 p-8"
>
        <div className="text-4xl">📊</div>

        <h3 className="mt-6 text-2xl font-semibold">
          Smart Analytics
        </h3>

        <p className="mt-4 text-gray-400">
          Visualize spend trends and optimize your SaaS stack
          using actionable insights.
        </p>

</motion.div>
<motion.div
  whileHover={{ scale: 1.03 }}
  transition={{ duration: 0.2 }}
  className="rounded-3xl border border-white/10 bg-white/5 p-8"
>
        <div className="text-4xl">🚀</div>

        <h3 className="mt-6 text-2xl font-semibold">
          Instant Recommendations
        </h3>

        <p className="mt-4 text-gray-400">
          Get personalized recommendations tailored
          to your team size and workflow.
        </p>

</motion.div>
    </div>

  </div>

</section>
{/* Stats Section */}
<section className="px-6 py-20 text-white">

  <div className="mx-auto grid max-w-6xl gap-8 rounded-3xl border border-white/10 bg-white/5 p-10 md:grid-cols-4">

    <div>
      <div className="text-5xl font-bold text-green-400">
        35%
      </div>

      <p className="mt-2 text-gray-400">
        Average SaaS Savings
      </p>
    </div>

    <div>
      <div className="text-5xl font-bold text-green-400">
        $2M+
      </div>

      <p className="mt-2 text-gray-400">
        Optimized Spend
      </p>
    </div>

    <div>
      <div className="text-5xl font-bold text-green-400">
        500+
      </div>

      <p className="mt-2 text-gray-400">
        Teams Audited
      </p>
    </div>

    <div>
      <div className="text-5xl font-bold text-green-400">
        99.9%
      </div>

      <p className="mt-2 text-gray-400">
        Platform Reliability
      </p>
    </div>

  </div>

</section>
{/* Testimonials */}
<section className="px-6 py-24 text-white">

  <div className="mx-auto max-w-6xl">

    <div className="text-center">

      <p className="text-sm uppercase tracking-[0.3em] text-gray-400">
        Testimonials
      </p>

      <h2 className="mt-4 text-5xl font-bold">
        Teams Love SpendPilot
      </h2>

    </div>

    <div className="mt-16 grid gap-8 md:grid-cols-3">

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

        <p className="text-lg text-gray-300">
          “SpendPilot helped us identify overpaying SaaS tools
          within minutes. The recommendations were surprisingly accurate.”
        </p>

        <div className="mt-8">

          <div className="font-semibold">
            Sarah Chen
          </div>

          <div className="text-gray-400">
            COO at NovaLabs
          </div>

        </div>

      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

        <p className="text-lg text-gray-300">
          “The audit experience feels premium and the insights
          are genuinely useful for scaling startups.”
        </p>

        <div className="mt-8">

          <div className="font-semibold">
            Marcus Lee
          </div>

          <div className="text-gray-400">
            Founder at CloudSprint
          </div>

        </div>

      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

        <p className="text-lg text-gray-300">
          “We reduced recurring software costs significantly
          without affecting productivity.”
        </p>

        <div className="mt-8">

          <div className="font-semibold">
            Priya Sharma
          </div>

          <div className="text-gray-400">
            Finance Lead at VertexFlow
          </div>

        </div>

      </div>

    </div>

  </div>

</section>
{/* CTA */}
<section className="px-6 pb-24 text-white">

  <div className="mx-auto max-w-5xl rounded-3xl border border-green-500/20 bg-green-500/10 p-12 text-center">

    <p className="text-sm uppercase tracking-[0.3em] text-green-300">
      Start Optimizing Today
    </p>

    <h2 className="mt-6 text-5xl font-bold">
      Stop Overspending on SaaS
    </h2>

    <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
      Get AI-powered recommendations and optimize
      your software stack in minutes.
    </p>

    <div className="mt-10">

      <a
        href="/audit"
        className="rounded-2xl bg-white px-8 py-4 text-lg font-semibold text-black transition hover:scale-105"
      >
        Start Free Audit
      </a>

    </div>

  </div>

</section>
    </main>
  );
}