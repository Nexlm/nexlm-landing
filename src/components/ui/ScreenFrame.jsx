import { cn } from '../../lib/cn.js';

/**
 * A real Nexlm app screenshot in a minimal browser frame.
 * `crop` sets the visible aspect ratio (top-aligned) so tall screens can be trimmed.
 */
export function ScreenFrame({ src, alt, url, crop, className, width = 1440, height = 900 }) {
  return (
    <figure className={cn('overflow-hidden rounded-lg border border-line bg-ground shadow-2xl shadow-black/60', className)}>
      <div className="flex items-center gap-1.5 border-b border-line bg-panel px-3.5 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        {url && <span className="ml-3 truncate rounded-full bg-ink px-3 py-0.5 font-mono text-[11px] text-moss">{url}</span>}
      </div>
      <div className="overflow-hidden" style={crop ? { aspectRatio: crop } : undefined}>
        <img src={src} alt={alt} width={width} height={height} loading="lazy" className="block w-full max-w-full" />
      </div>
    </figure>
  );
}
