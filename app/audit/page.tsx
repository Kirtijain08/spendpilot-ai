"use client";

import { useEffect, useState } from "react";

export default function AuditPage() {
  const [tool, setTool] = useState("");
  const [plan, setPlan] = useState("");
  const [monthlySpend, setMonthlySpend] = useState("");
  const [teamSize, setTeamSize] = useState("");

  useEffect(() => {
  const savedData = localStorage.getItem("audit-data");

  if (savedData) {
    const parsed = JSON.parse(savedData);

    setTool(parsed.tool || "");
    setPlan(parsed.plan || "");
    setMonthlySpend(parsed.monthlySpend || "");
    setTeamSize(parsed.teamSize || "");
  }
}, []);
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const auditData = {
  tool,
  plan,
  monthlySpend,
  teamSize,
};

localStorage.setItem(
  "audit-data",
  JSON.stringify(auditData)
);

console.log(auditData);

    alert("Audit submitted!");
  }

  return (
    <main className="min-h-screen bg-black px-6 py-20 text-white">

      <div className="mx-auto max-w-3xl">

        <h1 className="text-5xl font-bold">
          AI Spend Audit
        </h1>

        <p className="mt-4 text-gray-400">
          Analyze your AI stack and discover optimization opportunities.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-12 space-y-6 rounded-2xl border border-white/10 bg-white/5 p-8"
        >

          {/* Tool */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              AI Tool
            </label>

            <input
              type="text"
              placeholder="e.g. ChatGPT"
              value={tool}
              onChange={(e) => setTool(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 outline-none focus:border-white"
            />
          </div>

          {/* Plan */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              Current Plan
            </label>

            <input
              type="text"
              placeholder="e.g. Team Plan"
              value={plan}
              onChange={(e) => setPlan(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 outline-none focus:border-white"
            />
          </div>

          {/* Monthly Spend */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              Monthly Spend ($)
            </label>

            <input
              type="number"
              placeholder="200"
              value={monthlySpend}
              onChange={(e) => setMonthlySpend(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 outline-none focus:border-white"
            />
          </div>

          {/* Team Size */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              Team Size
            </label>

            <input
              type="number"
              placeholder="5"
              value={teamSize}
              onChange={(e) => setTeamSize(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 outline-none focus:border-white"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-white py-3 font-medium text-black transition hover:scale-[1.01]"
          >
            Generate Audit
          </button>

        </form>

      </div>

    </main>
  );
}
