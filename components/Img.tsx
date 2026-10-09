type Props = {
  /** Base name in /public/assets — expects `<name>-800.webp` and `<name>-1600.webp`. */
  name: string;
  alt?: string;
  sizes?: string;
  priority?: boolean;
  width?: number;
  height?: number;
  className?: string;
};

/** Responsive WebP image using the pre-generated 800/1600 variants. */
export default function Img({
  name,
  alt = "",
  sizes = "(min-width:1024px) 50vw, 100vw",
  priority,
  width = 800,
  height = 533,
  className,
}: Props) {
  return (
    <img
      className={className}
      src={`/assets/${name}-800.webp`}
      srcSet={`/assets/${name}-800.webp 800w, /assets/${name}-1600.webp 1600w`}
      sizes={sizes}
      alt={alt}
      width={width}
      height={height}
      {...(priority ? { fetchPriority: "high" as const } : { loading: "lazy" as const, decoding: "async" as const })}
    />
  );
}
