import { env } from "@/env";

const API_URL = env.NEXT_PUBLIC_API_URL;

export async function getEventsData() {
  const response = await fetch(`${API_URL}/events`);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const { data } = await response.json();

  return data;
}

export async function getNationData() {
  const response = await fetch(`${API_URL}/nations`);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const { data } = await response.json();

  return data;
}

export async function getThisWeeksEvents() {
  const response = await fetch(`${API_URL}/events/this-week`);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const { data } = await response.json();

  return data;
}
