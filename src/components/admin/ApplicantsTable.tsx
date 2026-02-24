"use client";

import { ChevronLeft, ChevronRight, MoreVertical, ArrowUpDown } from "lucide-react";
import { useRouter } from "next/navigation";

// Types
export interface Applicant {
  id: number;
  name: string;
  jobAppliedFor: string;
  status: "New" | "Interviewing" | "Hired" | "Rejected";
  submissionDate: string;
}

interface ApplicantsTableProps {
  data: Applicant[];
  currentPage: number;
  onPageChange: (page: number) => void;
}

const statusStyles = {
  New: "bg-[var(--status-new-bg)] text-[var(--status-new-text)]",
  Interviewing: "bg-[var(--status-interview-bg)] text-[var(--status-interview-text)]",
  Hired: "bg-[var(--status-hired-bg)] text-[var(--status-hired-text)]",
  Rejected: "bg-[var(--status-rejected-bg)] text-[var(--status-rejected-text)]",
};

export const ApplicantsTable = ({ data, currentPage, onPageChange }: ApplicantsTableProps) => {
  const router = useRouter();

  // Row click handler
  const handleRowClick = (id: number) => {
    router.push(`/admin/applicants/${id}`);
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-(--table-border) bg-white shadow-sm">
      {/* Table Header */}
      <div className="border-b border-(--table-border) bg-(--table-header-bg) px-6 py-4">
        <div className="grid grid-cols-[1.5fr_1.5fr_1fr_1fr_0.5fr] items-center gap-4">
          {["Name", "Job Applied For", "Status", "Submission Date", "Action"].map((header, idx) => (
            <div key={idx} className={`flex items-center gap-2 ${idx === 5 ? "justify-end" : ""}`}>
              <span className="text-heading text-[13px] font-semibold tracking-wide uppercase opacity-70">
                {header}
              </span>
              {idx !== 5 && (
                <ArrowUpDown className="text-muted hover:text-primary h-3 w-3 cursor-pointer" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Table Rows */}
      <div className="divide-y divide-(--table-border)">
        {data.map((applicant) => (
          <div
            key={applicant.id}
            onClick={() => handleRowClick(applicant.id)}
            className="cursor-pointer px-6 py-4 transition-colors hover:bg-gray-50/50"
          >
            <div className="grid grid-cols-[1.5fr_1.5fr_1fr_1fr_0.5fr] items-center gap-4">
              {/* Name */}
              <span className="text-heading text-[14px] font-medium">{applicant.name}</span>

              {/* Job */}
              <span className="text-[14px] text-(--text-row)">{applicant.jobAppliedFor}</span>

              {/* Status Badge */}
              <div className="flex">
                <span
                  className={`inline-flex h-[30px] items-center justify-center rounded-lg px-4 text-[12px] font-semibold ${statusStyles[applicant.status]}`}
                >
                  {applicant.status}
                </span>
              </div>

              {/* Date */}
              <span className="text-[14px] text-(--text-row)">{applicant.submissionDate}</span>

              {/* Action */}
              <div className="flex justify-end">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  className="text-muted flex h-8 w-8 items-center justify-center rounded-lg transition-colors hover:bg-gray-100"
                >
                  <MoreVertical className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Footer */}
      <div className="flex flex-col items-center justify-between border-t border-(--table-border) px-6 py-5 md:flex-row">
        <span className="text-muted text-[13px] font-medium">
          Showing 1 to {data.length} of {data.length} entries
        </span>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onPageChange(Math.max(1, currentPage - 1))}
            className="text-muted flex h-8 w-8 items-center justify-center rounded-lg border border-(--table-border) transition-colors hover:bg-gray-50"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          {[1, 2, 3].map((page) => (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`flex h-8 w-8 items-center justify-center rounded-lg text-[13px] font-semibold transition-all ${
                currentPage === page
                  ? "bg-primary text-white shadow-md shadow-indigo-200"
                  : "text-muted hover:bg-gray-50"
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => onPageChange(Math.min(3, currentPage + 1))}
            className="text-muted flex h-8 w-8 items-center justify-center rounded-lg border border-(--table-border) transition-colors hover:bg-gray-50"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
