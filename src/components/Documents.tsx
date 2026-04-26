"use client";
import SectionHeader from "./SectionHeader";
import { FileText, ExternalLink, Download } from "lucide-react";

// Add your Google Drive / hosted links here
const DOCUMENTS = [
  {
    id: "project-charter",
    title: "Project Charter",
    desc: "Formal project authorization document defining scope, objectives, stakeholders, and high-level timeline for Synapse-CI.",
    status: "available",
    viewLink: "#", // Replace with actual link
    downloadLink: "#",
    tag: "Charter",
    color: "var(--accent-cyan)",
  },
  {
    id: "proposal-doc",
    title: "Proposal Document",
    desc: "Full project proposal including literature survey, research gap analysis, proposed methodology, and evaluation plan.",
    status: "available",
    viewLink: "#", // Replace with actual link
    downloadLink: "#",
    tag: "Proposal",
    color: "var(--accent-amber)",
  },
  {
    id: "checklist-1",
    title: "Checklist Document 1",
    desc: "Progress checklist for Phase 1 — covers requirements gathering, initial prototyping, and supervisor review sign-offs.",
    status: "available",
    viewLink: "#", // Replace with actual link
    downloadLink: "#",
    tag: "Checklist",
    color: "#a78bfa",
  },
  {
    id: "checklist-2",
    title: "Checklist Document 2",
    desc: "Progress checklist for Phase 2 — covers integration, testing, and evaluation milestones with supervisor sign-offs.",
    status: "pending",
    viewLink: "#",
    downloadLink: "#",
    tag: "Checklist",
    color: "#a78bfa",
  },
  {
    id: "final-doc-main",
    title: "Final Document (Group)",
    desc: "Comprehensive group report covering the complete Synapse-CI platform design, implementation, evaluation, and conclusions.",
    status: "pending",
    viewLink: "#",
    downloadLink: "#",
    tag: "Final Report",
    color: "#4ade80",
  },
  {
    id: "final-doc-member1",
    title: "Individual Report – Member 1",
    desc: "Individual report covering personal contributions to the CI/CD Orchestrator and HITL governance subsystem.",
    status: "pending",
    viewLink: "#",
    downloadLink: "#",
    tag: "Individual",
    color: "#fb7185",
  },
  {
    id: "final-doc-member2",
    title: "Individual Report – Member 2",
    desc: "Individual report covering personal contributions to the IaC generation and repository analysis subsystem.",
    status: "pending",
    viewLink: "#",
    downloadLink: "#",
    tag: "Individual",
    color: "#fb7185",
  },
  {
    id: "final-doc-member3",
    title: "Individual Report – Member 3",
    desc: "Individual report covering personal contributions to the adaptive test prioritization agent and CI integration.",
    status: "pending",
    viewLink: "#",
    downloadLink: "#",
    tag: "Individual",
    color: "#fb7185",
  },
  {
    id: "final-doc-member4",
    title: "Individual Report – Member 4",
    desc: "Individual report covering personal contributions to the chaos & resilience validation agent and scoring engine.",
    status: "pending",
    viewLink: "#",
    downloadLink: "#",
    tag: "Individual",
    color: "#fb7185",
  },
];

export default function Documents() {
  const available = DOCUMENTS.filter((d) => d.status === "available").length;

  return (
    <section id="documents" className="section" style={{ background: "var(--bg-secondary)" }}>
      <div className="container-xl">
        <SectionHeader
          badge="04 · Documents"
          title="Project "
          highlight="Documents"
          subtitle="All research documents — proposals, checklists, and final reports — accessible for review and download."
        />

        {/* Legend */}
        <div className="flex flex-wrap gap-4 mb-8">
          <div className="flex items-center gap-2 font-mono text-xs" style={{ color: "var(--text-muted)" }}>
            <div className="w-2 h-2 rounded-full bg-green-400" />
            {available} Available
          </div>
          <div className="flex items-center gap-2 font-mono text-xs" style={{ color: "var(--text-muted)" }}>
            <div className="w-2 h-2 rounded-full" style={{ background: "var(--text-muted)" }} />
            {DOCUMENTS.length - available} Pending
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {DOCUMENTS.map((doc) => (
            <div
              key={doc.id}
              className="card p-5 flex flex-col"
              style={{
                opacity: doc.status === "pending" ? 0.65 : 1,
              }}
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: `${doc.color}18` }}
                >
                  <FileText size={18} style={{ color: doc.color }} />
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className="font-mono text-xs px-2 py-0.5 rounded"
                    style={{
                      background: `${doc.color}18`,
                      color: doc.color,
                      border: `1px solid ${doc.color}40`,
                    }}
                  >
                    {doc.tag}
                  </span>
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{
                      background: doc.status === "available" ? "#4ade80" : "var(--text-muted)",
                    }}
                  />
                </div>
              </div>

              <h4
                className="font-display font-bold text-base mb-2"
                style={{ color: "var(--text-primary)" }}
              >
                {doc.title}
              </h4>
              <p
                className="text-sm leading-relaxed flex-1 mb-4"
                style={{ color: "var(--text-secondary)", fontFamily: "var(--font-sans)" }}
              >
                {doc.desc}
              </p>

              {/* Actions */}
              <div className="flex gap-2 mt-auto">
                <a
                  href={doc.viewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 flex-1 justify-center py-2 rounded-lg font-mono text-xs transition-all"
                  style={{
                    background: doc.status === "available" ? "rgba(34,211,238,0.1)" : "var(--bg-secondary)",
                    color: doc.status === "available" ? "var(--accent-cyan)" : "var(--text-muted)",
                    border: "1px solid var(--border)",
                    pointerEvents: doc.status === "pending" ? "none" : "auto",
                  }}
                >
                  <ExternalLink size={12} />
                  View
                </a>
                <a
                  href={doc.downloadLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 flex-1 justify-center py-2 rounded-lg font-mono text-xs transition-all"
                  style={{
                    background: "var(--bg-secondary)",
                    color: "var(--text-muted)",
                    border: "1px solid var(--border)",
                    pointerEvents: doc.status === "pending" ? "none" : "auto",
                  }}
                >
                  <Download size={12} />
                  Download
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
