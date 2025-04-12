import React, { useRef, useState } from "react";
import { Link } from "react-router-dom"; 
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useAuth } from "../../features/auth/authHooks";

const SignUp = () => {
  const emailRef = useRef();
  const passRef = useRef();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const { auth, registerWithEmail } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passRef.current.value;
    await registerWithEmail(email, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-500 via-gray-700 to-gray-900 px-4">
      <div className="relative bg-gray-800 text-white shadow-lg rounded-lg p-10 max-w-md w-full border border-gray-700 hover:shadow-[0_0_25px_5px_rgba(56,140,248,1)] transition duration-300">
        <h2 className="text-3xl font-bold text-center mb-4">Welcome to ShopCart</h2>
        <h4 className="text-3xl font-bold text-center mb-4">Create Account</h4>
        <p className="text-gray-400 text-center mb-6">Sign up with your Email</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-gray-300 font-medium mb-1">
              Email Address
            </label>
            <input
              required
              type="email"
              ref={emailRef}
              id="email"
              placeholder="Enter Your Email"
              className="w-full border-b border-gray-600 bg-transparent text-white px-2 py-1 focus:border-cyan-400 focus:outline-none"
            />
          </div>

          <div className="relative">
            <label htmlFor="password" className="block text-gray-300 font-medium mb-1">
              Password
            </label>
            <input
              type={passwordVisible ? "text" : "password"}
              ref={passRef}
              id="password"
              placeholder="Enter your Password"
              className="w-full border-b border-gray-600 bg-transparent text-white px-2 py-1 focus:border-cyan-400 focus:outline-none"
            />
            <button
              type="button"
              onClick={() => setPasswordVisible(!passwordVisible)}
              className="absolute right-2 top-8 text-gray-400 hover:text-cyan-400 focus:outline-none"
            >
              {passwordVisible ? <AiOutlineEyeInvisible className="h-5 w-5" /> : <AiOutlineEye className="h-5 w-5" />}
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-2 rounded-lg hover:bg-gradient-to-l hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 focus:ring focus:ring-cyan-300 focus:outline-none shadow-md hover:shadow-lg"
            disabled={auth.loading}
          >
            {auth.loading ? "Signing up..." : "Sign Up"}
          </button>
        </form>

        {auth.error && (
          <p className="mt-4 text-red-400 text-sm text-center">
            {auth.error}
          </p>
        )}

        <p className="text-center text-gray-400 text-sm mt-6">
          Already have an account?{" "}
          <Link to="/auth/login" className="text-cyan-400 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
