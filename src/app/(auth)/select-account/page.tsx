"use client";

import SelectRoleFormComponent from "@/app/(auth)/select-account/SelectRoleFormComponent";

const SelectAccountPage = () => {
  return (
    <div className="flex w-full flex-1 flex-col items-center justify-center px-4 py-12 sm:px-6">
      <SelectRoleFormComponent />
    </div>
  );
};
export default SelectAccountPage;
