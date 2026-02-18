import { useState } from "react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";

interface NewAppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (appointment: NewAppointmentData) => void;
  initialStart?: Date;
  initialEnd?: Date;
}

export interface NewAppointmentData {
  title: string;
  start: Date;
  end: Date;
  studentName: string;
  counselorName: string;
  notes?: string;
}

export default function NewAppointmentModal({
  isOpen,
  onClose,
  onSave,
  initialStart,
  initialEnd,
}: NewAppointmentModalProps) {
  const [formData, setFormData] = useState<NewAppointmentData>({
    title: "",
    start: initialStart || new Date(),
    end: initialEnd || new Date(),
    studentName: "",
    counselorName: "",
    notes: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
    setFormData({
      title: "",
      start: new Date(),
      end: new Date(),
      studentName: "",
      counselorName: "",
      notes: "",
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="bg-background relative z-10 w-full max-w-md rounded-lg p-6 shadow-lg">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">New Appointment</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="size-5" />
          </Button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium">Title</label>
            <Input
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              placeholder="Counseling Session"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-1 block text-sm font-medium">
                Start Date & Time
              </label>
              <Input
                type="datetime-local"
                value={format(formData.start, "yyyy-MM-dd'T'HH:mm")}
                onChange={(e) =>
                  setFormData({ ...formData, start: new Date(e.target.value) })
                }
                required
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">
                End Date & Time
              </label>
              <Input
                type="datetime-local"
                value={format(formData.end, "yyyy-MM-dd'T'HH:mm")}
                onChange={(e) =>
                  setFormData({ ...formData, end: new Date(e.target.value) })
                }
                required
              />
            </div>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">
              Student Name
            </label>
            <Input
              value={formData.studentName}
              onChange={(e) =>
                setFormData({ ...formData, studentName: e.target.value })
              }
              placeholder="John Doe"
              required
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">
              Counselor Name
            </label>
            <Input
              value={formData.counselorName}
              onChange={(e) =>
                setFormData({ ...formData, counselorName: e.target.value })
              }
              placeholder="Dr. Smith"
              required
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">
              Notes (Optional)
            </label>
            <textarea
              value={formData.notes}
              onChange={(e) =>
                setFormData({ ...formData, notes: e.target.value })
              }
              className="border-input bg-background h-20 w-full rounded-md border px-3 py-2 text-sm"
              placeholder="Additional notes..."
            />
          </div>

          <div className="flex gap-2 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button type="submit" className="flex-1">
              Create Appointment
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
