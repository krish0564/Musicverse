/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });
  const { loading, login } = useLogin();

  const loginUser = async (e) => {
    e.preventDefault();

    await login(userDetails);
  };
  const onChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  return (
    <>
      {
        <header className="px-12 py-8">
          <div className="logo">
            {
              <Link to="/">
                <img src={assets.logo} width={120} alt="logo" />
              </Link>
            }
          </div>
        </header>
      }
      <div className="bg-[#1a1919] py-10 w-full">
        <div className="bg-black py-10 text-center w-1/2 mx-auto">
          <h1 className="text-5xl my-12 font-semibold text-white">
            Log in to MusicVerse
          </h1>
          <div className="border-b border-gray-400 w-3/4 my-4 mx-auto"></div>
          <form onSubmit={loginUser} className="text-center mx-auto w-1/2 ">
            <div className="w-full text-left py-4">
              <label
                htmlFor="username"
                className="font-semibold mb-2 inline-block text-white"
              >
                Email or username
              </label>
              <input
                type="text"
                id="email"
                value={userDetails.email}
                onChange={onChange}
                name="email"
                placeholder="Email or username"
                className="block w-full rounded-[4px] border-0  text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-[3px] focus:ring-inset focus:ring-white-600 outline-none p-3 hover:ring-white bg-[#1a1919]"
              />
            </div>
            <div className="w-full text-left py-4">
              <label
                htmlFor="password"
                className="font-semibold mb-2 inline-block text-white"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={userDetails.password}
                onChange={onChange}
                name="password"
                placeholder="Password"
                className="block w-full rounded-[4px] border-0  text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-[3px] focus:ring-inset focus:ring-white-600 outline-none p-3 hover:ring-white bg-[#1a1919]"
              />
            </div>
            <div className="w-full text-left py-4">
              <input
                type="submit"
                value="Log in"
                placeholder="Password"
                className="block cursor-pointer w-full outline-none bg-green-400 text-black p-3 hover:scale-105 translate-all duration-200 font-medium hover:font-semibold text-center rounded-full "
              />
            </div>
            <div className="w-full text-center py-4">
              {/* <Link
                  to="/password/forgot"
                  className="text-white font-semibold underline mx-auto"
                >
                  Forget Password?
                </Link> */}
            </div>
          </form>
          <div className="border-b border-gray-400 w-3/4 my-4 mx-auto"></div>
          <p className="pt-8">
            <span className="text-gray-300 font-semibold">
              Don't have an account?{" "}
            </span>

            <Link
              to="/signup"
              className="text-white hover:text-green-500 font-semibold underline mx-auto"
            >
              Sign up for MusicVerse
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
