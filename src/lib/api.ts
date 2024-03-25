import { env } from "@/env";
import { Event, Nation } from "./types";

const API_URL = env.NEXT_PUBLIC_API_URL;

export async function getEventsData(): Promise<Event[]> {
  const response = await fetch(`${API_URL}/events`, { cache: "no-store" });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const { data } = await response.json();

  return data;
}

export async function getNationData(): Promise<Nation[]> {
  const response = await fetch(`${API_URL}/nations`);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const { data } = await response.json();

  return data;
}

export async function getThisWeeksEvents(): Promise<Event[]>{
  const response = await fetch(`${API_URL}/events/this-week`);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const { data } = await response.json();

  return data;
}

export async function getEventData(id: string): Promise<Event> {
    const response = await fetch(`${env.NEXT_PUBLIC_API_URL}/events/${id}`, {
      cache: "no-store",
    });
  
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
  
    const { data } = await response.json();
  
    return data;
  }
  