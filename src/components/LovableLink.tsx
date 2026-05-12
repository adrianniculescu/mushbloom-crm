import React from 'react';

export const LOVABLE_AFFILIATE_URL = 'https://lovable.dev/invite/DW2DAYV';

/**
 * Renders the word "Lovable" as an affiliate link.
 * Used on marketing pages where we want at least the first/prominent mention linked.
 */
export const LovableLink: React.FC<{ children?: React.ReactNode; className?: string }> = ({
  children = 'Lovable',
  className = 'text-blue-400 hover:text-blue-300 underline underline-offset-2',
}) => (
  <a
    href={LOVABLE_AFFILIATE_URL}
    target="_blank"
    rel="noopener sponsored"
    className={className}
  >
    {children}
  </a>
);

/**
 * Splits a plain text string and wraps every occurrence of "Lovable" with an
 * affiliate link. Returns a React node array safe to render in <p> / <li>.
 */
export const linkifyLovable = (text: string): React.ReactNode => {
  if (!text || !text.includes('Lovable')) return text;
  const parts = text.split(/(Lovable)/g);
  return parts.map((part, i) =>
    part === 'Lovable' ? (
      <a
        key={i}
        href={LOVABLE_AFFILIATE_URL}
        target="_blank"
        rel="noopener sponsored"
        className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
      >
        Lovable
      </a>
    ) : (
      <React.Fragment key={i}>{part}</React.Fragment>
    )
  );
};
