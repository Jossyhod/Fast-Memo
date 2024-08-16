import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";
import PasswordInput from "../../Components/input/PasswordInput";
import { validateEmail } from "../../utils/helper";
import axiosInstance from "../../utils/axiosinstance";

const SignUp = () => {
  const [fullName, setFullName] = useState(""); // Changed from name to fullName to match usage
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!fullName) {
      setError("Please enter your name");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!password) {
      setError("Please enter a password");
      return;
    }

    setError("");

    try {
      console.log("Attempting to sign up with:", { fullName, email, password });
      const response = await axiosInstance.post("/create-account", {
        fullName,
        email,
        password,
      });
      console.log("Sign up response:", response);

      // Handle Successful registration
      if (response.data && response.data.error) {
        setError(response.data.message);
        return;
      }

      if (response.data && response.data.accessToken) {
        localStorage.setItem("token", response.data.accessToken);
        navigate("/dashboard");
      }
    } catch (error) {
      // Handle registration Error
      console.error("Sign up error:", error);
      if (error.response?.data?.message) {
        setError(error.response.data.message);
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-white flex text-center justify-center mt-28">
        <div className="w-96 border rounded bg-white px-7 py-10">
          <form onSubmit={handleSignUp}>
            <h4 className="text-2xl mb-9 text-black">Signup</h4>

            <input
              type="text"
              placeholder="Name"
              className="input-box w-full text-small bg-transparent border-[1.5px] px-5 py-3 rounded mb-4"
              value={fullName} // Updated to fullName
              onChange={(e) => setFullName(e.target.value)} // Updated to setFullName
            />

            <input
              type="text"
              placeholder="Email"
              className="input-box w-full text-small bg-transparent border-[1.5px] px-5 py-3 rounded mb-4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <PasswordInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && <p className="text-red-500 text-xs pb-1">{error}</p>}

            <button
              type="submit"
              className="btn-primary w-full text-sm bg-primary text-white p-2 rounded hover:bg-blue-600"
            >
              SignUp
            </button>
            <p className="text-sm text-center mt-4">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-medium text-primary underline underline-offset-4"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
