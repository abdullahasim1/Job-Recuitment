// 1) Signup Payload Type
export interface SignUpPayload {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  subscribe?: boolean;
}

// 2) Safe LocalStorage Setter
const setItemInLocalStorage = (key: string, value: string) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, value);
  }
};

// 3) Converted Signup API (Same style as Login API)
export const handleSignUp = async (payload: SignUpPayload) => {
  try {
    console.log("Sending signup request...", payload);

    // Fake delay to simulate real API
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Mock API response (same structure as your Login API)
    const response = {
      status: true,
      data: {
        token: { type: "bearer", token: "oat_signup_token_12345" },
        id: 101,
        first_name: payload.firstName,
        last_name: payload.lastName,
        email: payload.email,
      },
      message: "Account created successfully!",
    };

    // If signup is successful and token exists
    if (response.status && response.data?.token?.token) {
      setItemInLocalStorage("authentication_token", response.data.token.token);
      return {
        success: true,
        message: response.message,
        userId: response.data.id,
      };
    }

    // Signup failed
    return {
      success: false,
      message: "Signup failed. Please try again.",
    };
  } catch (error) {
    console.error(" Signup error:", error);
    return {
      success: false,
      message: "An error occurred during signup. Please try again later.",
    };
  }
};
