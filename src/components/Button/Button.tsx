import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";
import { ReactNode } from "react";

export interface ButtonProps {
  asChild?: boolean;
  children: ReactNode;
}

export function Button({ children, asChild }: ButtonProps) {
  return (
    <button
      className={clsx(
        "py-4 px-3 bg-cyan-500 rounded outline-none font-semibold text-black text-sm w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-white",
        {}
      )}
    >
      {children}
    </button>
  );
}
