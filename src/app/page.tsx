import Calendar from "@/components/Calendar";
import EventRow from "@/components/EventRow";
import { getEventsData, getNationData, getThisWeeksEvents } from "@/lib/api";

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
