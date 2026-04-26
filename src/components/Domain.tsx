"use client";
import { useState } from "react";
import Image from "next/image";
import SectionHeader from "./SectionHeader";
import {
  BookOpen,
  AlertTriangle,
  Target,
  FlaskConical,
  Code2,
  ChevronDown,
  ChevronUp,
  Bot,
  DatabaseZap,
  Flame,
  GitBranch,
  Network,
} from "lucide-react";

const TABS = [
  { id: "survey", icon: BookOpen, label: "Literature Survey" },
  { id: "gap", icon: AlertTriangle, label: "Research Gap" },
  { id: "problem", icon: Target, label: "Research Problem" },
  { id: "objectives", icon: Target, label: "Objectives" },
  { id: "methodology", icon: FlaskConical, label: "Methodology" },
  { id: "tech", icon: Code2, label: "Technologies" },
];

const TECH_STACK = [
  {
    category: "Orchestration",
    items: [
      { name: "LangGraph", icon: Network, accent: "rgba(34,211,238,0.18)" },
      { name: "FastAPI", asset: "/assets/tech/fastapi.svg", accent: "rgba(0,150,136,0.18)" },
      { name: "PostgreSQL", asset: "/assets/tech/postgresql.svg", accent: "rgba(65,105,225,0.18)" },
      { name: "Alembic", icon: DatabaseZap, accent: "rgba(245,158,11,0.18)" },
    ],
  },
  {
    category: "AI & LLM",
    items: [
      { name: "Qwen 2.5 - 7B", icon: Bot, accent: "rgba(167,139,250,0.18)" },
      { name: "LangChain", asset: "/assets/tech/langchain.svg", accent: "rgba(148,163,184,0.18)" },
      { name: "Qdrant", asset: "/assets/tech/qdrant.svg", accent: "rgba(220,36,76,0.18)" },
    ],
  },
  {
    category: "Infrastructure",
    items: [
      { name: "Kubernetes", asset: "/assets/tech/kubernetes.svg", accent: "rgba(50,108,229,0.18)" },
      { name: "Terraform", asset: "/assets/tech/terraform.svg", accent: "rgba(132,79,186,0.18)" },
      { name: "Docker", asset: "/assets/tech/docker.svg", accent: "rgba(36,150,237,0.18)" },
      { name: "Helm", asset: "/assets/tech/helm.svg", accent: "rgba(15,22,137,0.18)" },
    ],
  },
  {
    category: "Chaos & Observability",
    items: [
      { name: "LitmusChaos", icon: Flame, accent: "rgba(251,113,133,0.18)" },
      { name: "Prometheus", asset: "/assets/tech/prometheus.svg", accent: "rgba(230,82,44,0.18)" },
      { name: "OpenTelemetry", asset: "/assets/tech/opentelemetry.svg", accent: "rgba(250,204,21,0.18)" },
      { name: "Grafana", asset: "/assets/tech/grafana.svg", accent: "rgba(244,104,0,0.18)" },
    ],
  },
  {
    category: "CI/CD",
    items: [
      { name: "GitHub Actions", asset: "/assets/tech/githubactions.svg", accent: "rgba(32,136,255,0.18)" },
      { name: "GitHub API", asset: "/assets/tech/github.svg", accent: "rgba(148,163,184,0.18)" },
      { name: "Workflow Dispatch", icon: GitBranch, accent: "rgba(34,211,238,0.18)" },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "Next.js", asset: "/assets/tech/nextdotjs.svg", accent: "rgba(148,163,184,0.16)" },
      { name: "React", asset: "/assets/tech/react.svg", accent: "rgba(97,218,251,0.18)" },
      { name: "TypeScript", asset: "/assets/tech/typescript.svg", accent: "rgba(49,120,198,0.18)" },
      { name: "Tailwind CSS", asset: "/assets/tech/tailwindcss.svg", accent: "rgba(6,182,212,0.18)" },
    ],
  },
];

