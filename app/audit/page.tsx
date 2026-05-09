"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
export default function AuditPage() {
  const [tool, setTool] = useState("");
  const [plan, setPlan] = useState("");
  const [monthlySpend, setMonthlySpend] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const router = useRouter();
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

    router.push("/loading-screen");
  }

  return (
  <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 text-white">

    {/* Background Glow */}
    <div className="absolute inset-0 -z-10">

      <div className="absolute left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-green-500/20 blur-3xl" />

      <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-3xl" />

    </div>

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="w-full max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
    >

      <div className="mb-10 text-center">

        <p className="text-sm uppercase tracking-[0.3em] text-gray-400">
          AI Spend Audit
        </p>

        <h1 className="mt-4 text-5xl font-bold">
          Analyze Your SaaS Stack
        </h1>

        <p className="mt-4 text-gray-400">
          Discover overspending and optimization opportunities instantly.
        </p>

      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >

        {/* Tool */}
        <div>

          <label className="mb-2 block text-sm text-gray-300">
            AI Tool
          </label>

          <input
            type="text"
            placeholder="e.g. ChatGPT"
            value={tool}
            onChange={(e) => setTool(e.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 outline-none transition focus:border-green-400"
            required
          />

        </div>

        {/* Plan */}
        <div>

          <label className="mb-2 block text-sm text-gray-300">
            Current Plan
          </label>

          <input
            type="text"
            placeholder="e.g. Team Plan"
            value={plan}
            onChange={(e) => setPlan(e.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 outline-none transition focus:border-green-400"
            required
          />

        </div>

        {/* Spend */}
        <div>

          <label className="mb-2 block text-sm text-gray-300">
            Monthly Spend ($)
          </label>

          <input
            type="number"
            placeholder="e.g. 100"
            value={monthlySpend}
            onChange={(e) => setMonthlySpend(e.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 outline-none transition focus:border-green-400"
            required
          />

        </div>

        {/* Team Size */}
        <div>

          <label className="mb-2 block text-sm text-gray-300">
            Team Size
          </label>

          <input
            type="number"
            placeholder="e.g. 5"
            value={teamSize}
            onChange={(e) => setTeamSize(e.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 outline-none transition focus:border-green-400"
            required
          />

        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full rounded-2xl bg-white py-4 text-lg font-semibold text-black transition hover:scale-[1.02]"
        >
          Generate Audit
        </button>

      </form>

    </motion.div>

  </main>
);
}