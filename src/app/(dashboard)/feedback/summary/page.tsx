"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, Star } from "lucide-react";

const tabs = [
  { id: "overall", label: "Overall Rating" },
  { id: "pros-cons", label: "Overall Pros & Cons" },
  { id: "interviewer", label: "Interviewer Feedback" },
];

// Rating Data for Overall Tab
const ratingData = [
  { stars: 5, percentage: 95 },
  { stars: 4, percentage: 62 },
  { stars: 3, percentage: 50 },
  { stars: 2, percentage: 30 },
  { stars: 1, percentage: 13 },
];

// Mock Data for Interviewer Feedback Tab
const interviewerFeedbackData = [
  {
    id: 1,
    name: "Mirana Marci",
    role: "3D Designer",
    avatar:
      "https://api.builder.io/api/v1/image/assets/TEMP/5477eb567356a8388e5d0d65da5da01d23d42db3?width=101",
    rating: 5,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 2,
    name: "Mirana Marci",
    role: "3D Designer",
    avatar:
      "https://api.builder.io/api/v1/image/assets/TEMP/5477eb567356a8388e5d0d65da5da01d23d42db3?width=101",
    rating: 5,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 3,
    name: "Mirana Marci",
    role: "3D Designer",
    avatar:
      "https://api.builder.io/api/v1/image/assets/TEMP/5477eb567356a8388e5d0d65da5da01d23d42db3?width=101",
    rating: 5,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];

const FeedbackSummaryPage = () => {
  const [activeTab, setActiveTab] = useState("pros-cons");

  return (
    <div className="max-w-[1109px] pb-10">
      {/* 1. Header with Back Button */}
      <div className="mb-6 flex items-center gap-4">
        <Link
          href="/feedback"
          className="text-muted hover:text-primary rounded-full bg-white p-2 shadow-sm transition-colors"
        >
          <ChevronLeft size={20} />
        </Link>
        <h1 className="text-heading text-lg font-medium">Feedback Summary</h1>
      </div>

      {/* 2. Main Content Card */}
      <div className="border-light-gray min-h-[600px] rounded-[10px] border bg-white p-6 shadow-sm">
        {/* Applicant Profile Section */}
        <div className="border-light-gray mb-6 flex flex-col items-start justify-between gap-4 border-b pb-6 md:flex-row">
          <div className="flex items-center gap-4">
            {/* Avatar */}
            {/* <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/078e6f8dd67e6b1b3720b4b710b12ec0bf324d08?width=142"
              alt="Jane Doe"
              className="h-[72px] w-[72px] rounded-full border border-gray-100 object-cover"
            /> */}

            {/* Profile Info */}
            <div>
              <h2 className="text-heading mb-1 text-lg font-semibold">Jane Doe</h2>
              <div className="text-xs leading-[17px] tracking-[0.6px]">
                <span className="text-muted">Applied for: </span>
                <span className="text-heading font-medium">Mental Health Practitioner</span>
                <br />
                <span className="text-muted-light mt-1 block">
                  Application received on July 15, 2024
                </span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <button className="bg-primary hover:bg-primary-hover h-[41px] w-[202px] rounded-[14px] text-[14px] font-semibold text-white shadow-lg shadow-indigo-100 transition-all active:scale-95">
              Advance to Next Stage
            </button>
            <button className="h-[41px] w-[106px] rounded-[14px] bg-[#D1061F] text-[14px] font-semibold text-white shadow-lg shadow-red-100 transition-all hover:bg-[#b0051a] active:scale-95">
              Decline
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="border-light-gray flex items-center gap-8 overflow-x-auto border-b pb-4 md:gap-11">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-sm font-medium whitespace-nowrap transition-colors ${
                  tab.id === activeTab
                    ? "text-primary font-semibold"
                    : "text-muted hover:text-primary opacity-80"
                }`}
                style={{ letterSpacing: "0.819px" }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* --- TAB 1: OVERALL RATING --- */}
        {activeTab === "overall" && (
          <div className="py-2">
            <div className="mb-8 flex items-start gap-6">
              <div className="flex flex-col">
                <div className="text-heading mb-2 text-[40px] leading-10 font-semibold">4.2</div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      size={28}
                      className={index < 4 ? "fill-star text-star" : "fill-gray-200 text-gray-200"}
                    />
                  ))}
                </div>
                <div className="text-muted mt-3 text-[13px] tracking-[0.7px] opacity-90">
                  Based on 3 reviews
                </div>
              </div>
            </div>
            <div className="flex w-full max-w-[800px] items-start gap-4">
              <div className="flex h-[150px] flex-col justify-between py-1">
                {[5, 4, 3, 2, 1].map((num) => (
                  <div key={num} className="flex items-center gap-1.5">
                    <span className="text-muted w-3 text-lg leading-none font-medium">{num}</span>
                    <Star className="fill-star text-star h-4 w-4" />
                  </div>
                ))}
              </div>
              <div className="flex h-[150px] flex-1 flex-col justify-between py-2.5">
                {ratingData.map((rating, index) => (
                  <div key={index} className="relative h-2 w-full rounded-full bg-gray-100">
                    <div
                      className="bg-star absolute top-0 left-0 h-full rounded-full"
                      style={{ width: `${rating.percentage}%` }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* --- TAB 2: OVERALL PROS & CONS  --- */}
        {activeTab === "pros-cons" && (
          <div className="space-y-8 py-2">
            {/* Pros Section */}
            <div>
              <h3 className="text-heading mb-4 text-[16px] font-bold">Pros</h3>
              <div className="grid grid-cols-1 gap-x-10 gap-y-3 md:grid-cols-2">
                <ul className="text-muted list-disc space-y-3 pl-5 text-[13px]">
                  <li>Exceptional Problem-solving skills</li>
                  <li>Strong background in ARMHS regulations</li>
                </ul>
                <ul className="text-muted list-disc space-y-3 pl-5 text-[13px]">
                  <li>Great communicator and team player</li>
                  <li>Positive and motivated attitude</li>
                </ul>
              </div>
            </div>

            {/* Cons Section */}
            <div>
              <h3 className="text-heading mb-4 text-[16px] font-bold">Cons</h3>
              <div className="grid grid-cols-1 gap-x-10 gap-y-3 md:grid-cols-2">
                <ul className="text-muted list-disc space-y-3 pl-5 text-[13px]">
                  <li>Lacks experience with specific software</li>
                </ul>
                <ul className="text-muted list-disc space-y-3 pl-5 text-[13px]">
                  <li>Could be more assertive in group settings</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* --- TAB 3: INTERVIEWER FEEDBACK  --- */}
        {activeTab === "interviewer" && (
          <div className="space-y-8 py-2">
            {interviewerFeedbackData.map((item) => (
              <div
                key={item.id}
                className="border-light-gray flex flex-col gap-4 border-b pb-8 last:border-0 last:pb-0"
              >
                {/* User Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {/* <img 
                      src={item.avatar} 
                      alt={item.name} 
                      className="w-[45px] h-[45px] rounded-full object-cover"
                    /> */}
                    <div>
                      <h4 className="text-heading text-[14px] font-medium">{item.name}</h4>
                      <p className="text-muted text-[12px]">{item.role}</p>
                    </div>
                  </div>
                  {/* Rating */}
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className={i < item.rating ? "fill-star text-star" : "text-gray-200"}
                      />
                    ))}
                  </div>
                </div>

                {/* Feedback Text */}
                <p className="text-muted text-[13px] leading-[1.6]">{item.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FeedbackSummaryPage;
