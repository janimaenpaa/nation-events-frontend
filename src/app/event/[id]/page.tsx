import { env } from "@/env";
import { Event } from "@/lib/types";

type Params = {
  params: { id: string };
};

export default async function EventPage({ params: { id } }: Params) {
  const event = await getData(id);

  return (
    <div className="container flex max-w-[800px] flex-col gap-4">
      <h2 className="font-bold">{event.name}</h2>
      <p>{event.description}</p>
      <a href={event.url} className="underline">
        {event.url}
      </a>
    </div>
  );
}

async function getData(id: string): Promise<Event> {
  const response = await fetch(`${env.NEXT_PUBLIC_API_URL}/events/${id}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const { data } = await response.json();

  return data;
}
