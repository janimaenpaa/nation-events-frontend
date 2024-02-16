import Calendar from "@/components/Calendar";
import { env } from "@/env";

const API_URL = env.NEXT_PUBLIC_API_URL;

export default async function HomePage() {
  const events = await getEventsData();
  const nations = await getNationData();

  return (
    <div className="container flex flex-col items-center justify-center px-4 py-16">
      <Calendar events={events} nations={nations} />
    </div>
  );
}

async function getEventsData() {
  const response = await fetch(`${API_URL}/events`);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
}

async function getNationData() {
  const response = await fetch(`${API_URL}/nations`);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
}
