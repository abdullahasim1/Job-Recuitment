export const handleRoleSubmit = async (
  role: string
): Promise<{ success: boolean; message: string }> => {
  await new Promise((res) => setTimeout(res, 1200));

  if (!role) {
    return { success: false, message: "Role is required" };
  }

  return {
    success: true,
    message: "Role selected successfully!",
  };
};

export default handleRoleSubmit;
