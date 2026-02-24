interface PlatformSelectorProps {
  platform: "zoom" | "google-meet" | null;
  onSelect: (platform: "zoom" | "google-meet") => void;
}

export const PlatformSelector = ({ platform, onSelect }: PlatformSelectorProps) => {
  return (
    <div>
      <label className="text-heading mb-2 block text-[11px] font-medium tracking-[0.54px]">
        Select Platform
      </label>
      <div className="flex gap-3">
        {/* Zoom Button */}
        <button
          onClick={() => onSelect("zoom")}
          className={`flex h-[60px] flex-1 items-center gap-2.5 rounded-[14px] border px-4 transition-colors ${
            platform === "zoom"
              ? "border-primary bg-primary/5"
              : "border-(--table-border) hover:bg-(--bg-input)"
          }`}
        >
          <div
            className={`flex h-5 w-5 items-center justify-center rounded-full border-2 ${
              platform === "zoom" ? "border-primary" : "border-gray-300"
            }`}
          >
            {platform === "zoom" && <div className="bg-primary h-2.5 w-2.5 rounded-full" />}
          </div>
          <span
            className={`text-[13px] font-medium ${
              platform === "zoom" ? "text-primary" : "text-(--muted)"
            }`}
          >
            Zoom
          </span>
        </button>

        {/* Google Meet Button */}
        <button
          onClick={() => onSelect("google-meet")}
          className={`flex h-[60px] flex-1 items-center gap-2.5 rounded-[14px] border px-4 transition-colors ${
            platform === "google-meet"
              ? "border-primary bg-primary/5"
              : "border-(--table-border) hover:bg-(--bg-input)"
          }`}
        >
          <div
            className={`flex h-5 w-5 items-center justify-center rounded-full border-2 ${
              platform === "google-meet" ? "border-primary" : "border-gray-300"
            }`}
          >
            {platform === "google-meet" && <div className="bg-primary h-2.5 w-2.5 rounded-full" />}
          </div>
          <span
            className={`text-[13px] font-medium ${
              platform === "google-meet" ? "text-primary" : "text-(--muted)"
            }`}
          >
            Google Meet
          </span>
        </button>
      </div>
    </div>
  );
};
