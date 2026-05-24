export function Logo({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-label="Amit Patel logo"
      className="text-fg"
    >
      <rect x="1.5" y="1.5" width="29" height="29" rx="8" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M9 22 L16 9 L23 22"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12 18 H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
