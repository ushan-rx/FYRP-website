interface SectionHeaderProps {
  badge: string;
  title: string;
  highlight?: string;
  subtitle?: string;
}

export default function SectionHeader({ badge, title, highlight, subtitle }: SectionHeaderProps) {
  const parts = highlight ? title.split(highlight) : [title];

  return (
    <div className="mb-12">
      <span className="badge mb-4 inline-block">{badge}</span>
      <h2
        className="font-display font-bold mb-4"
        style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "var(--text-primary)" }}
      >
        {parts[0]}
        {highlight && <span className="gradient-text">{highlight}</span>}
        {parts[1]}
      </h2>
      {subtitle && (
        <p
          className="max-w-2xl text-lg leading-relaxed"
          style={{ color: "var(--text-secondary)", fontFamily: "var(--font-sans)" }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
