import type { ReactNode } from "react";

type AnimateInProps = {
  children: ReactNode;
  className?: string;
  delay?: 0 | 1 | 2 | 3 | 4 | 5;
  id?: string;
};

const delayClasses = {
  0: "",
  1: "animate-in-delay-1",
  2: "animate-in-delay-2",
  3: "animate-in-delay-3",
  4: "animate-in-delay-4",
  5: "animate-in-delay-5",
} as const;

export default function AnimateIn({
  children,
  className = "",
  delay = 0,
  id,
}: AnimateInProps) {
  const classes = ["animate-in", delayClasses[delay], className]
    .filter(Boolean)
    .join(" ");

  return (
    <div id={id} className={classes}>
      {children}
    </div>
  );
}