const OBJECTIVES = [
  {
    id: "01",
    title: "CI/CD Pipeline Orchestrator",
    desc: "Design and implement a HITL CI/CD orchestration system with governed policy enforcement, explainability artifacts (ADR/audit trail), and a managed knowledge lifecycle - eliminating black-box pipeline generation.",
    color: "var(--accent-cyan)",
  },
  {
    id: "02",
    title: "IaC Artifact Generation",
    desc: "Build a repository-aware system that analyzes project signals (stack, environment, patterns) and generates contextually accurate Kubernetes manifests, Terraform scaffolding, and Dockerfile templates.",
    color: "var(--accent-amber)",
  },
  {
    id: "03",
    title: "Adaptive Test Prioritization",
    desc: "Develop an agentic test case prioritization framework that reorders CI test execution based on commit diffs and historical failure data, reducing feedback loops and compute waste.",
    color: "#a78bfa",
  },
  {
    id: "04",
    title: "Automated Chaos & Resilience Validation",
    desc: "Create a closed-loop chaos engineering agent that selects experiments contextually, executes fault injection via Kubernetes tooling, observes telemetry, and produces a unified resilience score (0-100).",
    color: "#fb7185",
  },
];

export default function Domain() {
  const [activeTab, setActiveTab] = useState("survey");
  const [expandedObj, setExpandedObj] = useState<string | null>("01");

  return (
    <section id="domain" className="section" style={{ background: "var(--bg-secondary)" }}>
      <div className="container-xl">
        <SectionHeader
          badge="02 · Domain"
          title="Research "
          highlight="Domain"
          subtitle="Synapse-CI addresses persistent gaps in DevOps automation - static pipelines, unauditable AI generation, and fragmented tooling across the delivery lifecycle."
        />

        <div
          className="flex flex-wrap gap-2 mb-8 p-1 rounded-xl"
          style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
        >
          {TABS.map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-sm transition-all"
              style={{
                background: activeTab === id ? "var(--accent-cyan)" : "transparent",
                color: activeTab === id ? "var(--bg-primary)" : "var(--text-secondary)",
                fontWeight: activeTab === id ? "700" : "400",
              }}
            >
              <Icon size={14} />
              <span className="hidden sm:block">{label}</span>
            </button>
          ))}
        </div>

        <div>
          {activeTab === "survey" && (
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h3
                  className="font-display font-bold text-xl mb-4"
                  style={{ color: "var(--text-primary)" }}
                >
                  State of the Art
                </h3>
                <p className="leading-relaxed mb-4" style={{ color: "var(--text-secondary)", fontFamily: "var(--font-sans)" }}>
                  Existing CI/CD automation tools - from Jenkins plugins to GitHub Actions templates - operate on a &quot;logic-at-runtime&quot; model: conditional YAML executes excessive work even for low-risk changes. Research into AI-assisted pipeline generation (e.g., Copilot-based approaches) demonstrates generation capability but lacks governance, policy tracing, and organizational memory.
                </p>
                <p className="leading-relaxed mb-4" style={{ color: "var(--text-secondary)", fontFamily: "var(--font-sans)" }}>
                  In the chaos engineering domain, tools like LitmusChaos and Chaos Mesh provide fault injection primitives but offer no automated experiment selection, scoring normalization, or CI/CD integration for gating decisions. Similarly, test prioritization literature (APFD metric, historical-failure-based ordering) remains largely offline and academic, disconnected from live CI pipelines.
                </p>
                <p className="leading-relaxed" style={{ color: "var(--text-secondary)", fontFamily: "var(--font-sans)" }}>
                  IaC generation tools exist (Pulumi AI, Copilot for Terraform) but rely on generic prompting without repository-specific signals, leading to scaffolds that require significant manual correction.
                </p>
              </div>
              <div
                className="rounded-xl overflow-hidden flex items-center justify-center"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  minHeight: "300px",
                }}
              >
                <div className="text-center p-8">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ background: "rgba(34,211,238,0.1)" }}
                  >
                    <BookOpen size={28} style={{ color: "var(--accent-cyan)" }} />
                  </div>
                  <p className="font-mono text-sm" style={{ color: "var(--text-muted)" }}>
                    literature-survey-diagram.png
                  </p>
                  <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
                    Add image to /public/assets/
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "gap" && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
              {[
                {
                  title: "Pipelines are static and wasteful",
                  desc: "Template YAML runs the same heavy suite regardless of change scope. Low-risk commits trigger full CI runs, burning compute and slowing feedback loops.",
                  color: "#fb7185",
                },
                {
                  title: "AI generators are black boxes",
                  desc: "Current AI tools produce YAML without explaining what was included, skipped, or why - making review unreliable and policy enforcement impossible.",
                  color: "var(--accent-amber)",
                },
                {
                  title: "Knowledge conflicts accumulate",
                  desc: "As organizational practices evolve, rule sets become contradictory without lifecycle governance. Silent learning causes non-deterministic outputs.",
                  color: "#a78bfa",
                },
                {
                  title: "Chaos engineering lacks closed loops",
                  desc: "Fault injection tools don't automatically select experiments, score resilience consistently, or feed results back to CI/CD gating decisions.",
                  color: "var(--accent-cyan)",
                },
              ].map((gap) => (
                <div key={gap.title} className="card p-6">
                  <div
                    className="w-2 h-8 rounded-full mb-4"
                    style={{ background: gap.color }}
                  />
                  <h4
                    className="font-display font-bold text-lg mb-3"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {gap.title}
                  </h4>
                  <p
                    className="leading-relaxed"
                    style={{ color: "var(--text-secondary)", fontFamily: "var(--font-sans)" }}
                  >
                    {gap.desc}
                  </p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "problem" && (
            <div
              className="rounded-2xl p-8 lg:p-12"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border-strong)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                className="absolute top-0 left-0 w-1 h-full"
                style={{ background: "linear-gradient(to bottom, var(--accent-cyan), var(--accent-amber))" }}
              />
              <div className="pl-6">
                <p
                  className="font-mono text-sm mb-6"
                  style={{ color: "var(--accent-cyan)" }}
                >
                  {"// research_problem.md"}
                </p>
                <h3
                  className="font-display font-bold text-2xl lg:text-3xl mb-6 leading-tight"
                  style={{ color: "var(--text-primary)" }}
                >
                  How can an integrated agentic AI platform provide{" "}
                  <span className="gradient-text">
                    trustworthy, governed, and explainable
                  </span>{" "}
                  CI/CD pipeline automation that reduces static waste, prevents knowledge conflicts, and validates resilience across the full DevOps lifecycle?
                </h3>
                <p
                  className="text-lg leading-relaxed"
                  style={{ color: "var(--text-secondary)", fontFamily: "var(--font-sans)" }}
                >
                  Modern DevOps teams face a compounding problem: delivery pipelines evolve rapidly while automation remains manual and fragile. AI tools exist but behave as black boxes - generating artifacts without governance, traceability, or organizational context. Synapse-CI addresses this by unifying pipeline planning, IaC generation, test optimization, and resilience validation under a single governed lifecycle, where every decision is auditable and every learning artifact is explicitly managed.
                </p>
              </div>
            </div>
          )}

          {activeTab === "objectives" && (
            <div className="space-y-4">
              {OBJECTIVES.map((obj) => (
                <div
                  key={obj.id}
                  className="rounded-xl overflow-hidden transition-all"
                  style={{ border: "1px solid var(--border)", background: "var(--bg-card)" }}
                >
                  <button
                    className="w-full flex items-center gap-5 p-5 text-left"
                    onClick={() =>
                      setExpandedObj(expandedObj === obj.id ? null : obj.id)
                    }
                  >
                    <span
                      className="font-mono text-2xl font-bold shrink-0"
                      style={{ color: obj.color }}
                    >
                      {obj.id}
                    </span>
                    <span
                      className="font-display font-bold text-lg flex-1"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {obj.title}
                    </span>
                    {expandedObj === obj.id ? (
                      <ChevronUp size={18} style={{ color: "var(--text-muted)" }} />
                    ) : (
                      <ChevronDown size={18} style={{ color: "var(--text-muted)" }} />
                    )}
                  </button>
                  {expandedObj === obj.id && (
                    <div
                      className="px-5 pb-5"
                      style={{ borderTop: "1px solid var(--border)" }}
                    >
                      <p
                        className="pt-4 leading-relaxed text-lg"
                        style={{
                          color: "var(--text-secondary)",
                          fontFamily: "var(--font-sans)",
                        }}
                      >
                        {obj.desc}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {activeTab === "methodology" && (
            <div className="grid lg:grid-cols-5 gap-0">
              {[
                { step: "01", title: "Repository Analysis", desc: "Inspector agent reads filesystem signals, tech fingerprints, and repo metadata to build a blueprint." },
                { step: "02", title: "Intent Classification", desc: "Intent Classifier determines change type and risk level from natural language and diff context." },
                { step: "03", title: "Plan Generation", desc: "Architect + Policy Guardian compose execution topology and enforce organizational gates before YAML exists." },
                { step: "04", title: "Artifact Generation", desc: "Generator + Scribe produce workflow YAML and ADR/audit trail with deterministic fallbacks." },
                { step: "05", title: "Validation & Learning", desc: "Chaos agent scores resilience. Analyst captures user edits as governed candidate rules for lifecycle ingestion." },
              ].map((step, i, arr) => (
                <div key={step.step} className="relative flex flex-col items-center text-center p-4">
                  {i < arr.length - 1 && (
                    <div
                      className="absolute top-8 left-1/2 right-0 h-px"
                      style={{ background: "var(--border)", zIndex: 0 }}
                    />
                  )}
                  <div
                    className="relative z-10 w-14 h-14 rounded-full flex items-center justify-center mb-4 font-mono font-bold text-lg"
                    style={{
                      background: "linear-gradient(135deg, var(--accent-cyan), var(--accent-amber))",
                      color: "var(--bg-primary)",
                      boxShadow: "0 0 20px rgba(34,211,238,0.3)",
                    }}
                  >
                    {step.step}
                  </div>
                  <h4
                    className="font-display font-bold text-sm mb-2"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {step.title}
                  </h4>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "var(--text-secondary)", fontFamily: "var(--font-sans)" }}
                  >
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "tech" && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {TECH_STACK.map((group) => (
                <div key={group.category} className="card p-5">
                  <h4
                    className="font-mono text-xs font-bold mb-3 uppercase tracking-widest"
                    style={{ color: "var(--accent-cyan)" }}
                  >
                    {group.category}
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {group.items.map((item) => (
                      <div
                        key={item.name}
                        className="rounded-xl p-3 flex flex-col items-start gap-3"
                        style={{
                          background: "var(--bg-secondary)",
                          border: "1px solid var(--border)",
                        }}
                      >
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center"
                          style={{ background: item.accent }}
                        >
                          {item.asset ? (
                            <Image
                              src={item.asset}
                              alt={`${item.name} logo`}
                              width={20}
                              height={20}
                              className="w-5 h-5 object-contain"
                            />
                          ) : item.icon ? (
                            <item.icon size={18} style={{ color: "var(--text-primary)" }} />
                          ) : null}
                        </div>
                        <span
                          className="text-sm font-mono leading-snug"
                          style={{ color: "var(--text-primary)" }}
                        >
                          {item.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div
          className="mt-12 rounded-2xl overflow-hidden flex flex-col items-center justify-center"
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            minHeight: "280px",
          }}
        >
          <div className="text-center p-8">
            <p className="font-mono text-sm mb-2" style={{ color: "var(--text-muted)" }}>
              system-architecture-diagram.png
            </p>
            <p className="text-xs" style={{ color: "var(--text-muted)" }}>
              End-to-end architecture diagram · Add to /public/assets/
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
