import { useEffect, useRef, useState } from "react";

interface QuietImageProps {
  src: string;
  alt: string;
  testId?: string;
  className?: string;
  aspectClass?: string;
  fallbackTone?: "warm" | "river" | "stone";
}

const TONES: Record<string, string> = {
  warm: "linear-gradient(135deg, #DCD2BC 0%, #C8B898 60%, #A89878 100%)",
  river: "linear-gradient(135deg, #4D5E80 0%, #324669 70%, #243352 100%)",
  stone: "linear-gradient(135deg, #C8C2B3 0%, #A89F8A 100%)",
};

export default function QuietImage({
  src,
  alt,
  testId,
  className = "",
  aspectClass = "aspect-[4/5]",
  fallbackTone = "warm",
}: QuietImageProps) {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;
    if (el.complete && el.naturalWidth > 0) {
      setLoaded(true);
    } else if (el.complete && el.naturalWidth === 0) {
      setErrored(true);
    }
  }, []);

  return (
    <div
      data-testid={testId}
      className={`relative overflow-hidden bg-bone-deep ${aspectClass} ${className}`}
      style={
        errored
          ? { backgroundImage: TONES[fallbackTone], backgroundSize: "cover" }
          : undefined
      }
    >
      {!errored && (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          loading="eager"
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setErrored(true)}
          className={`absolute inset-0 w-full h-full object-cover img-warm transition-opacity duration-700 ease-out ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
      )}
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-ink/5" />
    </div>
  );
}
