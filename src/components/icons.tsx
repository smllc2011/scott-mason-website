export function HandcuffsIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 24a12 12 0 0 1 12 12v2.5c0 .8.7 1.5 1.5 1.5H21a2 2 0 0 1-2-2V36a8 8 0 1 1 16 0v2.5c0 .8.7 1.5 1.5 1.5H35a2 2 0 0 1-2-2V36a12 12 0 1 0-24 0v2.5c0 .8.7 1.5 1.5 1.5H14.5a2 2 0 0 1-2-2V36a12 12 0 0 1 12-12Z"
        fill="currentColor"
      />
      <path
        d="M48 24a12 12 0 0 1 12 12v2.5c0 .8-.7 1.5-1.5 1.5H53a2 2 0 0 1-2-2V36a8 8 0 1 0-16 0v2.5c0 .8-.7 1.5-1.5 1.5H35a2 2 0 0 1-2-2V36a12 12 0 1 1 24 0v2.5c0 .8-.7 1.5-1.5 1.5H49.5a2 2 0 0 1-2-2V36a12 12 0 0 1 12-12Z"
        fill="currentColor"
      />
      <rect x="26" y="31" width="12" height="5" rx="1" fill="currentColor" />
    </svg>
  );
}

export function GavelIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="8"
        y="36"
        width="26"
        height="9"
        rx="1.5"
        fill="currentColor"
        transform="rotate(-40 21 40.5)"
      />
      <rect
        x="26"
        y="10"
        width="20"
        height="8"
        rx="1.5"
        fill="currentColor"
        transform="rotate(-40 36 14)"
      />
      <rect x="10" y="48" width="44" height="7" rx="1.5" fill="currentColor" />
    </svg>
  );
}

export function PrisonBarsIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="10"
        y="12"
        width="44"
        height="40"
        rx="2"
        stroke="currentColor"
        strokeWidth="3"
      />
      <path
        d="M22 12v40M32 12v40M42 12v40M52 12v40"
        stroke="currentColor"
        strokeWidth="3"
      />
      <circle cx="32" cy="26" r="5" fill="currentColor" />
      <path
        d="M24 48c0-6.6 3.6-12 8-12s8 5.4 8 12"
        fill="currentColor"
      />
    </svg>
  );
}

export function MicrophoneIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect x="26" y="8" width="12" height="26" rx="6" fill="currentColor" />
      <path
        d="M18 30a14 14 0 0 0 28 0"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M32 44v8"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M22 52h20"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CommunityIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="32" cy="18" r="7" fill="currentColor" />
      <path
        d="M16 50c0-8.8 7.2-16 16-16s16 7.2 16 16"
        fill="currentColor"
      />
      <circle cx="14" cy="22" r="5.5" fill="currentColor" />
      <path
        d="M4 48c0-5.8 4.5-10.5 10-10.5"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <circle cx="50" cy="22" r="5.5" fill="currentColor" />
      <path
        d="M60 48c0-5.8-4.5-10.5-10-10.5"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function HandshakeIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M10 34 20 26l7 6 8-9 15 9v12l-9 7-9-5-9 5-13-9V34Z"
        fill="currentColor"
      />
      <path
        d="M14 30v16M30 26v20M46 30v16"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.25"
      />
    </svg>
  );
}

export function PlayIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle
        cx="32"
        cy="32"
        r="30"
        stroke="white"
        strokeWidth="2"
        fill="rgba(0,0,0,0.35)"
      />
      <path d="M26 20l20 12-20 12V20z" fill="white" />
    </svg>
  );
}

export function PlaySmallIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
      <path d="M4 3.5v9l8-4.5-8-4.5Z" fill="currentColor" />
    </svg>
  );
}

export function VolumeIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
      <path
        d="M3 6h2l3-2v8l-3-2H3V6Z"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="currentColor"
      />
      <path
        d="M11 5.5a3 3 0 0 1 0 5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function FullscreenIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
      <path
        d="M2.5 5.5V3.5h2M9.5 3.5h2v2M13.5 10.5v2h-2M6.5 13.5h-2v-2"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MenuIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M5 7h14M5 12h14M5 17h14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CloseIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="m7 7 10 10M17 7 7 17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
