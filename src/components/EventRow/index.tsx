import { Event } from "@/lib/types";
import EventItem from "./EventItem";
import { Carousel, CarouselContent } from "../ui/carousel";

interface EventRowProps {
  events: Event[];
}

export default function EventRow({ events }: EventRowProps) {
  const bgColors = ["bg-red-500", "bg-blue-500", "bg-green-500"];
  return (
    <div className="mb-8 flex flex-col gap-4">
      <h3 className="text-lg font-bold">Events this week</h3>
      <Carousel>
        <CarouselContent>
          {events.map((event, index) => (
            <EventItem
              key={event.id}
              event={event}
              className={`${bgColors[index % bgColors.length]}`}
            />
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
