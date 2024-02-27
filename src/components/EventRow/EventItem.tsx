import { Event } from "@/lib/types";
import { cn, getDate } from "@/lib/utils";
import { CarouselItem } from "../ui/carousel";
import Link from "next/link";

interface EventItemProps {
  event: Event;
  className: string;
}

export default function EventItem({ event, className }: EventItemProps) {
  const date = getDate(event.startTime);

  return (
    <CarouselItem className="basis-1/3 sm:basis-1/4 lg:basis-1/5">
      <div
        className={cn("h-[60px] rounded-md  bg-destructive px-2", className)}
      >
        <span className="text-xs">{date}</span>
        <Link
          href={`/event/${event.id}`}
          className="line-clamp-2 text-xs font-bold"
        >
          {event.title}
        </Link>
      </div>
    </CarouselItem>
  );
}
