"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Star, ThumbsUp, MessageSquare, Edit2, Trash2, ChevronDown, Plus } from "lucide-react";

// Types
interface FeedbackItem {
  id: number;
  name: string;
  position: string;
  avatar: string;
  rating: number;
  feedback: string;
  likes: number;
  comments: number;
}
const tabs = [
  { id: "profile", label: "Profile" },
  { id: "documents", label: "Documents" },
  { id: "feedback", label: "Feedback" },
  { id: "timeline", label: "Timeline" },
];

const mockFeedback: FeedbackItem[] = [
  {
    id: 1,
    name: "Mirana Marci",
    position: "3D Designer",
    avatar:
      "https://api.builder.io/api/v1/image/assets/TEMP/5477eb567356a8388e5d0d65da5da01d23d42db3?width=101",
    rating: 5,
    feedback:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    likes: 5,
    comments: 1,
  },
  {
    id: 2,
    name: "Mirana Marci",
    position: "3D Designer",
    avatar:
      "https://api.builder.io/api/v1/image/assets/TEMP/5477eb567356a8388e5d0d65da5da01d23d42db3?width=101",
    rating: 5,
    feedback:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    likes: 5,
    comments: 1,
  },
  {
    id: 3,
    name: "Mirana Marci",
    position: "3D Designer",
    avatar:
      "https://api.builder.io/api/v1/image/assets/TEMP/5477eb567356a8388e5d0d65da5da01d23d42db3?width=101",
    rating: 5,
    feedback:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    likes: 5,
    comments: 1,
  },
];

const FeedbackPage = () => {
  const [activeTab, setActiveTab] = useState("feedback");
  const router = useRouter();

  return (
    <div className="max-w pb-10">
      {/* Page Title */}
      <div className="mb-6">
        <h1 className="text-heading text-lg font-medium">Feedback</h1>
      </div>

      {/* Tabs */}
      <div className="mb-6 rounded-[10px] bg-white p-6 shadow-sm">
        <div className="border-light-gray flex items-center gap-8 border-b pb-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-1 text-sm font-medium transition-colors ${
                tab.id === activeTab
                  ? "text-primary border-primary border-b-2 font-semibold"
                  : "text-muted hover:text-primary opacity-82"
              }`}
              style={{ letterSpacing: "0.819px" }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Filters and Add Button */}
      <div className="mb-6 rounded-[10px] bg-white p-6 shadow-sm">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex w-full flex-wrap items-center gap-4 md:w-auto">
            {/* Dropdowns... */}
            <div className="flex h-[45px] w-[200px] cursor-pointer items-center justify-between rounded-[14px] bg-gray-100 px-3.5 transition-colors hover:bg-gray-200">
              <span className="text-muted text-[11px]">Interviewer</span>
              <ChevronDown size={15} className="text-muted" />
            </div>

            <div className="flex h-[45px] w-[200px] cursor-pointer items-center justify-between rounded-[14px] bg-gray-100 px-3.5 transition-colors hover:bg-gray-200">
              <span className="text-muted text-[11px]">Interviewer Stage</span>
              <ChevronDown size={15} className="text-muted" />
            </div>

            <div className="flex h-[45px] w-[200px] cursor-pointer items-center justify-between rounded-[14px] bg-gray-100 px-3.5 transition-colors hover:bg-gray-200">
              <span className="text-muted text-[11px]">Sort by Date</span>
              <ChevronDown size={15} className="text-muted" />
            </div>
          </div>

          {/* Add Feedback Button */}
          <Link href="/feedback/add">
            <button className="bg-primary hover:bg-primary-hover flex h-[45px] w-[171px] items-center justify-center gap-2 rounded-[14px] text-[14px] font-semibold text-white shadow-lg shadow-indigo-100 transition-all active:scale-95">
              <Plus size={16} />
              Add Feedback
            </button>
          </Link>
        </div>
      </div>

      {/* Feedback Cards */}
      <div className="space-y-6">
        {mockFeedback.map((item) => (
          <div
            key={item.id}
            //  3. Navigation Logic on DIV
            onClick={() => router.push("/feedback/summary")}
            className="border-light-gray cursor-pointer rounded-[10px] border bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            {/* Profile Section */}
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                {/* <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-[50px] h-[50px] rounded-full object-cover border border-gray-100"
                /> */}
                <div className="flex flex-col gap-0.5">
                  <h3 className="text-heading text-base font-medium">{item.name}</h3>
                  <p className="text-muted text-sm">{item.position}</p>
                </div>
              </div>

              {/* Star Rating */}
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={20}
                    className={`${index < item.rating ? "fill-star text-star" : "text-gray-300"}`}
                  />
                ))}
              </div>
            </div>

            {/* Feedback Text */}
            <p className="text-muted mb-4 text-base leading-[190%]">{item.feedback}</p>

            {/* Actions Footer */}
            <div className="border-light-gray mt-4 flex items-center justify-between border-t pt-4">
              <div className="flex items-center gap-6">
                <div
                  className="hover:text-primary text-muted flex cursor-pointer items-center gap-2 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ThumbsUp size={18} />
                  <span className="text-sm font-medium">{item.likes} Likes</span>
                </div>
                <div
                  className="hover:text-primary text-muted flex cursor-pointer items-center gap-2 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <MessageSquare size={18} />
                  <span className="text-sm font-medium">{item.comments} Comments</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {/* Edit Button */}
                <button
                  className="text-muted hover:text-primary hover:bg-primary-light rounded-full p-2 transition-all"
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log("Edit clicked");
                  }}
                >
                  <Edit2 size={20} />
                </button>

                {/* Delete Button */}
                <button
                  className="text-muted rounded-full p-2 transition-all hover:bg-red-50 hover:text-red-500"
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log("Delete clicked");
                  }}
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackPage;
