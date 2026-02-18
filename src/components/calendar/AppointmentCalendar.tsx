import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import type { EventClickArg, DateSelectArg } from "@fullcalendar/core";
import { useState } from "react";

export interface Appointment {
  id: string;
  title: string;
  start: Date | string;
  end: Date | string;
  studentName: string;
  counselorName: string;
  status: "scheduled" | "completed" | "cancelled" | "no-show";
  notes?: string;
}

interface AppointmentCalendarProps {
  appointments: Appointment[];
  onEventClick?: (appointment: Appointment) => void;
  onDateSelect?: (start: Date, end: Date) => void;
}

const statusColors: Record<Appointment["status"], string> = {
  scheduled: "#3b82f6", // blue
  completed: "#22c55e", // green
  cancelled: "#ef4444", // red
  "no-show": "#f59e0b", // amber
};

export default function AppointmentCalendar({
  appointments,
  onEventClick,
  onDateSelect,
}: AppointmentCalendarProps) {
  const [currentView, setCurrentView] = useState<string>("dayGridMonth");

  const events = appointments.map((apt) => ({
    id: apt.id,
    title: apt.title,
    start: apt.start,
    end: apt.end,
    backgroundColor: statusColors[apt.status],
    borderColor: statusColors[apt.status],
    extendedProps: {
      studentName: apt.studentName,
      counselorName: apt.counselorName,
      status: apt.status,
      notes: apt.notes,
    },
  }));

  const handleEventClick = (info: EventClickArg) => {
    const appointment = appointments.find((apt) => apt.id === info.event.id);
    if (appointment && onEventClick) {
      onEventClick(appointment);
    }
  };

  const handleDateSelect = (info: DateSelectArg) => {
    if (onDateSelect) {
      onDateSelect(info.start, info.end);
    }
  };

  return (
    <div className="bg-card rounded-lg border p-4">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={currentView}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        events={events}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={3}
        weekends={true}
        eventClick={handleEventClick}
        select={handleDateSelect}
        height="auto"
        eventDisplay="block"
        eventTimeFormat={{
          hour: "numeric",
          minute: "2-digit",
          meridiem: "short",
        }}
        slotMinTime="07:00:00"
        slotMaxTime="19:00:00"
        businessHours={{
          daysOfWeek: [1, 2, 3, 4, 5],
          startTime: "08:00",
          endTime: "17:00",
        }}
        nowIndicator={true}
        viewDidMount={(info) => setCurrentView(info.view.type)}
      />
    </div>
  );
}
