"use client";

import { MoreVertical, Clock, MapPin } from "lucide-react";
import Image from "next/image";
import Button from "@/components/ui/Button";

const HomePage = () => {
  const applications = [
    {
      id: 1,
      title: "Mental Health Practitioner",
      location: "Minneapolis, MN",
      description:
        "A rewarding opportunity to provide direct support and rehabilitative skills training to individuals with mental illness, helping them achieve their recovery goals.",
    },
    {
      id: 2,
      title: "Mental Health Practitioner",
      location: "Minneapolis, MN",
      description:
        "A rewarding opportunity to provide direct support and rehabilitative skills training to individuals with mental illness, helping them achieve their recovery goals.",
    },
    {
      id: 3,
      title: "Mental Health Practitioner",
      location: "Minneapolis, MN",
      description:
        "A rewarding opportunity to provide direct support and rehabilitative skills training to individuals with mental illness, helping them achieve their recovery goals.",
    },
  ];

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
      remainingTime: "24:50:29",
      status: "Remaining Time",
      showButtons: true,
    },
  ];

  return (
    <div className="space-y-8 pb-10">
      {/* 1. WELCOME BANNER */}
      <div className="w-full">
        <Image
          src="/banner.png"
          alt="Welcome Banner"
          width={1166}
          height={208}
          className="h-auto w-full rounded-3xl object-cover shadow-lg"
          priority
        />
      </div>

      {/* 2. MY APPLICATIONS */}
      <div>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-heading text-xl font-bold">My Applications</h2>
          <button className="text-primary text-sm font-medium hover:opacity-80">View All</button>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {applications.map((app) => (
            <div
              key={app.id}
              className="rounded-xl border border-gray-100 bg-white p-6 transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-heading mb-1 text-base font-semibold">{app.title}</h3>
                  <p className="text-muted-66 mb-3 text-xs">{app.location}</p>
                </div>
                <button className="text-muted-19 hover:opacity-70">
                  <MoreVertical className="h-5 w-5" />
                </button>
              </div>
              <p className="text-description text-xs leading-5">{app.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 3. MY INTERVIEWS (FIXED GRID) */}
      <div>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-heading text-xl font-bold">My Interviews</h2>
          <button className="text-primary text-sm font-medium hover:opacity-80">View All</button>
        </div>

        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
          {interviews.map((interview) => (
            <div
              key={interview.id}
              className="flex flex-col rounded-[20px] border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              {/* Card Content */}
              <div>
                {/* Top Row */}
                <div className="mb-6 flex items-center justify-between">
                  <div className="bg-primary-light flex items-center gap-2 rounded-full px-3 py-1.5">
                    <Clock size={14} className="text-primary" />
                    <span className="text-primary text-[12px] font-semibold">{interview.time}</span>
                  </div>
                  <button className="flex h-8 w-8 items-center justify-center rounded-full text-gray-400 hover:bg-gray-50">
                    <MoreVertical size={18} />
                  </button>
                </div>

                {/* Middle Row */}
                <div className="mb-8 flex gap-5">
                  <div className="flex h-[65px] w-[55px] flex-col items-center justify-center rounded-2xl border border-gray-100 bg-white shadow-sm">
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
                    <p className="mt-2 text-[12px] font-medium text-gray-500">
                      Meeting ID:{" "}
                      <span className="text-heading font-bold">{interview.meetingId}</span>
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="mb-5 h-px w-full bg-gray-100"></div>

                {/* Bottom Row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary-light text-primary flex h-8 w-8 items-center justify-center rounded-full">
                      <MapPin size={16} />
                    </div>
                    <div>
                      <h4 className="text-heading text-[13px] font-bold">{interview.location}</h4>
                      <p className="text-[10px] text-gray-400">{interview.locationDetail}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="h-8 w-px bg-gray-200"></div>
                    <div className="text-right">
                      <p className="text-[10px] font-medium text-gray-400">{interview.status}</p>
                      <p className="text-success text-[16px] font-bold">
                        {interview.remainingTime}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {interview.showButtons && (
                <div className="mt-8 flex gap-4 pt-2">
                  <Button
                    variant="outline"
                    size="lg"
                    fullWidth
                    className="h-14 rounded-2xl border-[1.5px] text-[15px] shadow-lg shadow-indigo-100"
                  >
                    Copy Link
                  </Button>
                  <Button
                    variant="primary"
                    size="lg"
                    fullWidth
                    className="hover:bg-primary-hover h-14 rounded-2xl text-[15px] shadow-lg shadow-indigo-100"
                  >
                    Join Meeting
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
