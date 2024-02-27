import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Nation } from "./types";
import { isToday, isTomorrow, format } from "date-fns";

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

export function getDate(date: string) {
  const day = new Date(date);

  if (isToday(day)) {
    return "Today";
  } else if (isTomorrow(day)) {
    return "Tomorrow";
  } else {
    return format(day, "EEEE");
  }
}
