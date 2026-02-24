export const handleSignIn = async (values: {
  email: string;
  password: string;
}): Promise<{ success: boolean; message: string }> => {
  await new Promise((r) => setTimeout(r, 1200));

  if (values.email === "abd@gmail.com" && values.password === "12345678") {
    return { success: true, message: "Login successful" };
  }

  return { success: false, message: "Invalid email or password" };
};
