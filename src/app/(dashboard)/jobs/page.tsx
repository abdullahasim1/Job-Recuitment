"use client";

import { Search, MapPin, Briefcase, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/Button";

const JobsPage = () => {
  const jobs = Array(9).fill({
    title: "Mental Health Practitioner",
    location: "Minneapolis, MN",
    description:
      "A rewarding opportunity to provide direct support and rehabilitative skills training to individuals with mental illness, helping them achieve their recovery goals.",
  });

  return (
    <div className="space-y-6 pb-10">
      {/* 1. SEARCH & FILTER SECTION */}
      <div className="rounded-2xl bg-white p-4 shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          {/* Search Keyword */}
          <div className="relative flex-1">
            <Search className="text-muted absolute top-1/2 left-3 -translate-y-1/2" size={18} />
            <input
              type="text"
              placeholder="Search by keywords"
              className="bg-secondary placeholder:text-muted focus:border-primary h-11 w-full rounded-xl border border-gray-100 pr-4 pl-10 text-sm transition-colors outline-none"
            />
          </div>

          {/* Location Dropdown */}
          <div className="relative flex-1">
            <div className="text-muted pointer-events-none absolute top-1/2 left-3 -translate-y-1/2">
              <MapPin size={18} />
            </div>
            <select
              aria-label="Filter by Location"
              className="bg-secondary text-muted focus:border-primary h-11 w-full cursor-pointer appearance-none rounded-xl border border-gray-100 pr-4 pl-10 text-sm transition-colors outline-none"
            >
              <option>Location</option>
              <option>Minneapolis, MN</option>
              <option>New York, NY</option>
            </select>
          </div>

          {/* Job Type Dropdown */}
          <div className="relative flex-1">
            <div className="text-muted pointer-events-none absolute top-1/2 left-3 -translate-y-1/2">
              <Briefcase size={18} />
            </div>
            <select
              aria-label="Filter by Job Type"
              className="bg-secondary text-muted focus:border-primary h-11 w-full cursor-pointer appearance-none rounded-xl border border-gray-100 pr-4 pl-10 text-sm transition-colors outline-none"
            >
              <option>Job Type</option>
              <option>Full Time</option>
              <option>Part Time</option>
            </select>
          </div>

          {/* Department Dropdown */}
          <div className="flex-1">
            <select
              aria-label="Filter by Department"
              className="bg-secondary text-muted focus:border-primary h-11 w-full cursor-pointer rounded-xl border border-gray-100 px-4 text-sm transition-colors outline-none"
            >
              <option>Department</option>
              <option>Health</option>
              <option>Engineering</option>
              <option>Design</option>
            </select>
          </div>

          {/*  SEARCH BUTTON (Generic) */}
          <Button variant="primary" size="md" className="w-full shadow-md md:w-auto">
            Search
          </Button>
        </div>
      </div>

      {/* 2. JOB CARDS GRID */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="flex flex-col justify-between rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <div>
              <h3 className="text-heading text-[16px] leading-tight font-bold">{job.title}</h3>
              <p className="text-muted mt-1 text-[12px]">{job.location}</p>
              <p className="text-muted mt-4 line-clamp-3 text-[12px] leading-5 opacity-90">
                {job.description}
              </p>
            </div>

            <div className="mt-6">
              <Link href="/jobs/apply">
                {/*  APPLY BUTTON (Generic) */}
                <Button variant="primary" size="sm" className="w-[100px] shadow-sm">
                  Apply
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* 3. PAGINATION */}
      <div className="flex flex-col items-center justify-between gap-4 pt-4 sm:flex-row">
        <p className="text-muted text-sm">Showing 1 to 9 of 9 entries</p>

        <div className="flex items-center gap-2">
          <button
            aria-label="Previous Page"
            className="text-muted flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 transition-colors hover:bg-gray-50"
          >
            <ChevronLeft size={16} />
          </button>

          <button className="bg-primary flex h-8 w-8 items-center justify-center rounded-lg text-sm font-semibold text-white shadow-sm transition-colors">
            1
          </button>

          <button className="text-muted flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-sm font-medium transition-colors hover:bg-gray-50">
            2
          </button>

          <button className="text-muted flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-sm font-medium transition-colors hover:bg-gray-50">
            3
          </button>

          <button
            aria-label="Next Page"
            className="text-muted flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 transition-colors hover:bg-gray-50"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobsPage;
