import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
  if (inputs.length === 0) {
    return "";
  }

  return twMerge(clsx(inputs));
}
