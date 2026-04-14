import Link from "next/link";

type CrossLinkProps = {
  href: string;
  label: string;
  description: string;
};

/**
 * SSR inline cross-link strip — afegeix link juice entre silos sense
 * trencar el disseny existent. S'inclou al page.tsx (Server Component).
 */
export function CrossLink({ href, label, description }: CrossLinkProps) {
  return (
    <div
      style={{
        borderTop: "1px solid var(--mist)",
        background: "var(--surface)",
        padding: "var(--space-4) 0",
      }}
    >
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--space-6)", flexWrap: "wrap" }}>
        <p style={{ fontSize: 14, color: "var(--slate)", margin: 0 }}>
          {description}
        </p>
        <Link
          href={href}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            fontSize: 14,
            fontWeight: 600,
            color: "var(--ulpiano-green)",
            textDecoration: "none",
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}
        >
          {label} →
        </Link>
      </div>
    </div>
  );
}
