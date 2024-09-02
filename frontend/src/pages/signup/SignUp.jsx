/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";
import useSignUp from "../../hooks/useSignup";

const SignUp = () => {
  const [userDetails, setUserDetails] = useState({
    email: "",
    username: "",
    password: "",
    passwordConfirm: "",
  });
  const { loading, signup } = useSignUp();

  const registerUser = async (e) => {
    e.preventDefault();
    await signup(userDetails);
  };
  const onChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="py-8 bg-white">
        <div className="logo text-center">
          <Link to="/">
            <img src={assets.logo} className="mx-auto" width={140} alt="" />
          </Link>
        </div>
        <div className=" text-black">
          <div className="py-10 text-center w-1/2 mx-auto">
            <h1 className="text-3xl tracking-tighter my-4 font-semibold">
              Sign up for free to start listening.
            </h1>
            <span className="or__"></span>
            <p className="my-4 font-bold">Sign up with your email address</p>
            <form
              onSubmit={registerUser}
              className="text-center mx-auto w-3/4 "
            >
              <div className="w-4/5 mx-auto text-left py-4">
                <label
                  htmlFor="email"
                  className="font-semibold mb-2 text-sm inline-block"
                >
                  What's your email?{" "}
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={userDetails.email}
                  onChange={onChange}
                  placeholder="Enter your email"
                  className="block w-full rounded-[4px] border-0  text-black transition-all duration-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-[3px] focus:ring-inset focus:ring-white-600 outline-none p-3 hover:ring-black bg-[#fff]"
                />
              </div>
              <div className="w-4/5 mx-auto text-left py-4">
                <label
                  htmlFor="password"
                  className="font-semibold mb-2 text-sm inline-block"
                >
                  Create a password{" "}
                </label>
                <input
                  type="password"
                  id="password"
                  value={userDetails.password}
                  onChange={onChange}
                  name="password"
                  placeholder="Create a password"
                  className="block w-full rounded-[4px] border-0  text-black transition-all duration-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-[3px] focus:ring-inset focus:ring-white-600 outline-none p-3 hover:ring-black bg-[#fff]"
                />
              </div>
              <div className="w-4/5 mx-auto text-left py-4">
                <label
                  htmlFor="password"
                  className="font-semibold mb-2 text-sm inline-block"
                >
                  Confirm password{" "}
                </label>
                <input
                  type="password"
                  id="passwordConfirm"
                  value={userDetails.passwordConfirm}
                  onChange={onChange}
                  name="passwordConfirm"
                  placeholder="Confirm password"
                  className="block w-full rounded-[4px] border-0  text-black transition-all duration-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-[3px] focus:ring-inset focus:ring-white-600 outline-none p-3 hover:ring-black bg-[#fff]"
                />
              </div>
              <div className="w-4/5 mx-auto text-left py-4">
                <label
                  htmlFor="username"
                  className="font-semibold mb-2 text-sm inline-block"
                >
                  What should we call you?{" "}
                </label>
                <input
                  type="text"
                  id="username"
                  value={userDetails.username}
                  onChange={onChange}
                  name="username"
                  placeholder="Create a username"
                  className="block w-full rounded-[4px] border-0  text-black transition-all duration-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-[3px] focus:ring-inset focus:ring-white-600 outline-none p-3 hover:ring-black bg-[#fff]"
                />
                <small>it will appear on your profile</small>
              </div>

              <div className="w-full text-left py-4">
                <input
                  type="submit"
                  value={loading ? "Signing up..." : "Sign up"}
                  className={`block cursor-pointer w-1/2 mx-auto outline-none p-3 text-black text-center rounded-full translate-all duration-200 font-medium
                    ${
                      loading
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-green-400 hover:scale-105 hover:bg-green-500"
                    }`}
                />
              </div>
            </form>
            <div className="border-b border-gray-400 w-3/4 my-4 mx-auto"></div>
            <p className="pt-8">
              <span className="text-gray-300 font-semibold">
                Already have an account?{" "}
              </span>

              <Link
                to="/login"
                className="text-green-400 hover:text-green-400/90 font-semibold underline mx-auto"
              >
                Log in here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
