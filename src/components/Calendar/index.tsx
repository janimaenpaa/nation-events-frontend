"use client";

import { useRouter } from "next/navigation";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import enGbLocale from "@fullcalendar/core/locales/en-gb";
import { Event, Nation } from "@/lib/types";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { TooltipPortal } from "@radix-ui/react-tooltip";
import { getNationById } from "@/lib/utils";

interface CalendarProps {
  events: Event[];
  nations: Nation[];
}

export default function Calendar({ events, nations }: CalendarProps) {
  const router = useRouter();

  const eventsFormatted = events.map((event) => {
    return {
      ...event,
      start: new Date(event.startTime),
      end: new Date(event.endTime),
      id: event.id.toString(),
      url: `/event/${event.id}`,
      allDay: true,
    };
  });

  const handleEventClick = (clickInfo: any) => {
    clickInfo.jsEvent.preventDefault();
    const eventId = clickInfo.event.id;

    router.push(`/event/${eventId}`);
  };

  const renderEventContent = (eventInfo: any) => {
    const nationId = eventInfo?.event?.extendedProps?.nationId;
    const nation = getNationById(nations, nationId);

    return (
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger>
            <div className="h-full p-1">
              <p>
                <b>{nation?.abbreviation}</b>: {eventInfo.event.title}
              </p>
            </div>
          </TooltipTrigger>
          <TooltipPortal>
            <TooltipContent>
              <div>
                <p className="font-bold">{nation?.name}</p>
                <p className="font-medium">{eventInfo.event.title}</p>
              </div>
            </TooltipContent>
          </TooltipPortal>
        </Tooltip>
      </TooltipProvider>
    );
  };

  return (
    <div className="w-full">
      <FullCalendar
        plugins={[dayGridPlugin]}
        headerToolbar={{
          left: "",
          center: "title",
          right: "prev,next",
        }}
        initialView="dayGridMonth"
        events={eventsFormatted}
        fixedWeekCount={false}
        height={"auto"}
        eventClick={handleEventClick}
        locale={enGbLocale}
        eventContent={renderEventContent}
      />
    </div>
  );
}
