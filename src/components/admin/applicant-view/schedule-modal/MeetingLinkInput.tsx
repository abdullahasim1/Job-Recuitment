interface MeetingLinkInputProps {
  meetingLink: string;
  setMeetingLink: (link: string) => void;
  onGenerate: () => void;
}

export const MeetingLinkInput = ({
  meetingLink,
  setMeetingLink,
  onGenerate,
}: MeetingLinkInputProps) => {
  return (
    <div>
      <label className="text-heading mb-2 block text-[11px] font-medium">Meeting Link</label>
      <div className="focus-within:border-primary flex h-11 items-center gap-2 rounded-[14px] border border-(--table-border) px-3">
        <input
          type="text"
          value={meetingLink}
          onChange={(e) => setMeetingLink(e.target.value)}
          className="flex-1 bg-transparent text-[12px] text-(--secondary) outline-none placeholder:text-(--muted)"
          placeholder="https://meet.google.com/..."
        />
        <button
          onClick={onGenerate}
          className="text-primary text-[10px] font-medium whitespace-nowrap hover:underline"
          type="button"
        >
          Generate Link
        </button>
      </div>
    </div>
  );
};
