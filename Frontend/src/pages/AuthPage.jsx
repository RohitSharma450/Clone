import React, { useEffect, useRef, useState } from "react";
import wallpaper from "../assets/wallpaper.png";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Button from "../components/Button";

const AuthPage = () => {
  const inputRef = useRef([]);
  const otp_input_fields = 4;

  const [login, setLogin] = useState("login");
  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [otpInput, setOtpInput] = useState(
    new Array(otp_input_fields).fill(" ")
  );

  const togglePassword = () => setShowPassword((prev) => !prev);
  const toggleConfirmPassword = () => setShowConfirmPassword((prev) => !prev);

  const handleStep1Submit = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handleStep2Submit = (e) => {
    e.preventDefault();
    setStep(3);
  };

  const handleStep3Submit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      alert("Password reset successful");
      setStep(1);
      setLogin("login");
      setEmail("");
      setOtpInput("");
      setPassword("");
      setConfirmPassword("");
    } else {
      alert("Passwords do not match");
    }
  };

  useEffect(() => {
    inputRef.current[0]?.focus();
  }, []);

  const handleInputChange = (value, i) => {
    if (isNaN(value)) return;

    let newValue = value.trim();
    const newArr = [...otpInput];
    newArr[i] = newValue.slice(-1);
    setOtpInput(newArr);

    newValue && inputRef.current[i + 1]?.focus();
  };

  const handleOnKeyDown = (e, i) => {
    const value = e.target.value;
    if (!value && e.key === "Backspace") {
      inputRef.current[i - 1]?.focus();
    }
  };

  return (
    <div className="p-5 translate-y-[10%]">
      <div className="w-5/6 h-[80vh] mx-auto flex flex-col md:flex-row justify-center">
        <div className="h-[80vh] border border-amber-300 w-1/1 md:w-1/2">
          <img
            src={wallpaper}
            alt="wallpaper"
            className="w-full h-full object-cover"
          />
        </div>

        {login !== "forgot" && (
          <div className="h-[80vh] flex flex-col justify-center border border-amber-300 w-1/1 md:w-1/2 p-5">
            <h1 className="font-bold">Welcome</h1>
            <p className="text-gray-400">
              Sign in to access your documents or create a new account
            </p>

            <div className="rounded-xl bg-yellow-500 mt-5">
              <div className="flex text-center p-1">
                <p
                  className={`w-1/2 p-1 cursor-pointer rounded-xl ${
                    login === "login"
                      ? "bg-black text-yellow-500"
                      : "bg-transparent text-gray-500"
                  }`}
                  onClick={() => setLogin("login")}
                >
                  Login
                </p>
                <p
                  className={`w-1/2 p-1 cursor-pointer rounded-xl ${
                    login !== "login"
                      ? "bg-black text-yellow-500"
                      : "bg-transparent text-gray-500"
                  }`}
                  onClick={() => setLogin("register")}
                >
                  Register
                </p>
              </div>
            </div>

            <form className="mt-4">
              {login !== "login" && (
                <>
                  <div className="mb-5">
                    <label htmlFor="username_name" className="cursor-pointer">
                      Username:
                    </label>
                    <input
                      type="text"
                      name="username_name"
                      placeholder="user name here..."
                      id="username_name"
                      className="mt-3 rounded-lg px-6 py-2 w-full border border-amber-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
                    />
                  </div>
                  <div className="mb-5">
                    <label htmlFor="full_name" className="cursor-pointer">
                      Full Name:
                    </label>
                    <input
                      type="text"
                      name="full_name"
                      placeholder="full name here..."
                      id="full_name"
                      className="mt-3 rounded-lg px-6 py-2 w-full border border-amber-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
                    />
                  </div>
                </>
              )}

              <div className="mb-5">
                <label htmlFor="email" className="cursor-pointer">
                  Email:
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="xyz@gmail.com"
                  id="email"
                  className="mt-3 rounded-lg px-6 py-2 w-full border border-amber-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
                />
              </div>
              <div className="mb-5 relative">
                <label htmlFor="password" className="cursor-pointer">
                  Password:
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="•••••••••••••••"
                  id="password"
                  className="mt-3 rounded-lg px-6 py-2 w-full border border-amber-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
                />
                <button
                  onClick={togglePassword}
                  className="absolute cursor-pointer top-14 right-3 transform -translate-y-1/2 text-gray-500 transition-transform duration-300"
                >
                  {showPassword ? (
                    <AiOutlineEye size={24} />
                  ) : (
                    <AiOutlineEyeInvisible size={24} />
                  )}
                </button>
              </div>

              <div className="flex gap-10 justify-end">
                {login === "login" && (
                  <Button
                    text="Forgot Password"
                    onClick={() => setLogin("forgot")}
                  />
                )}
                <Button text={login === "login" ? "Login" : "Signup"} />
              </div>
            </form>
          </div>
        )}

        {login === "forgot" && (
          <div className="p-5 w-1/2 border flex flex-col justify-center border-amber-300 rounded-lg">
            {/* Step Progress */}
            <div className="flex justify-between mb-6">
              <div
                className={`w-10 h-10 rounded-full ${
                  step >= 1 ? "bg-yellow-500" : "bg-gray-300"
                } flex items-center justify-center`}
              >
                <p className="font-bold text-white">1</p>
              </div>
              <div
                className={`w-10 h-10 rounded-full ${
                  step >= 2 ? "bg-yellow-500" : "bg-gray-300"
                } flex items-center justify-center`}
              >
                <p className="font-bold text-white">2</p>
              </div>
              <div
                className={`w-10 h-10 rounded-full ${
                  step >= 3 ? "bg-yellow-500" : "bg-gray-300"
                } flex items-center justify-center`}
              >
                <p className="font-bold text-white">3</p>
              </div>
            </div>

            {/* Step 1: Enter Email */}
            {step === 1 && (
              <form onSubmit={handleStep1Submit}>
                <h2 className="font-semibold text-xl mb-3">
                  Step 1: Enter Your Email
                </h2>
                <p className="text-gray-500 mb-4">
                  Please enter your email address. We will send you a One-Time
                  Password (OTP) to verify your identity.
                </p>
                <div className="mb-5">
                  <label htmlFor="email" className="cursor-pointer text-sm">
                    Email Address:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="xyz@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-3 rounded-lg px-6 py-2 w-full border border-amber-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
                    required
                  />
                </div>
                <div className="flex gap-5 flex-row-reverse">
                  <Button text="Next" type="submit" />
                  <Button text="Back" onClick={() => setLogin("login")} />
                </div>
              </form>
            )}

            {/* Step 2: Enter OTP */}
            {step === 2 && (
              <form onSubmit={handleStep2Submit}>
                <h2 className="font-semibold text-xl mb-3">
                  Step 2: Enter OTP
                </h2>
                <p className="text-gray-500 mb-4">
                  We have sent a One-Time Password (OTP) to the email address
                  you provided. Please enter it below to verify your identity.
                </p>
                <div className="mb-5">
                  <label htmlFor="otp" className="cursor-pointer text-sm">
                    OTP (One-Time Password):
                  </label>
                  <div className="flex justify-center gap-2 mt-3">
                    {otpInput.map((input, i) => (
                      <input
                        key={i}
                        type="text"
                        value={input}
                        className="mt-3 text-center rounded-lg py-3 w-15 border border-amber-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
                        onKeyDown={(e) => handleOnKeyDown(e, i)}
                        ref={(input) => (inputRef.current[i] = input)}
                        onChange={(e) => handleInputChange(e.target.value, i)}
                      />
                    ))}
                  </div>
                </div>

                <div className="flex gap-5 flex-row-reverse">
                  <Button text="Next" type="submit" />
                  <Button text="Back" onClick={() => setStep(1)} />
                </div>
              </form>
            )}

            {/* Step 3: Enter New Password */}
            {step === 3 && (
              <form onSubmit={handleStep3Submit}>
                <h2 className="font-semibold text-xl mb-3">
                  Step 3: Set a New Password
                </h2>
                <p className="text-gray-500 mb-4">
                  Please choose a new password. Ensure it is at least 8
                  characters long and contains a mix of letters, numbers, and
                  special characters.
                </p>
                <div className="mb-5">
                  <label htmlFor="password" className="cursor-pointer text-sm">
                    New Password:
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="mt-3 rounded-lg px-6 py-2 w-full border border-amber-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
                      required
                    />
                    <button
                      type="button"
                      onClick={togglePassword}
                      className="absolute top-5 right-3 cursor-pointer"
                    >
                      {showPassword ? (
                        <AiOutlineEye size={24} />
                      ) : (
                        <AiOutlineEyeInvisible size={24} />
                      )}
                    </button>
                  </div>
                </div>

                <div className="mb-5">
                  <label
                    htmlFor="confirmPassword"
                    className="cursor-pointer text-sm"
                  >
                    Confirm New Password:
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      id="confirmPassword"
                      name="confirmPassword"
                      placeholder="••••••••"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="mt-3 rounded-lg px-6 py-2 w-full border border-amber-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
                      required
                    />
                    <button
                      type="button"
                      onClick={toggleConfirmPassword}
                      className="absolute top-5 right-3 cursor-pointer"
                    >
                      {showConfirmPassword ? (
                        <AiOutlineEye size={24} />
                      ) : (
                        <AiOutlineEyeInvisible size={24} />
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex gap-5 flex-row-reverse">
                  <Button text="Reset Password" type="submit" />
                  <Button text="Back" onClick={() => setStep(2)} />
                </div>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
