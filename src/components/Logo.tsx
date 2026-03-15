export default function Logo({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="BAi Logo"
      role="img"
    >
      {/* B */}
      <path
        d="M4 6h12c3 0 5.5 1 7 3 1 1.3 1.5 3 1.5 4.8 0 2.5-1 4.3-3 5.5 2.5 1.2 4 3.5 4 6.2 0 2.2-.8 4-2.2 5.5C21.8 32.5 19.5 34 16 34H4V6zm8.5 11c2 0 3.5-.5 4.5-1.5.8-.8 1.2-2 1.2-3.2 0-1.3-.4-2.4-1.2-3.2-1-1-2.5-1.4-4.5-1.4H8.5v9.3h4zm.8 13.3c2.2 0 3.8-.5 5-1.5 1-.9 1.5-2.2 1.5-3.7 0-1.5-.5-2.8-1.6-3.8-1.2-1-2.8-1.6-5-1.6H8.5V30.3h4.8z"
        fill="currentColor"
      />
      {/* A */}
      <path
        d="M36 34l-2.8-7.5H44.8L42 34h4.8L56 6h-4.5l-9.2 23.5L33 6h-4.5L38.2 34H36zm5.5-11l-3-8.5L35.5 23h6z"
        fill="currentColor"
      />
      {/* i */}
      <path
        d="M62 12.5c1.8 0 3.2-1.4 3.2-3.1 0-1.7-1.4-3.1-3.2-3.1-1.8 0-3.2 1.4-3.2 3.1 0 1.7 1.4 3.1 3.2 3.1zM59.5 16v18h5V16h-5z"
        fill="#c8a555"
      />
      {/* Tagline bar */}
      <rect x="72" y="15" width="1" height="20" fill="#1a9aaa" rx="0.5" />
      <text
        x="78"
        y="23"
        fill="currentColor"
        fontSize="5"
        fontFamily="system-ui, sans-serif"
        letterSpacing="0.5"
      >
        ACOUSTICS
      </text>
      <text
        x="78"
        y="32"
        fill="#64748b"
        fontSize="4"
        fontFamily="system-ui, sans-serif"
        letterSpacing="0.3"
      >
        CONSULTANTS
      </text>
    </svg>
  );
}
