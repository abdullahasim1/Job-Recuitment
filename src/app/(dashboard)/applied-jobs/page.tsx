"use client";

import { MoreVertical } from "lucide-react";

const AppliedJobsPage = () => {
  const appliedJobs = Array(9).fill({
    title: "Mental Health Practitioner",
    location: "Minneapolis, MN",
    description:
      "A rewarding opportunity to provide direct support and rehabilitative skills training to individuals with mental illness, helping them achieve their recovery goals.",
    dateApplied: "2 days ago",
  });

  return (
    <div className="space-y-6 pb-10">
      {/* Page Content */}
      <div>
        {/* 1. CARDS GRID */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {appliedJobs.map((job, index) => (
            <div
              key={index}
              className="relative flex h-[200px] flex-col justify-between rounded-[14px] border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              {/* Card Header */}
              <div className="flex items-start justify-between">
                <div>
                  {/* Title */}
                  <h3 className="text-heading line-clamp-1 w-[230px] text-[16px] leading-tight font-bold">
                    {job.title}
                  </h3>

                  {/* Location */}
                  <p className="mt-1 text-[12px] font-medium text-gray-500">{job.location}</p>
                </div>

                {/* Menu Icon */}
                <button className="text-gray-400 transition-colors hover:text-gray-600">
                  <MoreVertical size={18} />
                </button>
              </div>

              {/* Description */}
              <p className="mt-3 line-clamp-4 text-justify text-[12px] leading-5 text-gray-500 opacity-90">
                {job.description}
              </p>

              {/* <div className="mt-4">
                <span className="rounded-full bg-green-50 px-3 py-1 text-[11px] font-semibold text-green-600">
                  Applied
                </span>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppliedJobsPage;
