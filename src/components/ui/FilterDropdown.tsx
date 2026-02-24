import { ChevronDown } from "lucide-react";

interface FilterDropdownProps {
  label: string;
  onClick?: () => void;
}

export const FilterDropdown = ({ label, onClick }: FilterDropdownProps) => {
  return (
    <button
      onClick={onClick}
      className="flex h-10 min-w-[180px] items-center justify-between rounded-xl border border-(--table-border) bg-gray-50 px-4 shadow-sm transition-colors hover:bg-gray-100"
    >
      <span className="text-muted text-[13px] font-medium">{label}</span>
      <ChevronDown className="text-muted h-4 w-4" />
    </button>
  );
};
