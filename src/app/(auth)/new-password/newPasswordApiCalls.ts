export const handleNewPassword = async (
    values: { password: string; confirmPassword: string }
  ): Promise<{ success: boolean; message: string }> => {
    
    // Fake Processing Delay
    await new Promise((r) => setTimeout(r, 1500));
  
    if (values.password === values.confirmPassword) {
      return {
        success: true,
        message: "Password reset successfully!",
      };
    }
  
    return {
      success: false,
      message: "Passwords do not match.",
    };
  };