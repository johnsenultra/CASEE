import { format } from "date-fns";
import type { Appointment } from "./AppointmentCalendar";
import { Button } from "@/components/ui/button";
import { X, Calendar, User, Clock, FileText } from "lucide-react";

interface AppointmentModalProps {
  appointment: Appointment | null;
  isOpen: boolean;
  onClose: () => void;
  onStatusChange?: (id: string, status: Appointment["status"]) => void;
}

const statusLabels: Record<Appointment["status"], string> = {
  scheduled: "Scheduled",
  completed: "Completed",
  cancelled: "Cancelled",
  "no-show": "No Show",
};

const statusStyles: Record<Appointment["status"], string> = {
  scheduled: "bg-blue-100 text-blue-800",
  completed: "bg-green-100 text-green-800",
  cancelled: "bg-red-100 text-red-800",
  "no-show": "bg-amber-100 text-amber-800",
};

export default function AppointmentModal({
  appointment,
  isOpen,
  onClose,
  onStatusChange,
}: AppointmentModalProps) {
  if (!isOpen || !appointment) return null;

  const startDate = new Date(appointment.start);
  const endDate = new Date(appointment.end);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="bg-background relative z-10 w-full max-w-md rounded-lg p-6 shadow-lg">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">{appointment.title}</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="size-5" />
          </Button>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Calendar className="text-muted-foreground size-5" />
            <div>
              <p className="text-sm font-medium">Date</p>
              <p className="text-muted-foreground text-sm">
                {format(startDate, "EEEE, MMMM d, yyyy")}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Clock className="text-muted-foreground size-5" />
            <div>
              <p className="text-sm font-medium">Time</p>
              <p className="text-muted-foreground text-sm">
                {format(startDate, "h:mm a")} - {format(endDate, "h:mm a")}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <User className="text-muted-foreground size-5" />
            <div>
              <p className="text-sm font-medium">Student</p>
              <p className="text-muted-foreground text-sm">
                {appointment.studentName}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <User className="text-muted-foreground size-5" />
            <div>
              <p className="text-sm font-medium">Counselor</p>
              <p className="text-muted-foreground text-sm">
                {appointment.counselorName}
              </p>
            </div>
          </div>

          {appointment.notes && (
            <div className="flex items-start gap-3">
              <FileText className="text-muted-foreground size-5" />
              <div>
                <p className="text-sm font-medium">Notes</p>
                <p className="text-muted-foreground text-sm">
                  {appointment.notes}
                </p>
              </div>
            </div>
          )}

          <div className="flex items-center gap-3">
            <div className="size-5" />
            <div>
              <p className="text-sm font-medium">Status</p>
              <span
                className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${statusStyles[appointment.status]}`}
              >
                {statusLabels[appointment.status]}
              </span>
            </div>
          </div>
        </div>

        {onStatusChange && appointment.status === "scheduled" && (
          <div className="mt-6 flex gap-2">
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => onStatusChange(appointment.id, "completed")}
            >
              Mark Completed
            </Button>
            <Button
              variant="outline"
              className="flex-1 text-amber-600 hover:text-amber-700"
              onClick={() => onStatusChange(appointment.id, "no-show")}
            >
              No Show
            </Button>
            <Button
              variant="outline"
              className="text-destructive hover:text-destructive flex-1"
              onClick={() => onStatusChange(appointment.id, "cancelled")}
            >
              Cancel
            </Button>
          </div>
        )}

        <div className="mt-4">
          <Button className="w-full" onClick={onClose}>
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}
