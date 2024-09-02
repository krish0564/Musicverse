import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const useSignUp = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signup = async ({ email, username, password, passwordConfirm }) => {
    // Assuming handleInputErrors is a function that returns a boolean
    const success = handleInputErrors({
      email,
      username,
      password,
      passwordConfirm,
    });
    if (!success) return;

    setLoading(true);
    try {
      const res = await fetch("/api/users/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, username, password }),
      });

      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }

      // Set user data in local storage
      localStorage.setItem("loggedIn-User", JSON.stringify(data));

      // Update context with the authenticated user
      setAuthUser(data);
    } catch (error) {
      // Handle the error here (e.g., show a notification)
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

export default useSignUp;
function handleInputErrors({ email, username, password, passwordConfirm }) {
  if (!email || !username || !password || !passwordConfirm) {
    toast.error("Please fill in all fields");
    return false;
  }
  if (password !== passwordConfirm) {
    toast.error("password do not match");
    return false;
  }
  if (password.length < 8) {
    toast.error("Password must be at least 8 character");
    return false;
  }
  return true;
}
