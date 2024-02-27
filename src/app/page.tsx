import Calendar from "@/components/Calendar";
import EventRow from "@/components/EventRow";
import { env } from "@/env";

const API_URL = env.NEXT_PUBLIC_API_URL;

export default async function HomePage() {
  const events = await getEventsData();
  const nations = await getNationData();
  const thisWeeksEvents = await getThisWeeksEvents();

  return (
    <div className="container flex flex-col justify-center px-4">
      <EventRow events={thisWeeksEvents} />
      <Calendar events={events} nations={nations} />
    </div>
  );
}

async function getEventsData() {
  const response = await fetch(`${API_URL}/events`);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const { data } = await response.json();

  return data;
}

async function getNationData() {
  const response = await fetch(`${API_URL}/nations`);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const { data } = await response.json();

  return data;
}

async function getThisWeeksEvents() {
  const response = await fetch(`${API_URL}/events/this-week`);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const { data } = await response.json();

  return data;
}