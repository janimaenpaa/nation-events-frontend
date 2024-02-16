import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Nation } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getNationById(
  nations: Nation[],
  id: number,
): Nation | undefined {
  const nation = nations.find((nation) => nation.id === id);
  return nation;
}
