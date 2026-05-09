"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ResultsPage() {
  const [loading, setLoading] = useState(true);
  const [auditData, setAuditData] = useState<any>(null);

  useEffect(() => {
    const saved = localStorage.getItem("audit-data");
    setTimeout(() => {
  setLoading(false);
}, 1200);
    if (saved) {
      setAuditData(JSON.parse(saved));
    }
  }, []);

  if (!auditData) {
    if (loading) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black text-white">

      <div className="text-center">

        <div className="mx-auto h-16 w-16 animate-spin rounded-full border-4 border-white/10 border-t-green-400" />

        <p className="mt-6 text-gray-400">
          Generating AI Audit...
        </p>

      </div>

    </main>
  );
}
    return (
      <main className="flex min-h-screen items-center justify-center bg-black text-white">
        Loading...
      </main>
    );
  }

  const monthlySpend = Number(auditData.monthlySpend);

  let recommendedPlan = auditData.plan;
let estimatedSavings = 10;
let optimizationScore = 72;
let riskLevel = "Low";

const spend = Number(monthlySpend);
const team = Number(auditData.teamSize);

if (
  auditData.tool.toLowerCase() === "chatgpt" &&
  auditData.plan.toLowerCase().includes("team") &&
  team <= 2
) {
  recommendedPlan = "ChatGPT Plus";
  estimatedSavings = 30;
  optimizationScore = 91;
}

if (
  auditData.tool.toLowerCase() === "cursor" &&
  auditData.plan.toLowerCase().includes("business")
) {
  recommendedPlan = "Cursor Pro";
  estimatedSavings = 20;
  optimizationScore = 84;
}

