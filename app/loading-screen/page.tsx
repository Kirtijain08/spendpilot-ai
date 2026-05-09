"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LoadingScreen() {

  const router = useRouter();

  useEffect(() => {

    const timer = setTimeout(() => {
      router.push("/results");
    }, 3500);

    return () => clearTimeout(timer);

  }, [router]);

  return (

    <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">

      <div className="w-full max-w-2xl">

        <div className="rounded-3xl border border-white/10 bg-white/5 p-10">

          <p className="text-sm uppercase tracking-[0.3em] text-gray-400">
            AI Audit Engine
          </p>

          <h1 className="mt-6 text-5xl font-bold leading-tight">
            Analyzing Your
            <span className="block text-green-400">
              SaaS Spending
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-400">
            Our AI is reviewing pricing structure,
            plan efficiency, and optimization opportunities.
          </p>

          {/* Progress Animation */}
          <div className="mt-10">

            <div className="h-4 overflow-hidden rounded-full bg-white/10">

              <div className="loading-bar h-full rounded-full bg-green-400" />

            </div>

          </div>

          {/* Fake AI Logs */}
          <div className="mt-10 space-y-4 text-sm text-gray-300">

            <div className="animate-pulse">
              ✓ Reviewing current subscription stack
            </div>

            <div className="animate-pulse">
              ✓ Comparing against optimized pricing tiers
            </div>

            <div className="animate-pulse">
              ✓ Detecting redundant SaaS expenses
            </div>

            <div className="animate-pulse">
              ✓ Generating AI recommendations
            </div>

          </div>

        </div>

      </div>

    </main>

  );
}