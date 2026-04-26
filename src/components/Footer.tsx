import { Zap, Github, Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-10"
      style={{
        background: "var(--bg-secondary)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="container-xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo + tagline */}
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, var(--accent-cyan), var(--accent-amber))",
              }}
            >
              <Zap size={16} className="text-white" />
            </div>
            <div>
              <div
                className="font-display font-bold text-base"
                style={{ color: "var(--text-primary)" }}
              >
                Synapse<span style={{ color: "var(--accent-cyan)" }}>-CI</span>
              </div>
              <div className="font-mono text-xs" style={{ color: "var(--text-muted)" }}>
                Smart DevOps Automation Platform
              </div>
            </div>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center gap-6">
            {["Home", "Domain", "Milestones", "Documents", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-mono text-xs transition-colors"
                style={{ color: "var(--text-muted)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-cyan)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            <a
              href="mailto:synapseci@example.com"
              className="w-8 h-8 rounded-lg flex items-center justify-center transition-all"
              style={{ border: "1px solid var(--border)", color: "var(--text-muted)" }}
              title="Email"
            >
              <Mail size={14} />
            </a>
            <a
              href="https://github.com/synapse-ci"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg flex items-center justify-center transition-all"
              style={{ border: "1px solid var(--border)", color: "var(--text-muted)" }}
              title="GitHub"
            >
              <Github size={14} />
            </a>
          </div>
        </div>

        <div
          className="mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <p className="font-mono text-xs" style={{ color: "var(--text-muted)" }}>
            © {year} Synapse-CI · All rights reserved
          </p>
          <p className="font-mono text-xs" style={{ color: "var(--text-muted)" }}>
            Sri Lanka Institute of Information Technology (SLIIT)
          </p>
        </div>
      </div>
    </footer>
  );
}