if (spend > 500) {
  riskLevel = "High";
} else if (spend > 200) {
  riskLevel = "Medium";
}

  // Recommendation logic
  if (
    auditData.tool.toLowerCase() === "chatgpt" &&
    auditData.plan.toLowerCase().includes("team") &&
    Number(auditData.teamSize) <= 2
  ) {
    recommendedPlan = "ChatGPT Plus";
    estimatedSavings = 30;
  }

  if (
    auditData.tool.toLowerCase() === "cursor" &&
    auditData.plan.toLowerCase().includes("business")
  ) {
    recommendedPlan = "Cursor Pro";
    estimatedSavings = 20;
  }

  return (
    <main className="min-h-screen bg-black px-6 py-20 text-white">

      <div className="mx-auto max-w-5xl">

<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="rounded-3xl border border-white/10 bg-white/5 p-10"
>
          <div className="mb-8">

            <p className="text-sm uppercase tracking-widest text-gray-400">
              Audit Result
            </p>

            <h1 className="mt-4 text-5xl font-bold">
              You Could Save
            </h1>
<p className="mt-4 text-lg text-gray-400"></p>
<div className="mt-10 grid gap-6 md:grid-cols-2">

  {/* Optimization Score */}
  <div className="rounded-2xl border border-green-500/20 bg-green-500/10 p-6">

    <p className="text-sm uppercase tracking-widest text-green-300">
      Optimization Score
    </p>

    <div className="mt-4 text-5xl font-bold text-green-400">
      {optimizationScore}%
    </div>

    <p className="mt-4 text-gray-300">
      Your stack has strong optimization potential.
    </p>

  </div>

  {/* Risk Level */}
  <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-6">

    <p className="text-sm uppercase tracking-widest text-red-300">
      Overspending Risk
    </p>

    <div className="mt-4 text-5xl font-bold text-red-400">
      {riskLevel}
    </div>

    <p className="mt-4 text-gray-300">
      Current subscription structure may contain inefficiencies.
    </p>

  </div>

</div>
            <div className="mt-6 text-7xl font-bold text-green-400">
             <motion.span
  initial={{ scale: 0.8, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  ${estimatedSavings}
</motion.span>
              <span className="text-2xl text-gray-400">
                /month
              </span>
            </div>

            <p className="mt-4 text-lg text-gray-400">
              Estimated annual savings:
              <span className="ml-2 font-semibold text-white">
                ${estimatedSavings * 12}
              </span>
            </p>


          {/* Current Stack */}
          <div className="grid gap-6 md:grid-cols-2">

            <div className="rounded-2xl border border-white/10 p-6">

              <h2 className="text-xl font-semibold">
                Current Setup
              </h2>

              <div className="mt-6 space-y-3 text-gray-300">

                <p>
                  Tool:
                  <span className="ml-2 text-white">
                    {auditData.tool}
                  </span>
                </p>

                <p>
                  Plan:
                  <span className="ml-2 text-white">
                    {auditData.plan}
                  </span>
                </p>

                <p>
                  Monthly Spend:
                  <span className="ml-2 text-white">
                    ${monthlySpend}
                  </span>
                </p>

                <p>
                  Team Size:
                  <span className="ml-2 text-white">
                    {auditData.teamSize}
                  </span>
                </p>

              </div>

            </div>
            {/* Spend Comparison */}
<div className="mt-10 rounded-2xl border border-white/10 p-6">

  <h2 className="text-2xl font-semibold">
    Spend Comparison
  </h2>

  <p className="mt-2 text-gray-400">
    Estimated monthly spend before and after optimization.
  </p>

  <div className="mt-10 space-y-6">

    {/* Current Spend */}
    <div>

      <div className="mb-2 flex items-center justify-between">

        <span className="text-gray-300">
          Current Spend
        </span>

        <span className="font-semibold">
          ${monthlySpend}
        </span>

      </div>

      <div className="h-4 overflow-hidden rounded-full bg-white/10">

        <div
          className="h-full rounded-full bg-red-400"
          style={{ width: "100%" }}
        />

      </div>

    </div>

    {/* Optimized Spend */}
    <div>

      <div className="mb-2 flex items-center justify-between">

        <span className="text-gray-300">
          Optimized Spend
        </span>

        <span className="font-semibold">
          ${monthlySpend - estimatedSavings}
        </span>

      </div>

      <div className="h-4 overflow-hidden rounded-full bg-white/10">

        <div
          className="h-full rounded-full bg-green-400"
          style={{
            width: `${
              ((monthlySpend - estimatedSavings) /
                monthlySpend) *
              100
            }%`,
          }}
        />

      </div>

    </div>

  </div>

</div>
{/* AI Insight */}
<div className="mt-10 rounded-2xl border border-blue-500/20 bg-blue-500/10 p-6">

  <p className="text-sm uppercase tracking-widest text-blue-300">
    AI Insight
  </p>

  <h2 className="mt-4 text-2xl font-bold">
    Your Stack Shows Optimization Potential
  </h2>

  <p className="mt-4 max-w-3xl text-gray-300">
    {spend > 300
  ? "Your organization appears to be spending significantly on AI tooling. Consolidating plans and optimizing subscription tiers could reduce recurring SaaS costs substantially."
  : "Your stack is reasonably optimized, but there are still opportunities to reduce unnecessary spending and improve operational efficiency."}
  </p>

</div>
<div className="mt-10 flex justify-center">

  <a
    href="/audit"
    className="rounded-xl bg-white px-6 py-3 font-medium text-black transition hover:scale-105"
  >
    Run Another Audit
  </a>

</div>
            {/* Recommendation */}
            <div className="rounded-2xl border border-green-500/30 bg-green-500/10 p-6">

              <h2 className="text-xl font-semibold text-green-400">
                Recommendation
              </h2>

              <div className="mt-6 space-y-4">

                <p className="text-lg">
                  Switch to:
                </p>

                <div className="text-3xl font-bold">
                  {recommendedPlan}
                </div>

                <p className="text-gray-300">
                  Based on your team size and usage pattern,
                  this plan appears more cost-efficient.
                </p>

              </div>

            </div>

          </div>

        </div>
        </motion.div>

      </div>

    </main>
  );
}