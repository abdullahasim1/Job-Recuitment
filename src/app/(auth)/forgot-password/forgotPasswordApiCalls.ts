export const handleForgotPassword = async (
    email: string
  ): Promise<{ success: boolean; message: string }> => {
    
    // Fake API delay
    await new Promise((r) => setTimeout(r, 1500));
  
    if (email) {
      return {
        success: true,
        message: "Reset link has been sent to your email address.",
      };
    }
  
    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  };