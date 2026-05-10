# PROMPTS.md

## Overview

SpendPilot AI currently uses lightweight rule-based audit logic instead of a fully autonomous LLM-driven recommendation engine. However, multiple prompts were designed and tested during development for future AI-assisted recommendations, insight generation, and savings explanations.

The goal of these prompts was to:

- Generate realistic SaaS optimization recommendations
- Explain overspending clearly
- Produce concise business-friendly audit summaries
- Avoid hallucinated pricing claims
- Keep recommendations actionable

---

# Prompt 1 — Audit Recommendation Engine

## Purpose

Generate optimization recommendations based on:

- Tool name
- Current plan
- Monthly spend
- Team size

## Prompt

```text
You are an AI SaaS cost optimization assistant.

Analyze the following software subscription setup and recommend a more cost-efficient alternative if appropriate.

Tool: {tool}
Current Plan: {plan}
Monthly Spend: ${monthly_spend}
Team Size: {team_size}

Rules:
- Only recommend realistic alternatives
- Do not invent pricing
- Prefer downgrades when team size is very small
- Prefer annual billing recommendations when useful
- Keep explanation under 80 words

Return:
1. Recommended plan
2. Estimated monthly savings
3. Short explanation