import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { Link } from "react-router-dom";
import Passwordinput from "../../Components/input/Passwordinput";
import { validateEmail } from "../../utils/helper";
const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
 };

  return (
    <>
      <Navbar />
      <div className=" bg-white flex text-center justify-center mt-28">
        <div className="w-96 border rounded bg-white px-7 py-10">
          <form on onSubmit={handleLogin}>
            <h4 className="text-2xl mb-9 text-black">Login</h4>
            <input
              type="text"
              placeholder="Email"
              className="input-box w-full text-small bg-transparent border-[1.5px] px-5 py-3 rounded mb-4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Passwordinput
             value={password}
             onChange={(e) => setPassword(e.target.value)} />
            <button
              type="submit"
              className="btn-primary w-full text-sm bg-primary text-white p-2 rounded hover:bg-blue-600"
            >
              Login
            </button>
            <p className="text-sm text-center mt-4">
              Not Registered?{""}
              <Link
                to="/signup"
                className=" font-medium text-primary underline"
              >
                {" "}
                Create an Account.
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
