"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

type LightboxImage = { src: string; alt: string };

type LightboxContextValue = {
  open: (image: LightboxImage) => void;
};

const LightboxContext = createContext<LightboxContextValue | null>(null);

/** Call inside any client component under <LightboxProvider> to open the modal. */
export function useLightbox() {
  const ctx = useContext(LightboxContext);
  if (!ctx) throw new Error("useLightbox must be used within <LightboxProvider>");
  return ctx;
}

const MIN_ZOOM = 1;
const MAX_ZOOM = 4;
const STEP = 0.5;

export function LightboxProvider({ children }: { children: ReactNode }) {
  const [image, setImage] = useState<LightboxImage | null>(null);
  const [zoom, setZoom] = useState(1);
  // Pan offset (px) applied when zoomed in.
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const drag = useRef<{ x: number; y: number; ox: number; oy: number } | null>(
    null,
  );
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  const open = useCallback((img: LightboxImage) => {
    setImage(img);
    setZoom(1);
    setOffset({ x: 0, y: 0 });
  }, []);

  const close = useCallback(() => setImage(null), []);

  const zoomBy = useCallback((delta: number) => {
    setZoom((z) => {
      const next = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, z + delta));
      if (next === MIN_ZOOM) setOffset({ x: 0, y: 0 });
      return next;
    });
  }, []);

  // Lock body scroll + wire Escape / arrow-zoom while open. Focus the close btn.
  useEffect(() => {
    if (!image) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "+" || e.key === "=") zoomBy(STEP);
      else if (e.key === "-") zoomBy(-STEP);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [image, close, zoomBy]);

  const onWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    zoomBy(e.deltaY < 0 ? STEP / 2 : -STEP / 2);
  };

  const onPointerDown = (e: React.PointerEvent) => {
    if (zoom <= 1) return;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    drag.current = { x: e.clientX, y: e.clientY, ox: offset.x, oy: offset.y };
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!drag.current) return;
    setOffset({
      x: drag.current.ox + (e.clientX - drag.current.x),
      y: drag.current.oy + (e.clientY - drag.current.y),
    });
  };
  const onPointerUp = () => {
    drag.current = null;
  };

  return (
    <LightboxContext.Provider value={{ open }}>
      {children}
      {image && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={image.alt}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/85 backdrop-blur-sm"
          onClick={close}
        >
          {/* Controls */}
          <div
            className="absolute right-4 top-4 z-10 flex items-center gap-2"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => zoomBy(-STEP)}
              disabled={zoom <= MIN_ZOOM}
              aria-label="Zoom out"
              className="grid h-10 w-10 place-items-center rounded-full bg-on-ink/10 text-on-ink transition-colors hover:bg-on-ink/20 disabled:opacity-40"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
                <path d="M3 9h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => zoomBy(STEP)}
              disabled={zoom >= MAX_ZOOM}
              aria-label="Zoom in"
              className="grid h-10 w-10 place-items-center rounded-full bg-on-ink/10 text-on-ink transition-colors hover:bg-on-ink/20 disabled:opacity-40"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
                <path d="M9 3v12M3 9h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </button>
            <button
              ref={closeBtnRef}
              type="button"
              onClick={close}
              aria-label="Close"
              className="grid h-10 w-10 place-items-center rounded-full bg-on-ink/10 text-on-ink transition-colors hover:bg-on-ink/20"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
                <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* Image stage. Uses a plain <img> so intrinsic size + zoom transforms
             are simple and predictable inside the modal. */}
          <div
            className="relative flex max-h-[90vh] max-w-[92vw] items-center justify-center overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            onWheel={onWheel}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image.src}
              alt={image.alt}
              draggable={false}
              className="max-h-[90vh] max-w-[92vw] select-none rounded-sm object-contain shadow-2xl transition-transform duration-150"
              style={{
                transform: `translate(${offset.x}px, ${offset.y}px) scale(${zoom})`,
                cursor: zoom > 1 ? "grab" : "zoom-in",
              }}
              onClick={() => zoom < MAX_ZOOM && zoomBy(STEP)}
            />
          </div>

          <p className="pointer-events-none absolute bottom-5 left-1/2 -translate-x-1/2 text-xs text-on-ink-muted">
            Scroll or use + / − to zoom · Esc to close
          </p>
        </div>
      )}
    </LightboxContext.Provider>
  );
}
