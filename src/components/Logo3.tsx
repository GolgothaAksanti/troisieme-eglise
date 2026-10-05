interface Props {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const sizes = {
  sm: "h-8 w-8 text-3xl",
  md: "h-10 w-10 text-4xl",
  lg: "h-14 w-14 text-5xl",
  xl: "h-20 w-20 text-7xl",
};

export default function Logo3({ size = "md", className = "" }: Props) {
  return (
    <span
      className={`inline-flex items-center justify-center font-[family-name:var(--font-cormorant)] font-bold leading-none text-green-mid select-none ${sizes[size]} ${className}`}
      aria-hidden="true"
    >
      3
    </span>
  );
}
