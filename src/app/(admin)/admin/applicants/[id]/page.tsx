"use client";

import { useState } from "react";
import { ApplicantHeader } from "@/components/admin/applicant-view/ApplicantHeader";
import { ApplicantTabs } from "@/components/admin/applicant-view/ApplicantTabs";
import { PersonalInfoTab } from "@/components/admin/applicant-view/PersonalInfoTab";
import { ScheduleInterviewModal } from "@/components/admin/applicant-view/ScheduleInterviewModal";

type Tab = "Personal Information" | "Resume/CV" | "Cover Letter" | "Screening Questions" | "Notes";

const tabs: Tab[] = [
  "Personal Information",
  "Resume/CV",
  "Cover Letter",
  "Screening Questions",
  "Notes",
];

const applicantData = {
  id: "1",
  name: "Jane Doe",
  photo: null,
  jobAppliedFor: "Mental Health Practitioner",
  personalInfo: {
    fullName: "Jane Doe",
    phoneNumber: "(123) 456-7890",
    emailAddress: "jane.doe@example.com",
    address: "123 Main St, Anytown, USA 12345",
    dateOfBirth: "January 1, 1990",
    confidentialityNotice:
      "This information is confidential and should be handled in accordance with company privacy policies and applicable laws.",
  },
};

const ViewApplicantPage = () => {
  const [activeTab, setActiveTab] = useState<Tab>("Personal Information");
  const [isInterviewModalOpen, setIsInterviewModalOpen] = useState(false);

  return (
    <div className="space-y-6 p-1">
      {/* Main Card */}
      <div className="shadow-card overflow-hidden rounded-[10px] border border-(--table-border) bg-white">
        <ApplicantHeader
          name={applicantData.name}
          jobAppliedFor={applicantData.jobAppliedFor}
          photo={applicantData.photo}
          onScheduleClick={() => setIsInterviewModalOpen(true)}
        />

        <div className="h-px w-full bg-(--table-border)"></div>

        <ApplicantTabs
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={(tab) => setActiveTab(tab as Tab)}
        />

        <div className="h-px w-full bg-(--table-border)"></div>

        <div className="min-h-[400px]">
          {activeTab === "Personal Information" && (
            <PersonalInfoTab data={applicantData.personalInfo} />
          )}

          {activeTab === "Resume/CV" && (
            <div className="text-muted flex h-64 flex-col items-center justify-center">
              <p>Resume Preview</p>
            </div>
          )}
        </div>
      </div>

      <ScheduleInterviewModal
        isOpen={isInterviewModalOpen}
        onClose={() => setIsInterviewModalOpen(false)}
        applicantName={applicantData.name}
      />
    </div>
  );
};

export default ViewApplicantPage;
