import { ChevronDown, User } from "lucide-react";
import Image from "next/image";

interface ApplicantHeaderProps {
  name: string;
  jobAppliedFor: string;
  photo?: string | null;
  onScheduleClick: () => void;
}

export const ApplicantHeader = ({
  name,
  jobAppliedFor,
  photo,
  onScheduleClick,
}: ApplicantHeaderProps) => {
  return (
    <div className="flex flex-col gap-6 p-6 md:flex-row md:items-start md:justify-between">
      {/* Left Side: Avatar & Info */}
      <div className="flex items-center gap-5">
        <div className="relative h-[72px] w-[72px] shrink-0 overflow-hidden rounded-full border border-(--table-border) bg-(--bg-input)">
          {photo ? (
            <Image src={photo} alt={name} fill className="object-cover" sizes="72px" />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-(--muted)">
              <User size={32} />
            </div>
          )}
        </div>

        <div className="pt-1">
          <h2 className="text-heading text-[22px] leading-tight font-bold tracking-[0.3px]">
            {name}
          </h2>
          <p className="text-muted mt-1 text-[14px] font-normal">
            Applied for <br className="hidden md:block" />
            <span className="text-heading font-semibold">{jobAppliedFor}</span>
          </p>
        </div>
      </div>

      {/* Right Side: Buttons */}
      <div className="flex flex-wrap items-center gap-3">
        <button className="flex h-[42px] min-w-40 items-center justify-between rounded-lg border border-(--table-border) bg-white px-4 text-[13px] font-medium text-(--secondary) transition-colors hover:bg-(--bg-input)">
          <span>Application Status</span>
          <ChevronDown size={16} className="text-(--muted)" />
        </button>

        <button
          onClick={onScheduleClick}
          className="bg-primary hover:bg-primary-hover h-[42px] rounded-lg px-6 text-[14px] font-semibold text-white shadow-sm transition-colors"
        >
          Schedule Interview
        </button>

        <button className="h-[42px] rounded-lg bg-(--status-rejected-text) px-6 text-[14px] font-semibold text-white shadow-sm transition-colors hover:opacity-90">
          Reject
        </button>
      </div>
    </div>
  );
};
