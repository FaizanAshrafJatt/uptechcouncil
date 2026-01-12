import { Card } from "./Card";
import { Calendar, MapPin } from "lucide-react";

const events = [
  {
    title: "TBD",
    date: "TBD",
    location: "TBD",
  },
  {
    title: "TBD",
    date: "TBD",
    location: "TBD",
  },
  {
    title: "TBD",
    date: "TBD",
    location: "TBD",
  },
];

export function EventPreview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {events.map((event, index) => (
        <Card key={index} hover>
          <div className="aspect-video bg-gradient-to-br from-[#1E40AF]/10 to-[#00B140]/10 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-5" />
            <div className="text-center relative z-10">
              <Calendar className="w-8 h-8 text-[#1E40AF]/50 mx-auto mb-2" />
              <span className="text-xs font-medium text-[rgba(11,18,32,0.68)]">Event Image</span>
            </div>
          </div>
          <h3 className="font-heading font-semibold text-lg mb-3 text-[#0B1220]">{event.title}</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-[rgba(11,18,32,0.68)]">
              <Calendar className="w-4 h-4" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[rgba(11,18,32,0.68)]">
              <MapPin className="w-4 h-4" />
              <span>{event.location}</span>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}