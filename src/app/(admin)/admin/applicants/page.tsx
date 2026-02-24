"use client";

import { useState } from "react";
import { FilterDropdown } from "@/components/ui/FilterDropdown";
import { SearchBar } from "@/components/ui/SearchBar";
import { ApplicantsTable, Applicant } from "@/components/admin/ApplicantsTable";

const mockApplicants: Applicant[] = [
  {
    id: 1,
    name: "John Doe",
    jobAppliedFor: "Therapist",
    status: "New",
    submissionDate: "2024-05-23",
  },
  {
    id: 2,
    name: "John Doe",
    jobAppliedFor: "Therapist",
    status: "Interviewing",
    submissionDate: "2024-05-23",
  },
  {
    id: 3,
    name: "John Doe",
    jobAppliedFor: "Therapist",
    status: "Hired",
    submissionDate: "2024-05-23",
  },
  {
    id: 4,
    name: "John Doe",
    jobAppliedFor: "Therapist",
    status: "Rejected",
    submissionDate: "2024-05-23",
  },
  {
    id: 5,
    name: "John Doe",
    jobAppliedFor: "Therapist",
    status: "New",
    submissionDate: "2024-05-23",
  },
  {
    id: 6,
    name: "John Doe",
    jobAppliedFor: "Therapist",
    status: "Rejected",
    submissionDate: "2024-05-23",
  },
  {
    id: 7,
    name: "John Doe",
    jobAppliedFor: "Therapist",
    status: "Interviewing",
    submissionDate: "2024-05-23",
  },
  {
    id: 8,
    name: "John Doe",
    jobAppliedFor: "Therapist",
    status: "Hired",
    submissionDate: "2024-05-23",
  },
];

const ApplicantsPage = () => {
  const [currentPage, setCurrentPage] = useState(2);

  return (
    <div className="space-y-6">
      {/* 1. TOP FILTERS & SEARCH */}
      <div className="flex flex-wrap items-center gap-3">
        <FilterDropdown label="Job Applied For" />
        <FilterDropdown label="Application Status" />
        <SearchBar />
      </div>

      {/* 2. SEPARATE TABLE COMPONENT */}
      <ApplicantsTable
        data={mockApplicants}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default ApplicantsPage;
