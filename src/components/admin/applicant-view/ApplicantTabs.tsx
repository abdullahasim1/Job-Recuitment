interface ApplicantTabsProps {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const ApplicantTabs = ({ tabs, activeTab, onTabChange }: ApplicantTabsProps) => {
  return (
    <div className="px-6 py-4">
      <div className="scrollbar-hide flex items-center gap-8 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`relative text-[14px] font-medium whitespace-nowrap transition-all ${
              activeTab === tab ? "text-primary font-semibold" : "text-muted hover:text-(--heading)"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};
