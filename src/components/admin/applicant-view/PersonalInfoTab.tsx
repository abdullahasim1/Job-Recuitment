interface PersonalInfoTabProps {
  data: {
    fullName: string;
    emailAddress: string;
    phoneNumber: string;
    address: string;
    dateOfBirth: string;
    confidentialityNotice: string;
  };
}

export const PersonalInfoTab = ({ data }: PersonalInfoTabProps) => {
  return (
    <div className="p-8">
      {/* Grid Layout */}
      <div className="grid grid-cols-1 gap-x-20 gap-y-8 md:grid-cols-2">
        {/* Row 1 */}
        <div>
          <label className="text-muted mb-1 block text-[13px] font-normal opacity-90">
            Full Name
          </label>
          <p className="text-heading text-[15px] font-medium">{data.fullName}</p>
        </div>
        <div>
          <label className="text-muted mb-1 block text-[13px] font-normal opacity-90">
            Email Address
          </label>
          <p className="text-heading text-[15px] font-medium">{data.emailAddress}</p>
        </div>

        {/* Row 2 */}
        <div>
          <label className="text-muted mb-1 block text-[13px] font-normal opacity-90">
            Phone Number
          </label>
          <p className="text-heading text-[15px] font-medium">{data.phoneNumber}</p>
        </div>
        <div>
          <label className="text-muted mb-1 block text-[13px] font-normal opacity-90">
            Address
          </label>
          <p className="text-heading text-[15px] font-medium">{data.address}</p>
        </div>

        {/* Row 3 */}
        <div>
          <label className="text-muted mb-1 block text-[13px] font-normal opacity-90">
            Date of Birth
          </label>
          <p className="text-heading text-[15px] font-medium">{data.dateOfBirth}</p>
        </div>
      </div>

      {/* Confidentiality Notice */}
      <div className="mt-10 pt-2">
        <label className="text-muted mb-2 block text-[13px] font-normal opacity-90">
          Confidentiality Notice
        </label>
        <p className="text-black-66 max-w-[800px] text-[13px] leading-relaxed">
          {data.confidentialityNotice}
        </p>
      </div>
    </div>
  );
};
