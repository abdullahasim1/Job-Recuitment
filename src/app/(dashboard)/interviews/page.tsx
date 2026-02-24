"use client";

import { useState } from "react";
import { MoreVertical, Clock, MapPin, Copy, FileText, MessageSquare } from "lucide-react";
import Link from "next/link";

const InterviewsPage = () => {
  const [openMenuId, setOpenMenuId] = useState<number | null>(null);

  const toggleMenu = (id: number) => {
    if (openMenuId === id) setOpenMenuId(null);
    else setOpenMenuId(id);
  };

  const interviews = [
    {
      id: 1,
      title: "Develop a new website page for product testimonials",
      meetingId: "763 8965 3605",
      dateMonth: "Mon",
      dateDay: "09",
      time: "12:00PM - 03:00PM",
      location: "Ungaran Barat",
      locationDetail: "Semarang Regency, Central java",
      remainingTime: "24:50:29",
      status: "Remaining Time",
      showButtons: false,
    },
    {
      id: 2,
      title: "Develop a new website page for product testimonials",
      meetingId: "763 8965 3605",
      dateMonth: "Mon",
      dateDay: "09",
      time: "12:00PM - 03:00PM",
      location: "Ungaran Barat",
      locationDetail: "Semarang Regency, Central java",
      remainingTime: "24:50:29",
      status: "Remaining Time",
      showButtons: false,
    },
    {
      id: 3,
      title: "Develop a new website page for product testimonials",
      meetingId: "763 8965 3605",
      dateMonth: "Mon",
      dateDay: "09",
      time: "12:00PM - 03:00PM",
      location: "Ungaran Barat",
      locationDetail: "Semarang Regency, Central java",
      remainingTime: "On Going",
      status: "Remaining Time",
      showButtons: true,
    },
  ];

  return (
    <div className="space-y-6 pb-10" onClick={() => setOpenMenuId(null)}>
      <div>
        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
          {interviews.map((interview) => (
            <div
              key={interview.id}
              className="border-light-gray relative flex flex-col rounded-[20px] border bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              onClick={(e) => e.stopPropagation()}
            >
              {/* --- TOP SECTION --- */}
              <div>
                <div className="relative mb-6 flex items-center justify-between">
                  {/* Time Badge */}
                  <div className="bg-primary-light flex items-center gap-2 rounded-full px-3 py-1.5">
                    <Clock size={14} className="text-primary" />
                    <span className="text-primary text-[12px] font-semibold">{interview.time}</span>
                  </div>

                  {/* MENU BUTTON */}
                  <button
                    onClick={() => toggleMenu(interview.id)}
                    className="text-muted flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:bg-gray-50"
                  >
                    <MoreVertical size={18} />
                  </button>

                  {/* DROPDOWN MENU */}
                  {openMenuId === interview.id && (
                    <div className="border-light-gray animate-in fade-in zoom-in-95 absolute top-10 right-0 z-20 w-[170px] overflow-hidden rounded-[10px] border bg-white py-1 shadow-xl duration-100">
                      {/* Option 1: View Summary */}
                      <Link
                        href="/interviews/feedback-summary"
                        className="text-heading hover:bg-primary-light hover:text-primary flex items-center gap-2 px-4 py-2.5 text-[13px] transition-colors"
                      >
                        <FileText size={16} />
                        View Summary
                      </Link>

                      {/* Option 2: Give Feedback */}
                      <Link
                        href="/interviews/feedback"
                        className="text-heading hover:bg-primary-light hover:text-primary flex items-center gap-2 px-4 py-2.5 text-[13px] transition-colors"
                      >
                        <MessageSquare size={16} />
                        Give Feedback
                      </Link>
                    </div>
                  )}
                </div>

                {/* Body: Date & Title */}
                <div className="mb-8 flex gap-5">
                  <div className="border-light-gray flex h-[65px] w-[55px] flex-col items-center justify-center rounded-2xl border bg-white shadow-sm">
                    <span className="text-primary text-[11px] font-semibold uppercase">
                      {interview.dateMonth}
                    </span>
                    <span className="text-heading text-[20px] leading-none font-bold">
                      {interview.dateDay}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-heading line-clamp-2 text-[15px] leading-snug font-bold">
                      {interview.title}
                    </h3>
                    <p className="text-muted mt-2 text-[12px] font-medium">
                      Meeting ID:{" "}
                      <span className="text-heading font-bold">{interview.meetingId}</span>
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="mb-5 h-px w-full bg-gray-100"></div>

                {/* Footer: Location & Timer */}
                <div className="flex items-center justify-between">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary-light text-primary flex h-8 w-8 items-center justify-center rounded-full">
                      <MapPin size={16} />
                    </div>
                    <div>
                      <h4 className="text-heading text-[13px] font-bold">{interview.location}</h4>
                      <p className="text-muted-light text-[10px]">{interview.locationDetail}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="h-8 w-px bg-gray-200"></div>
                    <div className="text-right">
                      <p className="text-muted-light text-[10px] font-medium">{interview.status}</p>
                      <p className="text-success text-[16px] font-bold">
                        {interview.remainingTime}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* --- BOTTOM BUTTONS --- */}
              {interview.showButtons && (
                <div className="mt-8 flex gap-4 pt-2">
                  {/* Copy Link Button */}
                  <button className="border-primary text-primary hover:bg-primary-light flex h-[50px] w-full flex-1 items-center justify-center gap-2 rounded-2xl border-[1.5px] text-[14px] font-bold transition-colors">
                    <Copy size={16} /> Copy Link
                  </button>

                  {/* Join Meeting Button */}
                  <button className="bg-primary hover:bg-primary-hover h-[50px] flex-1 rounded-2xl text-[14px] font-bold text-white shadow-lg shadow-indigo-100 transition-colors">
                    Join Meeting
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InterviewsPage;
