export const handleOtpVerify = async (
  otp: string
): Promise<{ success: boolean; message: string }> => {
  // Fake OTP for testing
  const validOtp = "1234";

  await new Promise((res) => setTimeout(res, 800)); // Fake delay

  if (otp === validOtp) {
    return {
      success: true,
      message: "OTP Verified Successfully!",
    };
  }

  return {
    success: false,
    message: "Invalid OTP",
  };
};
