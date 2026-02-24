import { X, Calendar, Clock } from "lucide-react";
import { useState } from "react";
import { PlatformSelector } from "./schedule-modal/PlatformSelector";
import { MeetingLinkInput } from "./schedule-modal/MeetingLinkInput";

interface ScheduleInterviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  applicantName: string;
}

interface ScheduleState {
  platform: "zoom" | "google-meet" | null;
  date: string;
  time: string;
  meetingLink: string;
  sendNotification: boolean;
}

export const ScheduleInterviewModal = ({
  isOpen,
  onClose,
  applicantName,
}: ScheduleInterviewModalProps) => {
  // 2. Single Object State
  const [scheduleData, setScheduleData] = useState<ScheduleState>({
    platform: null,
    date: "",
    time: "",
    meetingLink: "",
    sendNotification: false,
  });

  if (!isOpen) return null;

  const updateField = <K extends keyof ScheduleState>(field: K, value: ScheduleState[K]) => {
    setScheduleData((prev) => ({ ...prev, [field]: value }));
  };

  const handleGenerateLink = () => {
    let link = "";
    if (scheduleData.platform === "zoom") {
      link = "https://zoom.us/j/123456789";
    } else if (scheduleData.platform === "google-meet") {
      link = "https://meet.google.com/xyz-abc-def";
    }
    // Sirf link update karein
    updateField("meetingLink", link);
  };

  const handleSchedule = () => {
    console.log({ applicantName, ...scheduleData });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="animate-in fade-in zoom-in relative mx-4 w-full max-w-[506px] rounded-[14px] bg-white shadow-xl duration-200">
        <div className="p-5">
          <button
            onClick={onClose}
            className="absolute top-2.5 right-5 rounded p-1 transition-colors hover:bg-(--bg-input)"
          >
            <X className="h-4 w-4 text-(--muted)" strokeWidth={2} />
          </button>

          <h2 className="text-heading text-[18px] leading-[39px] font-semibold tracking-[0.7px]">
            Schedule Interview
          </h2>
          <p className="text-muted/70 -mt-1 mb-4 text-[12px] font-normal">
            Schedule an interview for{" "}
            <span className="text-primary font-semibold">{applicantName}</span>
          </p>

          <div className="mt-4 space-y-5">
            {/* Platform Selector Update */}
            <PlatformSelector
              platform={scheduleData.platform}
              onSelect={(val) => updateField("platform", val)}
            />

            {/* Date & Time Inputs */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-heading mb-2 block text-[11px] font-medium">Date</label>
                <div className="relative">
                  <input
                    type="date"
                    value={scheduleData.date}
                    onChange={(e) => updateField("date", e.target.value)}
                    className="focus:border-primary h-11 w-full rounded-[14px] border border-(--table-border) px-3 text-[12px] text-(--secondary) focus:outline-none"
                  />
                  <Calendar className="pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-(--muted) opacity-70" />
                </div>
              </div>
              <div>
                <label className="text-heading mb-2 block text-[11px] font-medium">Time</label>
                <div className="relative">
                  <input
                    type="time"
                    value={scheduleData.time}
                    onChange={(e) => updateField("time", e.target.value)}
                    className="focus:border-primary h-11 w-full rounded-[14px] border border-(--table-border) px-3 text-[12px] text-(--secondary) focus:outline-none"
                  />
                  <Clock className="pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-(--muted) opacity-70" />
                </div>
              </div>
            </div>

            {/* Meeting Link Update */}
            <MeetingLinkInput
              meetingLink={scheduleData.meetingLink}
              setMeetingLink={(val: string) => updateField("meetingLink", val)}
              onGenerate={handleGenerateLink}
            />

            {/* Notification Toggle Update */}
            <div
              className="flex cursor-pointer items-center gap-3"
              onClick={() => updateField("sendNotification", !scheduleData.sendNotification)}
            >
              <button
                type="button"
                className={`relative h-5 w-9 rounded-full transition-colors ${scheduleData.sendNotification ? "bg-primary" : "bg-gray-200"}`}
              >
                <div
                  className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow-sm transition-transform ${scheduleData.sendNotification ? "translate-x-[18px]" : "translate-x-0.5"}`}
                />
              </button>
              <label className="cursor-pointer text-[12px] text-(--secondary) select-none">
                Send Interview Notification Emails
              </label>
            </div>

            <button
              onClick={handleSchedule}
              className="bg-primary flex h-[50px] w-full items-center justify-center rounded-[14px] shadow-sm transition-colors hover:bg-(--primary-hover)"
            >
              <span className="text-[14px] font-semibold text-white">Schedule Interview</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
