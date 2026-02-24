import { Search } from "lucide-react";

interface SearchBarProps {
  placeholder?: string;
  className?: string;
}

export const SearchBar = ({ placeholder = "Search", className = "" }: SearchBarProps) => {
  return (
    <div
      className={`flex h-10 min-w-[260px] items-center gap-2 rounded-xl border border-(--table-border) bg-gray-50 px-4 shadow-sm ${className}`}
    >
      <Search className="text-muted h-[18px] w-[18px] shrink-0" />
      <input
        type="text"
        placeholder={placeholder}
        className="text-heading placeholder:text-muted flex-1 bg-transparent text-[13px] outline-none"
      />
    </div>
  );
};
