export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          <h1 className="text-xl font-bold">
            SpendPilot AI
          </h1>

          <button className="rounded-xl border border-white/20 px-4 py-2 text-sm transition hover:bg-white hover:text-black">
            Start Audit
          </button>

        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">

        <div className="mb-6 rounded-full border border-white/20 px-4 py-1 text-sm text-gray-300">
          AI Spend Optimization
        </div>

        <h1 className="max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
          Stop Overpaying For AI Tools
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-400">
          Audit your AI stack instantly. Discover wasted spend,
          cheaper plans, and smarter alternatives in under 60 seconds.
        </p>

        <div className="mt-10 flex gap-4">

          <a
  href="/audit"
  className="rounded-xl bg-white px-6 py-3 font-medium text-black transition hover:scale-105"
>
  Start Free Audit
</a>

          <button className="rounded-xl border border-white/20 px-6 py-3 transition hover:bg-white hover:text-black">
            View Demo
          </button>

        </div>

      </section>

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

    </main>
  );
}