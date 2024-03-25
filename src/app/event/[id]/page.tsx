import { getEventData } from "@/lib/api";
import { Event } from "@/lib/types";

type Params = {
  params: { id: string };
};

const getDescription = (event: Event) => {
  if (event.type === "kide") {
    const json = JSON.parse(event.description!);
    return <p dangerouslySetInnerHTML={{ __html: json.fi || json.en }}></p>;
  }

  return <p dangerouslySetInnerHTML={{ __html: event.description! }}></p>;
};

export default async function EventPage({ params: { id } }: Params) {
  const event = await getEventData(id);

  return (
    <div className="container flex max-w-[800px] flex-col gap-4">
      <h2 className="font-bold">{event.title}</h2>
      {getDescription(event)}
      <a href={event.url} className="underline">
        {event.url}
      </a>
    </div>
  );
}
