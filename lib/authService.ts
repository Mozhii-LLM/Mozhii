export const login = async ({ email, password }: { email: string; password: string }) => {
  // Simulate API call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email && password) {
        // Mock successful login
        const user = { email, token: "mock-jwt-token" };
        localStorage.setItem("user", JSON.stringify(user));
        resolve(user);
      } else {
        reject(new Error("Invalid credentials"));
      }
    }, 1000);
  });
};

export const register = async ({ name, email, password }: { name: string; email: string; password: string }) => {
  // Simulate API call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (name && email && password) {
        // Mock successful registration
        const user = { name, email, token: "mock-jwt-token" };
        localStorage.setItem("user", JSON.stringify(user));
        resolve(user);
      } else {
        reject(new Error("Invalid data"));
      }
    }, 1000);
  });
};

export const googleLogin = () => {
  // Simulate Google Login redirect or popup
  console.log("Initiating Google Login...");
  // In a real app, this would redirect to an OAuth endpoint
  // For now, we'll just simulate a successful redirect back with a token
  window.location.href = "/login?token=mock-google-token";
};

export const logout = () => {
  localStorage.removeItem("user");
  window.location.href = "/login";
};
